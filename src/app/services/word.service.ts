import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { WordDTO, WordDefinition } from 'src/modal/WordDefinition';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }

  search(word: string) {
    return this.http.get('api/dictionary?q=' + word + '&l=dept', requestOptions);
  }

  add(word: WordDTO): Observable<any> {
    return this.http.post(`${environment.url}/word`, word, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  parse2WordDefinition(json: any): Array<WordDefinition> {
    let list: Array<WordDefinition> = [];
    json[0].hits.forEach(hit => {
      hit.roms.forEach(rom => {
        let definition = new WordDefinition();
        definition.headword = rom.headword;
        definition.headword_full = rom.headword_full;
        definition.wordclass = rom.wordclass;
        definition.arabs = rom.arabs;
        definition.json = json;
        list.push(definition);
      });
    });
    return list;
  }

  handleError(error) {
    return throwError(error.error);
  }

}

const requestOptions = {
  headers: new HttpHeaders({
    'X-Secret': '1b1138b30031b9b8fb2e8d010d8d4afe0f18a1c51c4795c7f3428ec1a51e651f'
  }),
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};