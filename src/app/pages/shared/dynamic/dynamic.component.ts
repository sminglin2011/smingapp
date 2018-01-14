import { Component, Input, ViewContainerRef, ComponentFactoryResolver,
  OnDestroy, ComponentRef } from '@angular/core';
@Component({
  selector: 'app-dynamic-com',
  template: ``
})
export class DynamicComponent implements OnDestroy {
  private currentComponent: ComponentRef<any>;

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) {}

  @Input() set data(data: { component: any, inputs?: { [key: string]: any } } ) {
      const compFactory = this.cfr.resolveComponentFactory(data.component);
      const component = this.vcr.createComponent(compFactory);
      if (data.inputs) {
        // tslint:disable-next-line:forin
        for (let key in data.inputs) { component.instance[key] = data.inputs[key]; }
      }
      this.destroy();
      this.currentComponent = component;
  }

  destroy() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.currentComponent = null;
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

}
