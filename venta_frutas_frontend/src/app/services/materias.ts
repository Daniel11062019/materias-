import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../Models/MateriasModels';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MateriasService {
  private readonly url = `${environment.apiUrl}/api/v1/materias`;

  constructor(private http: HttpClient) {}

  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.url);
  }
}
