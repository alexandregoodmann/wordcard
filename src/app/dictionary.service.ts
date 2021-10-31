import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  findWord(word: string) {
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/de/' + word);
  }

  findPons() {
    return this.http.get('api/dictionary?l=deen&q=house', requestOptions);
  }

  dicionarios() {
    return this.http.get('api/dictionaries?language=pt');
  }

}

const requestOptions = {
  headers: new HttpHeaders({
    'X-Secret': '1b1138b30031b9b8fb2e8d010d8d4afe0f18a1c51c4795c7f3428ec1a51e651f'
  }),
};