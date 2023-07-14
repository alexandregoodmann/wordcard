import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  wordDefinitions: Array<WordDefinition> = [];
  isLoading = this.loaderService.isLoading;
  json: any;

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
    this.dictionary.findPons(word).subscribe(json => {
      this.json = json;
      this.wordDefinitions = this.dictionary.parse2WordDefinition(json);
    });
  }

  add() {
    this.wordService.create(this.json).subscribe(() => { },
      (err) => {
        if (err.status && err.status == 'BUSINESS_ERROR') {
          this.snackBar.open(err.message, null, { duration: 3000 });
        }
      }, () => {
        this.snackBar.open('Word added', null, { duration: 3000 });
      });
  }

}
