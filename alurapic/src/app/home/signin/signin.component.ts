import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm:FormGroup;
    
    constructor(private formBuilde:FormBuilder){}
    
    ngOnInit(): void {
       this.loginForm=this.formBuilde.group({
           userName:['' , Validators.required],
           password:['', Validators.required]
       });
    }
}