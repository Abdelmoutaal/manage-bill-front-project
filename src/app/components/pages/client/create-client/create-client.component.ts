import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  createForm = new FormGroup({
    numero: new FormControl('', [Validators.required]),
    rasonSocial: new FormControl('', [Validators.required]),
    numeroTVA: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
