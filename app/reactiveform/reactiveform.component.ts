import { Component, OnInit } from "@angular/core";
import {  FormControl,  FormGroup,  Validators,  FormBuilder,} from "@angular/forms";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],
})
export class ReactiveformComponent implements OnInit {
  submitted = false;
  matchedPassword : any;

  constructor() {}
  ngOnInit(): void {}

  registrationForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    val: new FormControl("", [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
  });

  get userName() {
    return this.registrationForm.get("userName");
  }
  get val() {
    return this.registrationForm.get("val");
  }
  get password() {
    return this.registrationForm.get("password");
  }
  get confirmPassword() {
    return this.registrationForm.get("confirmPassword");
  }
  get city() {
    return this.registrationForm.get("city");
  }
  get country() {
    return this.registrationForm.get("country");
  }
  get code() {
    return this.registrationForm.get("code");
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      alert("Please Fill the whole form");
      return;
    } else {
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.registrationForm.value));
      if ( this.registrationForm.value["password"] === this.registrationForm.value["confirmPassword"] ) {
        alert(" Password Matched "); 
        this.matchedPassword  = "Password  Matched";       
        console.log(this.registrationForm.value);
      } else {
        this.submitted = false;
        if (!this.submitted) {
         // alert(" Password Not Matched");
         this.matchedPassword  = "Password Not Matched";
          console.log(this.registrationForm.value);
        }
      }
    }
  }
}
