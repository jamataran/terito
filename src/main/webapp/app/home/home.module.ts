import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TeritoSharedModule} from 'app/shared/shared.module';
import {HOME_ROUTE} from './home.route';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [TeritoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class TeritoHomeModule {}
