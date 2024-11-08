import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { courses } from './mock-courses';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent implements OnInit {
  public courses?: any[];
  // cuando inicia un componente incia aqui
  ngOnInit(): void {
    this.courses = courses;
  }
}
