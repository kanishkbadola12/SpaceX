import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: "[color]",
})

export class customDirective {
    @Input() valueFromDOM: number;
    constructor(private ele: ElementRef,
        private renderer: Renderer2) {
        renderer.setStyle(ele.nativeElement, 'color', this.valueFromDOM)
    }
}