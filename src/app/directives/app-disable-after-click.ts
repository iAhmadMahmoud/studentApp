import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Directive({
  selector: '[appAppDisableAfterClick]',
})
export class AppDisableAfterClick {


  @Input() disableCondition: boolean = false;
  private originalText: string = '';
  constructor(
    private ele: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('click')
  onClick(): void {
    const button = this.ele.nativeElement as HTMLButtonElement;

    this.originalText = button.innerText;

    this.renderer.setProperty(button, 'disabled', true);

    this.renderer.setProperty(button, 'innerText', 'Processing...');

    setTimeout(() => {

      this.renderer.setProperty(button, 'innerText', this.originalText);
      if(!this.disableCondition){
        this.renderer.setProperty(button, 'disabled', false);
      }

    },3000);
  }
}
