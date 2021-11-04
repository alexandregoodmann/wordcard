import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Word } from 'src/modal/Word';
import { WordDefinition } from 'src/modal/WordDefinition';
import { DictionaryService } from '../services/dictionary.service';
import { LoaderService } from '../services/loader.service';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  group: FormGroup;
  retorno: Array<WordDefinition> = [];

  constructor(
    private fb: FormBuilder,
    private dictionary: DictionaryService,
    private loaderService: LoaderService,
    private wordService: WordService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.group = this.fb.group({
      word: [null, null]
    });
  }

  search() {
    let word = this.group.get('word').value;
    this.dictionary.findPons(word).subscribe(ret => {
      this.retorno = this.dictionary.parse2WordDefinition(ret);
    });
  }

  add() {
    let word = new Word();
    word.level = 'A1.1';
    word.word = this.retorno[0].headword;

    this.wordService.create(word).subscribe(() => { },
      (err) => {
        if (err.status && err.status == 'BUSINESS_ERROR') {
          this.snackBar.open(err.message, null, { duration: 3000 });
        }
      }, () => {
        this.snackBar.open('Word added', null, { duration: 3000 });
      });

  }

}
