import { Component, OnInit } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  wordDefinitions: WordDefinition[];
  wordDefinition: WordDefinition;
  index = 0;
  show: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.cardDS.subscribe(data => {
      this.index=0;
      this.wordDefinitions = data;
      this.wordDefinition=this.wordDefinitions[this.index];
    });
  }

  next() {
    this.show = false;
    if (this.wordDefinitions.length != (this.index + 1)) {
      this.index++;
      this.wordDefinition = this.wordDefinitions[this.index];
    }
  }

  showTranslation() {
    this.show = !this.show;
  }

}
