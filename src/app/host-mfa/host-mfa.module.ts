import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostMfaComponent } from './components/host-mfa/host-mfa.component';
import { RouterModule } from '@angular/router';
import { LoadMfaGuard } from './guards/load-mfa.guard';
import { MFARouingDirective } from './directives/rouing.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HostMfaComponent, MFARouingDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        canActivate: [LoadMfaGuard],
        component: HostMfaComponent
      }
    ]),
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HostMfaModule { }
