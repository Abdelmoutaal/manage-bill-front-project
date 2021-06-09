import { HttpErrorResponse } from '@angular/common/http';
import { ClientService } from './../../../../Services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  

  constructor(private router: Router, private clientService: ClientService ) { }

  ngOnInit(): void {
  }
  public onAddClient(addForm: NgForm): void {
    //document.getElementById('add-client-form')?.click();
    this.clientService.addClient(addForm.value).subscribe(
      (response: Client) => {
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}

