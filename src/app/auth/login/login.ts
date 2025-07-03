import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
})

export class Login {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    const { email, password } = this.form.value;

    this.http.get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          localStorage.setItem('user', JSON.stringify(users[0]));
          this.router.navigate(['/balance']);
        } else {
          alert('Invalid credentials');
        }
      });
  }
  
}