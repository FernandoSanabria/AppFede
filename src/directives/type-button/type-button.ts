import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[active]"
})
export class TypeButtonDirective {
  private tab: ElementRef;
  
  @Input()
  active: string;

  constructor(public el: ElementRef) {
    this.tab = this.el;
  }

  ngOnInit() {
    var el: any = document.getElementsByClassName("tab-active")[0];
    var indicator = document.getElementById("indicator");
    indicator.style.left = el.offsetLeft + "px";
    indicator.style.width = el.offsetWidth + "px";
  }
  @HostListener("click")
  onClick() {
    /**
     * Update tab indicator
     */
    var actual: any = document.getElementsByClassName("tab-active")[0];
    actual.classList.remove("tab-active");
    var nuevo: any = this.el.nativeElement;
    nuevo.classList.add('tab-active');
    var indicator = document.getElementById("indicator");
    indicator.style.left = nuevo.offsetLeft + "px";
    indicator.style.width = nuevo.offsetWidth + "px";
    /**
     * Now display tab content
     */
    let tabId: string = this.active;

    //get actual content

    let content = document.getElementsByClassName('tab-content-active')[0];

    content.classList.remove('tab-content-active');

    document.getElementById(tabId).classList.add('tab-content-active');

    console.log("change active tab");
  }
}
