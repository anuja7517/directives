import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive ({
    selector : '[advanceCss]'
})


export class AdvanceCssDirective implements OnInit{
    constructor(private eleRef : ElementRef,
        private rendrer : Renderer2
        ){

    }
    ngOnInit(): void {
        this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','yellowgreen')
        this.rendrer.setStyle(this.eleRef.nativeElement,"padding",'15px')
        
    }
    @HostListener('mouseover')
    onmouseover (){
        this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','yellow')
    }
    @HostListener('mouseout')
    onmouseout (){
        this.rendrer.setStyle(this.eleRef.nativeElement,'background-color','aqua')
    }
}