import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadMfaService } from '../servicess/load-mfa.service';

@Injectable({
  providedIn: 'root'
})
export class LoadMfaGuard implements CanActivate {

  constructor(
    private loadMfaService: LoadMfaService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const bundleUrl = "http://192.168.100.11/N-tier/main.js" //route.data.bundleUrl as unknown;
    if (!(typeof bundleUrl === 'string')) {
      console.error(`
        The LoadMfaGuard is missing information on which bundle to load.
        Did you forget to provide a bundleUrl: string as data to the route?
      `);
      return Promise.resolve(false);
    }

    return this.loadMfaService.loadBundle(bundleUrl);
  }
  
}
