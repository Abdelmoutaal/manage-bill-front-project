import { Client } from 'src/app/models/client';
import { LignesDevis } from 'src/app/models/lignesDevis';
import { EntreprisePrestation } from './entreprisePrestation';
import { Etat } from './etat';


export interface Devis {
    id: number;
    num: number;
    client: Client;
    lignes: LignesDevis[]; 
    etat: Etat;
    dateEmission: Date;
    entreprisePrestation: EntreprisePrestation;
}