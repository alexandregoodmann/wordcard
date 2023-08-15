import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WordDefinition } from 'src/modal/WordDefinition';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(
    private http: HttpClient
  ) { }

  search(word: string): Observable<WordDefinition[]> {
    return this.http.get<WordDefinition[]>(`${environment.url}/word/${word}`, httpOptions);
  }

  parseToWordDefinition(definitions: WordDefinition[]): void {
    definitions.forEach(definition => {
      let roms = JSON.parse(definition.json);
      roms.forEach(rom => {
        definition.arabs = rom.arabs;
      });
    });
  }

  list(): Observable<WordDefinition[]> {
    return this.http.get<WordDefinition[]>(`${environment.url}/word`, httpOptions);
  }

  handleError(error) {
    return throwError(error.error);
  }
}

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};