import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  subscription: Subscription;
  errorMessage:any;
  showError = false;
  constructor(public  service: AuthService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
      this.errorMessage ="";
    this.service.formData = {
      code: "",
     
    }
  }

  onSubmit(form: NgForm) {
    
  
      this.submitCode(form);
    
  }

  submitCode(form: NgForm) {
    
    this.service.postAuth(form.value).subscribe(result => {
      this.resetForm(form);
      console.log(result);
        alert(result);
    }, error => {
      this.showError = true;
      this.errorMessage = error.error;
    }); 
  }
 

}
