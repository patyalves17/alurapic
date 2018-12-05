import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { vMessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations:[SignInComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        vMessageModule
    ]
})
export class HomeModule{}