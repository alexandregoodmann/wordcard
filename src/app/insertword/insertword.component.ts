import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-insertword',
  templateUrl: './insertword.component.html',
  styleUrls: ['./insertword.component.css']
})
export class InsertwordComponent implements OnInit {

  group: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dictionary: DictionaryService
  ) { }

  ngOnInit() {
    this.group = this.fb.group({
      word: [null, [Validators.required]]
    });
  }

  add() {
    let w = this.dictionary.findWord('lesen').subscribe(d => {
      console.log('d', d);
    });
    console.log('w', w);

  }

}
