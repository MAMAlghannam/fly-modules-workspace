import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadModule } from 'mfe-helpers';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  // {
  //   path: "fly-module",
  //   loadChildren: () => {
  //     return loadModule('assets/fly-app/module-on-fly.umd.js')
  //           .then(g => g['module-on-fly'].ModuleOnFlyModule)
  //   }
  // },
  {
    path: 'mfa',
    loadChildren: () => import('./host-mfa/host-mfa.module').then(m => m.HostMfaModule)
  },
  {
    path: 'second',
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
