import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public afficher(): Observable<Client[]> {
    return this.http.get<Client[]>(
      `${this.apiServerUrl}/client/afficherClient`
    );
  }
  addClient(client: Client): Observable<Client> {
      console.log(client);
    return this.http.post<Client>(
      `${this.apiServerUrl}/client/ajouterClient`,
      client
    );
  }
  deleteClient(clientId: number): Observable<void> {
     return this.http.delete<void>(`${this.apiServerUrl}/client/supprimerClient/${clientId}`);
  }
}
