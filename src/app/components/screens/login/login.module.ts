import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class LoginModule { }