import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { Materias } from './views/materias/materias';
import { Inicio } from './views/inicio/inicio';
import { Login } from './views/login/login';
import { Registro } from './views/registro/registro';

export const routes: Routes = [
  { path: '', redirectTo: 'materias', pathMatch: 'full' },
  { path: 'inicio', component: Inicio, canActivate: [authGuard] },
  { path: 'materias', component: Materias, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: '**', redirectTo: 'materias' },
];