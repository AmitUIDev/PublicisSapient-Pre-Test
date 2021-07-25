import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, APP_INITIALIZER, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatafilterComponent } from './common/datafilter/datafilter.component';
import { ProductComponent } from './common/product/product.component';
import { UtilityService } from './common/utility.service';

export function utilityInitApp(utilityS: UtilityService) {
  return (): Promise<any> => {
    return utilityS.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    DatafilterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule
  ],
  providers: [
    UtilityService,
    { provide: APP_INITIALIZER, useFactory: utilityInitApp, deps: [UtilityService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
