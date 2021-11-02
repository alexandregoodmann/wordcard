import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from 'src/modal/Word';
import { BasicCrudService } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class WordService extends BasicCrudService<Word>{

  constructor(private http: HttpClient) {
    super('http://localhost:8080/v1/wordcard', http);
  }

}
