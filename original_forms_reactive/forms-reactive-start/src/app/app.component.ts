import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";
import { resolve, reject } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsername = ['chris', 'anna'];

  ngOnInit(): void{
    this.signupForm = new FormGroup({
      'username': new FormControl(null,[Validators.required, this.forbiddenName.bind(this)]),
      'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((val)=>console.log(val));
    this.signupForm.get('username').statusChanges.subscribe((val)=>console.log(val));
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenName(control: FormControl): {[s:string]: boolean} {

    if(!this.forbiddenUsername.indexOf(control.value)){
      return {"forbiddenName": true};
    }
    return null;
  }

  forbiddenEmails(control:FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=== "test@test.com"){
          return resolve({"emailForbidden": true});
        }else{
          resolve(null);
        }
      },1500)
    });

    return promise;
  }
}
