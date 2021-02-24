import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TeritoSharedModule } from 'app/shared/shared.module';
import { TeritoCoreModule } from 'app/core/core.module';
import { TeritoAppRoutingModule } from './app-routing.module';
import { TeritoHomeModule } from './home/home.module';
import { TeritoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TeritoSharedModule,
    TeritoCoreModule,
    TeritoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TeritoEntityModule,
    TeritoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TeritoAppModule {}
