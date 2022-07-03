import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ImageService } from 'src/services/image.service';
import { LocalStoreService } from 'src/services/local-store.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoBase64!: SafeResourceUrl;
  showModal: boolean = false;

  constructor(private readonly localStoreService: LocalStoreService, private readonly router: Router) { }

  ngOnInit(): void {

  }

  onLogout() {
    this.showModal = true;
  }

  onConfirm() {
    this.localStoreService.deleteItem("loggedIn");
    this.localStoreService.deleteItem("order-id");
    this.router.navigate(['/login']);
  }

  onClose() {
    this.showModal = false;
  }
}
