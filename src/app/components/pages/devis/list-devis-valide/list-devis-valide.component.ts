import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { DevisService } from 'src/app/Services/devis.service';

@Component({
  selector: 'app-list-devis-valide',
  templateUrl: './list-devis-valide.component.html',
  styleUrls: ['./list-devis-valide.component.scss']
})
export class ListDevisValideComponent implements OnInit {

  public listDevis : Devis[]=[];
  constructor(private devisService : DevisService) { }

  ngOnInit(): void {
    this.afficher();
  }
  

public afficher(): void {
  this.devisService.afficher().subscribe(
    (response: Devis[]) => {
      this.listDevis = response;
      console.log(this.listDevis);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
}
