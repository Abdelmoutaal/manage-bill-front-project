import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestations';
import { PrestationService } from 'src/app/Services/prestations.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public prestations: Prestation[] = [];

  constructor(private prestationService: PrestationService) { }

  ngOnInit(): void {
    
      this.afficher();
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
  }