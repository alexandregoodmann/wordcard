import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefinitionComponent implements OnInit {

  @Input() definition: WordDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
