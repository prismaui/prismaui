import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@prismaui/core/loader';
import { DIRECTIVES } from './generated';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: () => {
        return () => defineCustomElements();
      },
    },
  ],
})
export class PrismauiModule {}
