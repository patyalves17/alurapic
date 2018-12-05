import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilde: FormBuilder,
        private auth: AuthService,
        private router:Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilde.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    doLogin() {
        let userName=this.loginForm.get('userName').value;
        let password=this.loginForm.get('password').value;

        this.auth.authenticate(userName, password)
            .subscribe(
                res => this.router.navigate(['user',userName]),
                err => {
                    console.log('error ', err)
                    this.loginForm.reset();
                }
            );
    }
}