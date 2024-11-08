import { Component, OnInit } from '@angular/core';
import { students } from './mock-students';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css',
})
export class TableStudentsComponent implements OnInit {
  // cuando inicia un componente incia aqui
  public students?: any[];
  ngOnInit(): void {
    this.students = students;
  }
}
