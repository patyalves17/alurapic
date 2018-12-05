import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { vMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[SignInComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        vMessageModule,
        RouterModule
    ]
})
export class HomeModule{}