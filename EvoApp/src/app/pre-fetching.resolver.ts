import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DataServerService} from "./data-server.service";

@Injectable({
  providedIn: 'root'
})
export class PreFetchingResolver implements Resolve<object> {
  constructor(
    private _dataServer: DataServerService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    return this._dataServer.getPostById();
  }
}
