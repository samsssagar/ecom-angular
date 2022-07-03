import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/services/local-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isDisabled: boolean = true;
  loggedIn: boolean = false;
  constructor(private fb: FormBuilder, private readonly localStoreService: LocalStoreService, private readonly router: Router) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loggedIn = true;
      this.localStoreService.addItem("loggedIn", this.loggedIn.toString());
      this.router.navigate([""]);
    }
  }
}
