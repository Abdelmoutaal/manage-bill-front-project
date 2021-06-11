import { PrestationService } from './../../../../Services/prestations.service';
import { ClientService } from './../../../../Services/client.service';
import { Devis } from './../../../../models/devis';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DevisService } from 'src/app/Services/devis.service';
import Swal from 'sweetalert2';
import { Client } from 'src/app/models/client';
import { Prestation } from 'src/app/models/prestations';

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.scss']
})
export class CreateDevisComponent implements OnInit {
  clients: Client[] = [];
  prestations: Prestation[] = [];

  constructor(private router: Router,
     private devisService: DevisService,
      private clientService: ClientService,
      private prestationService: PrestationService) { }

  ngOnInit(): void {
    this.afficher();
    this.afficherPrestation();
  }
  public onAddDevis(addForm: NgForm): void {
    //document.getElementById('add-client-form')?.click();
    this.devisService.addDevis(addForm.value).subscribe(
      (response: Devis) => {
        console.log(response);
      },

      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public afficherPrestation(): void {
    this.clientService.afficher().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public afficher(): void {
    this.prestationService.afficher().subscribe(
      (response: Prestation[]) => {
        this.prestations = response;
        console.log(this.prestations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submitCreate() {
    Swal.fire(
      'Félicitations!',
      'Devis a été bien créer avec succes ',
      'success'
    ).then(() => {
      this.router.navigate(['/create-devis']);
    });
  }
}
