import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector:"[apDarkenOnHover]"
})
export class DarkenOnHoverDirective{

    @Input() brightness="70%";
    constructor(private el:ElementRef,
        private render:Renderer){

        }

    @HostListener("mouseover")
    dakenOn(){
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`);
    }

    @HostListener("mouseleave")
    dakenOff(){
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(100%)`);
    }

}