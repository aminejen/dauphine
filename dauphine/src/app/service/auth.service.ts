import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _authorizationToken: string ="Basic " + btoa("admin" + ":" + "admin");
  get authorizationToken():string{
    return this._authorizationToken;
  }
  constructor() { }

}
