import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestation } from '../models/prestations';

 
@Injectable({ providedIn: 'root' })
export class PrestationService {
  private apiServerUrl = environment.apiBaseUrl;
 
  constructor(private http: HttpClient) {}
 
  public afficher(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(
      `${this.apiServerUrl}/client/afficherPrestation`
    );
  }
}