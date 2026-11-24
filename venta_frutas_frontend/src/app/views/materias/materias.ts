import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MateriasService } from '../../services/materias';
import { Table } from '../../componentes/table/table';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'app-materias',
  imports: [Table],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  materiasData: any[] = [];

  constructor(private materiasService: MateriasService) {
    this.materiasService.getMaterias().subscribe((data: any[]) => {
      this.materiasData = data;
    });
  }
}
