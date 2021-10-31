import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit{

  @Input() definition;

  constructor() { }
  
  ngOnInit(): void {
  }

}
