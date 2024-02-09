import { Directive, ElementRef, OnInit } from "@angular/core";





@Directive({
    selector : '[basicCss]'
})

export class BasicCssDirective implements OnInit{
    constructor(private eleRef : ElementRef){

    }
    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        this.eleRef.nativeElement.style.backgroundColor = 'pink';
        this.eleRef.nativeElement.style.padding = '15px';
         
    }

}