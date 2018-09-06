import { Directive, ElementRef, Input, HostListener } from "@angular/core";
import { ViewChange } from "../../interfaces/viewchange";
import { MenuController } from 'ionic-angular';

@Directive({
  selector: "[monitor]"
})
export class MonitorDirective {
  @Input()
  monitor: any;
  constructor(public el: ElementRef, public menuCTRL: MenuController) {}

  ngOnInit() {}
  @HostListener("click")
  onClick() {
    /*if (this.el.nativeElement.classList.contains('animated--menubutton'))
    {
      this.el.nativeElement.classList.remove('animated--menubutton') 
    } else {
      this.el.nativeElement.classList.add('animated--menubutton')
    }*/
    this.menuCTRL.toggle();
  }
}
