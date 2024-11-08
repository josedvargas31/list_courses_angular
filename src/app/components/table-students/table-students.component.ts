import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { students } from './mock-students';
import { Student } from '../../models/student-to';


@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css',
})
export class TableStudentsComponent implements OnInit {
  public students?: Student[];
  // cuando inicia un componente incia aqui
  ngOnInit(): void {
    this.students = students;
  }
}
