import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { ClientComponent } from './components/pages/client/client.component';
import { CreateClientComponent } from './components/pages/client/create-client/create-client.component';
import { ListClientComponent } from './components/pages/client/list-client/list-client.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CreateDevisComponent } from './components/pages/devis/create-devis/create-devis.component';
import { DevisComponent } from './components/pages/devis/devis.component';
import { FactureComponent } from './components/pages/facture/facture.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreatePrestationComponent } from './components/pages/prestations/create-prestation/create-prestation.component';
import { ListPrestationsComponent } from './components/pages/prestations/list-prestations/list-prestations.component';
import { PrestationsComponent } from './components/pages/prestations/prestations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'facture', component: FactureComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'create-devis', component: CreateDevisComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'client', component: ClientComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'list-prestations', component: ListPrestationsComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'list-client', component: ListClientComponent },
  { path: 'create-prestation', component: CreatePrestationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
