import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestations';
import { PrestationService } from 'src/app/Services/prestations.service';

 
@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements OnInit {
  public prestations: Prestation[] = [];
 
  constructor(private prestationService: PrestationService) {}
 
  ngOnInit() {
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