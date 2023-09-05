import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component'
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeListComponent
  }, 
  
  {
    path:'home/reserva',
    component: ReservaListComponent
  },  
  {
    path:'home/registros/add',
    component: ReservaFormComponent
  },
  {
    path:'home/lugares/add',
    component: LugaresListComponent
  },
  {
    path:'home/login',
    component: LoginComponent
  },
  {
    path:'home/crea_cuenta',
    component: InicioseFormComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

