import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { students } from './mock-students';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css',
})
export class TableStudentsComponent implements OnInit {
  public students?: any[];
  // cuando inicia un componente incia aqui
  ngOnInit(): void {
    this.students = students;
  }
}
