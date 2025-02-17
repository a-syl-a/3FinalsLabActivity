import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loginForm: FormGroup;
  constructor () {
    this.loginForm = new FormGroup ({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    })
  }
  title = 'form-app';
  name: string = "";
  username: string = "";
  password: string = "";
  confirmpass: string = "";

  userName: string = "";
  formData: FormGroup = new FormGroup({
    userName: new FormControl("")
  });

  onClickSubmit(data: { userName: string }) {
    this.userName = data.userName;
  }

  submitted: boolean = false;

  onSubmit () {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
    this.submitted = true;
  }
}
