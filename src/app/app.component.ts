import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableCoursesComponent, TableStudentsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursos: boolean = true;

  hangleCambio() {
    this.cursos = !this.cursos;
  }
}
