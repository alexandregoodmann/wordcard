import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';
import { BasicCrudService } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class WordService extends BasicCrudService<WordDefinition>{

  constructor(private http: HttpClient) {
    super('http://localhost:8082/v1/wordcard', http);
  }

}
