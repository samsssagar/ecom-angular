import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient, private readonly domSanitizer: DomSanitizer) { }

  loadImage(imageUrl: string): Observable<string> {
    return this.http.get(imageUrl, { responseType: 'blob' }).pipe(switchMap(this.blobToBase64))
  }

  private blobToBase64(blob: Blob): Observable<string> {
    return new Observable<string>(observer => {
      const reader = new FileReader();
      reader.onerror = observer.error;
      reader.onabort = observer.error;
      reader.onload = () => observer.next(reader.result as string);
      reader.readAsDataURL(blob);

      return {
        unsubscribe: reader.abort
      }
    })
  }

  sanitizedBase64Url(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
