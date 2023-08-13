import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordDefinition } from 'src/modal/WordDefinition';
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

  constructor(
    private fb: FormBuilder,
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
    this.wordDefinitions = [];
    let word = this.group.get('word').value;
    this.wordService.search(word).subscribe(definitions => {
      this.wordService.parseToWordDefinition(definitions);
      this.wordDefinitions = definitions;
    }, error => {
      console.log(error);
    }, () => { });
  }


}
