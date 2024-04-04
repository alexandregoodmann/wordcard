import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WordDefinition } from 'src/modal/WordDefinition';
import { ClassesDTO } from '../classes/classes.component';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  cardDS = new BehaviorSubject<WordDefinition[]>(Array<WordDefinition>());

  constructor(
    private http: HttpClient
  ) { }

  search(word: string): Observable<WordDefinition[]> {
    return this.http.get<WordDefinition[]>(`${environment.url}/word/${word}`, httpOptions);
  }

  findAllWordclass(): Observable<ClassesDTO[]> {
    return this.http.get<ClassesDTO[]>(`${environment.url}/wordclass`, httpOptions);
  }

  findByWordClass(wordclass: string): Observable<WordDefinition[]> {
    return this.http.get<WordDefinition[]>(`${environment.url}/wordclass/${wordclass}`, httpOptions);
  }

  list(): Observable<WordDefinition[]> {
    return this.http.get<WordDefinition[]>(`${environment.url}/word`, httpOptions);
  }

  handleError(error) {
    return throwError(error.error);
  }

  parseToWordDefinition(definitions: WordDefinition[]): void {
    definitions.forEach(definition => {
      let roms = JSON.parse(definition.json);
      roms.forEach(rom => {
        definition.arabs = rom.arabs;
      });
    });
  }
}

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};