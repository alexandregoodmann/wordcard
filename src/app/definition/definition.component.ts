import { Component, Input, OnInit } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {

  @Input() definition: WordDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
