import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[animate]"
})
export class AnimateTextDirective {
  @Input()
  private animate: Array<String>;

  constructor(private el: ElementRef) {
    console.info("Hello AnimateTextDirective Directive");
  }
  ngOnInit() {
    var nt = 0;
    var len = this.animate.length;
    var native = this.el.nativeElement;
    native.innerText = this.animate[0];
    native.classList.add('animateSloganFadeIn');

    const animateLegend = setInterval(() => {
      if (nt < (len - 1)) {
        nt++;
      } else {
        nt = 0;
        native.innerText = this.animate[len-1]
        clearTimeout(animateLegend);
        return;
      }
      native.innerText = this.animate[nt];
    }, 1500);
  }
}
