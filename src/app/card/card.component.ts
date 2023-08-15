import { Component, OnInit } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  wordDefinitions: WordDefinition[];
  wordDefinition: WordDefinition;
  index = 0;
  show: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.list().subscribe(data => {
      this.wordDefinitions = data;
    }, (error) => {
      console.log(error);
    }, () => {
      this.wordService.parseToWordDefinition(this.wordDefinitions);
      this.wordDefinition = this.wordDefinitions[0];
      console.log(this.wordDefinitions);
    });
  }

  next() {
    if (this.wordDefinitions.length != (this.index + 1)) {
      this.index++;
      this.wordDefinition = this.wordDefinitions[this.index];
    }
  }

}
