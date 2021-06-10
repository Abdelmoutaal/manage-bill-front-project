import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/models/prestations';
import { PrestationService } from 'src/app/Services/prestations.service';

@Component({
  selector: 'app-create-prestation',
  templateUrl: './create-prestation.component.html',
  styleUrls: ['./create-prestation.component.scss'],
})
export class CreatePrestationComponent implements OnInit {
  constructor(
    private router: Router,
    private prestationService: PrestationService
  ) {}

  ngOnInit(): void {}

  public onAddPrestation(addForm: NgForm): void {
    this.prestationService.addPrestation(addForm.value).subscribe(
      (response: Prestation) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
