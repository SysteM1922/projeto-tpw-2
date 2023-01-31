import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  signinForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private authService: AuthService) {
    this.signinForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  signIn() {
    const user = this.signinForm.value;

    this.authService.login(user.username, user.password).subscribe(data => {
      if (data.hasOwnProperty('error')) {
        this.signinForm.reset();
        alert(data.error);
      }
      else {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user_id', data.id);
        this.router.navigate(['/home']);
      }
    });
  }
}
