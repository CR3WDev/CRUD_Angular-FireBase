import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


	private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
  	this.dadosService.obterDados().subscribe(
  		dados=> {
  			this.dados = dados;
  			this.init();
  		})

  }

  init(): void {
  	if(typeof(google) !== 'undefined'){
  		//google.charts.load('current', {'package':['corechart']});
  		google.charts.load('current', {'packages': ['corechart'], 'callback': this.exibirColumnChart});
  	}
  }
  exibirColumnChart(): void {
	const el = document.getElementById('column_chart');
  	const chart =new google.visualization.ColumnChart(el);
	console.log(this.obterDataTable())
	console.log(this.obterOpcoes)
  chart.draw(this.obterDataTable, this.obterOpcoes());
}
  obterDataTable(): any {
  	const data = new google.visualization.DataTable();

  	data.addColumn('string','dia');
  	data.addColumn('number', 'Valor');
  	data.addRows(this.dados);

  	return data;

  }
  obterOpcoes(): any {
  	return{
  		'title': 'Grafico de Cotação de ações',
  		'width': 1000,
  		'height': 800
  }
  }
}
