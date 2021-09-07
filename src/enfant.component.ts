// Nous importons Output et EventEmitter :
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant',
  
  template: `
    {{ valeurCompteur }}
  `
})

export class EnfantComponent implements OnInit {
  
  // Initialisation du compteur à 0 :
  valeurCompteur: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
  
  incrementer() {
    this.valeurCompteur++;
  }
  
  decrementer() {
    this.valeurCompteur--;
  }

}
