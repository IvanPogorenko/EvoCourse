import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivateChild {

  constructor(
    private _data: DataService,
    private _router: Router
  ) {
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._data.userRole === 'admin'){
      return true
    } else {
      return this._router.navigateByUrl('error')
    }
  }

}
