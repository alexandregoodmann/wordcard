import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  displayedColumns: string[] = ['classes', 'qtd'];
  dataSource: ClassesDTO[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private wordService: WordService
  ) { }

  ngOnInit(): void {
    this.wordService.findAllWordclass().subscribe(data => {
      this.dataSource = data;
    });
  }

  select(classe: string) {
    this.wordService.findByWordClass(classe).subscribe(data => {
      this.wordService.cardDS.next(data);
    });
  }
}

export interface ClassesDTO {
  wordclass: string;
  qtd: number;
}