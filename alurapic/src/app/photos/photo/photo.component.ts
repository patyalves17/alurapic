import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector:'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent implements OnInit{
    @Input() url="";
    @Input() alt="";
    
    constructor(){}

    ngOnInit(){
        console.log("PhotoComponent");
    }

}