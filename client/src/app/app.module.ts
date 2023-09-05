import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VehiculosService } from './services/vehiculos.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReservaListComponent,
    LugaresListComponent,
    HomeListComponent,
    ReservaFormComponent,
    LoginComponent,
    InicioseListComponent,
    InicioseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VehiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
