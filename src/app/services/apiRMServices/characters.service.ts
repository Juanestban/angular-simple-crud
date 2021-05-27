import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/models/Characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.URL}/1,7`);
  }
}
