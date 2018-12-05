import { Component, Input } from "@angular/core";
import { text } from "@angular/core/src/render3/instructions";

@Component({
    selector:'ap-message',
    templateUrl:'vmessage.component.html'
})
export class vMessageComponent{

    @Input() text:string='';
}