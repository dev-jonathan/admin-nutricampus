import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prato {
  id_prato?: number;
  nome_prato?: string;
  link_receita?: string;
  ingredientes?: Ingrediente[];
}

export interface Ingrediente {
  id_ingrediente?: number;
  nome_ingrediente?: string;
  quantidade_original?: number;
  unidade_original?: string;
  a_gosto?: boolean;
  quantidade_normalizada?: number;
  unidade_normalizada?: string;
  calorias?: number;
  id_prato?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PratosService {
  // private apiUrl = 'http://127.0.0.1:8000';
  private apiUrl = 'https://nutricampus-api.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getPratos(): Observable<Prato[]> {
    return this.http.get<Prato[]>(`${this.apiUrl}/pratos/`);
  }

  createPrato(prato: Prato): Observable<Prato> {
    return this.http.post<Prato>(`${this.apiUrl}/pratos/`, prato);
  }

  updatePrato(prato: Prato): Observable<Prato> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Prato>(
      `${this.apiUrl}/pratos/${prato.id_prato}`,
      prato,
      { headers },
    );
  }

  deletePrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pratos/${id}`);
  }

  // Métodos para ingredientes
  createIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(
      `${this.apiUrl}/ingredientes/`,
      ingrediente,
    );
  }

  updateIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(
      `${this.apiUrl}/ingredientes/${ingrediente.id_ingrediente}`,
      ingrediente,
    );
  }

  deleteIngrediente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ingredientes/${id}`);
  }
}
