import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bigform',
  templateUrl: './bigform.component.html',
  styleUrls: ['./bigform.component.css']
})
export class BigformComponent implements OnInit {
  @Input() type?: string;
  editForm: FormGroup | any;
  img: File | any;
  background_img: File | any;

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {
    this.editForm = new FormGroup({
      name: new FormControl(),
      desc: new FormControl(),
      password: new FormControl(),
      password2: new FormControl(),
      password3: new FormControl(),
    });
  }

  ngOnInit(): void {
    
    if (this.type === "user") {
      this.api.getBasicProfile().subscribe((data: any) => {
        console.log(data);
        this.editForm.controls.name.setValue(data.name);
        this.editForm.controls.desc.setValue(data.bio);
      });
    } else if (this.type === "clan") {
    }
  }

  onImgChange(event: any) {
    this.img = event.target.files[0];
  }

  onBackgroundImgChange(event: any) {
    this.background_img = event.target.files[0];
  }

  onSubmit() {
    if (this.type === "user") {
      if (!this.editForm.value.password) {
        alert("Please enter your password");
      }
      else if ((this.editForm.value.password2 || this.editForm.value.password3) && this.editForm.value.password2 !== this.editForm.value.password3) {
        alert("Passwords do not match");
      }
      else {
        let header: {name: string, bio: string, password: string, new_password?: string, img?:any, background_img?:any, token?: any} = {
          name: this.editForm.value.name,
          bio: this.editForm.value.desc,
          password: this.editForm.value.password,
        };
        if (this.editForm.value.password2) {
          header.new_password = this.editForm.value.password2;
        }
        if (this.img) {
          let reader = new FileReader();
          reader.readAsDataURL(this.img);
          reader.onload = () => {
            header.img = [reader.result as string, this.img.name];
            if (this.background_img) {
              let reader2 = new FileReader();
              reader2.readAsDataURL(this.background_img);
              reader2.onload = () => {
                header.background_img = [reader2.result as string, this.background_img.name];
                this.api_call(header);
              }
            }
            else {
              this.api_call(header);
            }
          }
        }
        else if (this.background_img) {
          let reader = new FileReader();
          reader.readAsDataURL(this.background_img);
          reader.onload = () => {
            header.background_img = [reader.result as string, this.background_img.name];
            if (this.img) {
              let reader2 = new FileReader();
              reader2.readAsDataURL(this.img);
              reader2.onload = () => {
                header.img = [reader2.result as string, this.img.name];
                this.api_call(header);
              }
            }
            else {
              this.api_call(header);
            }
          }
        }
        else {
          this.api_call(header);
        }
      }
    } else if (this.type === "clan") {
      let header: { name: string, desc: string, password: string, img?:any, background_img?:any, token?: any } = {
        name: this.editForm.value.name,
        desc: this.editForm.value.desc,
        password: this.editForm.value.password,
      };
      if (this.img) {
        let reader = new FileReader();
        reader.readAsDataURL(this.img);
        reader.onload = () => {
          header.img = [reader.result as string, this.img.name];
          if (this.background_img) {
            let reader2 = new FileReader();
            reader2.readAsDataURL(this.background_img);
            reader2.onload = () => {
              header.background_img = [reader2.result as string, this.background_img.name];
              this.api_call(header);
            }
          }
          else {
            this.api_call(header);
          }
        }
      }
      else if (this.background_img) {
        let reader = new FileReader();
        reader.readAsDataURL(this.background_img);
        reader.onload = () => {
          header.background_img = [reader.result as string, this.background_img.name];
          if (this.img) {
            let reader2 = new FileReader();
            reader2.readAsDataURL(this.img);
            reader2.onload = () => {
              header.img = [reader2.result as string, this.img.name];
              this.api_call(header);
            }
          }
          else {
            this.api_call(header);
          }
        }
      } else {
        this.api_call(header);
      }
    }
  }

  api_call(header: any) {
    if (this.type === "user") {
      this.api.updateProfile(header).subscribe((data: any) => {
        if (data.hasOwnProperty('error')) {
          alert(data.error);
        }
        else {
          alert(data.success);
          if (this.editForm.value.password2) {
            this.auth.logout();
            return;
          }
          window.location.reload();
        }
      });
    } else if (this.type === "clan") {
      this.api.createClan(header).subscribe((data: any) => {
        if (data.hasOwnProperty('error')) {
          alert(data.error);
        }
        else {
          alert(data.success);
          this.router.navigate(['/myclans']);
        }
      });
    }
  }
}
