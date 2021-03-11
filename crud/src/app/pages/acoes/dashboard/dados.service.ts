import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class DadosService {

	readonly dados = [
		['Janeiro',33],
		['Fevereiro',40],
		['Março',23],
		['Abril',10],
		['Maio',80],
		['jUNHO',120]

	]
  constructor() { }


  obterDados(): Observable<any>{
  	return new Observable(observable => {
  		observable.next(this.dados);
  		observable.complete();
  	})
  }
}
