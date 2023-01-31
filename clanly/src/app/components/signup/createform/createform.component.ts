import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent {

  signupForm: FormGroup = new FormGroup({});
  
  constructor(private auth: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
      password2: new FormControl()
    });
  }

  signUp() {
    const user = this.signupForm.value;

    if (user.password !== user.password2) {
      this.signupForm.patchValue({ password: '', password2: '' });
      alert("Passwords don't match");
    }
    else {
      this.auth.signup(user.username, user.email, user.name, user.password).subscribe(data => {
        if (data.hasOwnProperty('error')) {
          this.signupForm.reset();
          alert(data.error);
        }
        else {
          alert("Account created successfully");
          this.router.navigate(['/login']);
        }
      });
    }
  }

}
