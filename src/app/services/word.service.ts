import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { WordDTO, WordDefinition } from 'src/modal/WordDefinition';
import { BasicCrudService, httpOptions } from './basic-crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService extends BasicCrudService<WordDefinition>{

  constructor(private http: HttpClient) {
    super('http://localhost:8082/v1/wordcard', http);
  }

  add(word: WordDTO): Observable<any> {
    return this.http.post('http://localhost:8082/v1/wordcard/word', word, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
