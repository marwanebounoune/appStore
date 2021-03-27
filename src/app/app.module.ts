import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { QuiNousSommesComponent } from './qui-nous-sommes/qui-nous-sommes.component';
import { ContactComponent } from './contact/contact.component';
import { NosProduitsComponent } from './nos-produits/nos-produits.component';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {HttpClientModule} from '@angular/common/http';

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    QuiNousSommesComponent,
    ContactComponent,
    NosProduitsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      deps:[KeycloakSecurityService],
      useFactory:kcFactory,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
