import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MFAHttpInterceptor } from 'src/app/interceptos/mfa-http-interceptor';

@Component({
  selector: 'app-host-mfa',
  template: `
    <on-fly-app
      mFARouing
    ></on-fly-app>
  `,
  styleUrls: ['./host-mfa.component.scss'],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MFAHttpInterceptor, multi: true },
  ]
})
export class HostMfaComponent /*implements OnInit, OnDestroy*/ {

  constructor() { }

  // ngOnInit(): void {
  //   console.log('new component loaded')
  // }


  // ngOnDestroy() {
  //   console.log('new component destroied')
  // }


}
