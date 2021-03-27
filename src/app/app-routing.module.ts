import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {QuiNousSommesComponent} from './qui-nous-sommes/qui-nous-sommes.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {NosProduitsComponent} from './nos-produits/nos-produits.component';
import {SuppliersComponent} from './suppliers/suppliers.component';


const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'QuiNousSommes', component: QuiNousSommesComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'nosPrduits', component: NosProduitsComponent},
  {path: 'suppliers', component: SuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
