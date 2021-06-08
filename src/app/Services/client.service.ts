import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


 
@Injectable({ providedIn: 'root' })
export class ClientService {
  private apiServerUrl = environment.apiBaseUrl;
 
  constructor(private http: HttpClient) {}
 
  public ajouter(): Observable<Client[]> {
    return this.http.post<Client[]>(
      `${this.apiServerUrl}/client/afficherPrestation`
    );
  }
}