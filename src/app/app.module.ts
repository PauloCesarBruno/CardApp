import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importado
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importado
import { ToastrModule } from 'ngx-toastr'; // Importado


import { AppComponent } from './app.component';
import { CardDetalhesComponent } from './card-detalhes/card-detalhes.component';
import { CardDetalheFormComponent } from './card-detalhes/card-detalhe-form/card-detalhe-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardDetalhesComponent,
    CardDetalheFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importado
    HttpClientModule, // Importado
    BrowserAnimationsModule, // Importado
    ToastrModule.forRoot() // Importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
