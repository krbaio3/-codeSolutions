import { NgLogConfig } from './ng-log-config';

const environment = {
  production: true;
}

const LIFECYCLE_HOOKS = [
  'ngOnChanges',
  'ngOnInit',
  'ngAfterContentInit',
  'ngAfterViewInit',
  'ngOnDestroy',
];

export function NgLog(): ClassDecorator {
  return function(constructor: any) {
    if (!environment.production) {
      // Modify Events for needs
      const component = constructor.name;

      LIFECYCLE_HOOKS.forEach(hook => {
        const original = constructor.prototype[hook];

        constructor.prototype[hook] = function(...args) {
          console.log(
            `%c ${component} - ${hook}`,
            `color: #4CAF50; font-weight: bold`,
            ...args
          );
          original && original.apply(this, args);
        };
      });
    }
  };
}
