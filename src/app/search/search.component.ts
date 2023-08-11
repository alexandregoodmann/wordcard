import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordDTO, WordDefinition } from 'src/modal/WordDefinition';
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
    this.wordService.search(word).subscribe(json => {
      if (json != undefined && json != null) {
        this.wordDefinitions = this.wordService.parse2WordDefinition(json);
      }
    }, error => {
      console.log(error);
    }, () => {
      if (this.wordDefinitions.length > 0) {
        this.wordDefinitions.forEach(word => {
          let dto = new WordDTO();
          dto.headword = word.headword as string;
          dto.headword_full = word.headword_full as string;
          dto.wordclass = word.wordclass as string;
          this.wordService.add(dto).subscribe();
        })
      }
    });
  }


}
