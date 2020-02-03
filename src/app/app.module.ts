import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from '@spartacus/core';
import { CmsLibModule, StorefrontModule } from '@spartacus/storefront';
import { AppConfig } from './app-config';
import { AppComponent } from './app.component';
import { cmsSampleData } from './sample-data/cms-sample-data';
import { sampleLayoutConfig } from './sample-layout/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    CmsLibModule,

    StorefrontModule.withConfig(AppConfig),
    ConfigModule.withConfig(sampleLayoutConfig),
    ConfigModule.withConfigFactory(cmsSampleData),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
