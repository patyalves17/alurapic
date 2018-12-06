import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "../../core/platform-detector/platform-detector.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput:ElementRef<HTMLInputElement>;

    constructor(private formBuilde: FormBuilder,
        private auth: AuthService,
        private router:Router,
        private platformDetectorService:PlatformDetectorService) { }

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
                    this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                    

                }
            );
    }
}