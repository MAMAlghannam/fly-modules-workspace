import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadModule } from 'mfe-helpers';

const routes: Routes = [
  {
    path: "fly-module",
    loadChildren: () => {
      return loadModule('assets/fly-app/module-on-fly.umd.js')
            .then(g => g['module-on-fly'].ModuleOnFlyModule)
    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
