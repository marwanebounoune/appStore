import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc:KeycloakInstance;

  constructor() { }

  async init(){
    console.log("Security Initialisation ...");
    this.kc = new Keycloak({
      url: "http://localhost:8080/auth",
      realm: "my-ecom-realm",
      clientId: "AngularProductsApp"
    });
    await this.kc.init({
      //onLoad:'login-required',
      onLoad: "check-sso"
    });
    console.log(this.kc.token);
  }

}
