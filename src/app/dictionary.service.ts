import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  findWord(word: string) {
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/de/' + word);
  }
}
