import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
// Se sigue importando aquí
import { ResistenciasComponent } from './formularios/resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroFilterPipe,
    OperasBasComponent,
    CinepolisComponent
    // Se quita ResistenciasComponent de aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ResistenciasComponent // <-- Y se añade aquí, a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }