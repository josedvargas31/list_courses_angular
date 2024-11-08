import { Component, OnInit } from '@angular/core';
import { courses } from './mock-courses';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent implements OnInit {
  // cuando inicia un componente incia aqui
  public courses?: any[];
  ngOnInit(): void {
    this.courses = courses;
  }
}
