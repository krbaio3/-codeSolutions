import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxCodeCoreComponent } from './ngx-code-core.component';
import { NgLogConfig } from './ngx-code-core/ng-log-config';

@NgModule({
  declarations: [NgxCodeCoreComponent],
  imports: [],
  exports: [NgxCodeCoreComponent],
})
export class NgxCodeCoreModule {
  static forRoot(config: NgLogConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: NgxCodeCoreModule,
      providers: [
        { provide: NgLogConfig, useValue: config || {} }
      ],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxCodeCoreModule,
      providers: [],
    };
  }
}
