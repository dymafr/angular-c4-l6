import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnfantComponent } from './enfant.component';

@Component({
  selector: 'my-app',

  // Nous effectuons une liason de donnée sur l'instance du composant enfant :
  template: `
    <div>
      <app-enfant></app-enfant>
    </div>
    <button (click)="decrementer()">-</button>
    <button (click)="incrementer()">+</button>
  `
})
export class AppComponent {
  @ViewChild(EnfantComponent)
  private compteur!: EnfantComponent;

  decrementer() {
    setTimeout(() => this.compteur.decrementer(), 1000);
  }

  incrementer() {
    setTimeout(() => this.compteur.incrementer(), 1000);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, EnfantComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
