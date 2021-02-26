import {NgModule} from '@angular/core';
import {TeritoSharedLibsModule} from './shared-libs.module';
import {AlertComponent} from './alert/alert.component';
import {AlertErrorComponent} from './alert/alert-error.component';
import {HasAnyAuthorityDirective} from './auth/has-any-authority.directive';

@NgModule({
  imports: [TeritoSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [TeritoSharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
})
export class TeritoSharedModule {}
