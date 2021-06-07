import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FactureComponent } from './components/pages/facture/facture.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DevisComponent } from './components/pages/devis/devis.component';
import { ListDevisComponent } from './components/pages/list-devis/list-devis.component';
import { ClientComponent } from './components/pages/client/client.component';
import { PrestationsComponent } from './components/pages/prestations/prestations.component';
import { CreateClientComponent } from './components/pages/client/create-client/create-client.component';
import { ListClientComponent } from './components/pages/client/list-client/list-client.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FactureComponent,
    LoginComponent,
    ContactComponent,
    DevisComponent,
    ListDevisComponent,
    ClientComponent,
    PrestationsComponent,
    CreateClientComponent,
    ListClientComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
