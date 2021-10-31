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
  retorno;

  constructor(
    private fb: FormBuilder,
    private dictionary: DictionaryService
  ) { }

  ngOnInit() {
    this.dictionary.dicionarios().subscribe(data => {
      console.log(data);

    });

    this.group = this.fb.group({
      word: [null, [Validators.required]]
    });
  }

  search() {
    /*
    let word = this.group.get('word').value;
    this.dictionary.findWord(word).subscribe(d => {
      this.retorno = d;
    });*/

    this.dictionary.findPons().subscribe(d => {
      console.log(d);
    });
  }

}
