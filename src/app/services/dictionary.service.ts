import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WordDefinition } from 'src/modal/WordDefinition';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  findPons(word: string) {
    return this.http.get('api/dictionary?l=dept&q=' + word, requestOptions);
  }

  findWord(word: string) {
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/de/' + word);
  }

  dicionarios() {
    return this.http.get('api/dictionaries?language=pt');
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

}

const requestOptions = {
  headers: new HttpHeaders({
    'X-Secret': '1b1138b30031b9b8fb2e8d010d8d4afe0f18a1c51c4795c7f3428ec1a51e651f'
  }),
};