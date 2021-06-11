import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Devis } from "../models/devis";




@Injectable({ providedIn: 'root' })
export class DevisService {
  private apiServerUrl = environment.apiBaseUrl;
 
  constructor(private http: HttpClient) {}
 
  public afficher(): Observable<Devis[]> {
    return this.http.get<Devis[]>(
      `${this.apiServerUrl}/devis/listDevis`
    );
  }
  addDevis(devis: Devis): Observable<Devis> {
    console.log(devis);
  return this.http.post<Devis>(
    `${this.apiServerUrl}/devis/addDevis`,
    devis
  );
} 
}