import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  public clients: Client[] = [];
  

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.afficher();
  }
  

public afficher(): void {
  this.clientService.afficher().subscribe(
    (response: Client[]) => {
      this.clients = response;
      console.log(this.clients);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
public onDeleteClient(clientId: number): void {
  console.log(clientId);
  this.clientService.deleteClient(clientId).subscribe(
    (response: void) => {
      console.log(response);
      this.afficher();
    },
    (error : HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

}
