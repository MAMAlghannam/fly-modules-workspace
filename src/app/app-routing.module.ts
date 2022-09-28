import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadModule } from 'mfe-helpers';

const routes: Routes = [
  {
    path: "fly-module",
    loadChildren: () => loadModule('assets/fly-app/module-on-fly.umd.js').then(g => {console.log(Object.keys(g['module-on-fly'])); return g['module-on-fly'].ModuleOnFlyModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
