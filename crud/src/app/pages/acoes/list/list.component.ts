import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router' 
import { AcoesService } from './../acoes.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  acoes$ = this.acoesSvc.acoes;
	navigationExtras: NavigationExtras = {
		state: {
			value: null
		}
  };

  constructor(private router: Router,private acoesSvc: AcoesService) { }

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  onGoToSee(item: any): void {
  	this.navigationExtras.state.value = item;
  	this.router.navigate(['details'],this.navigationExtras)
  }
  async onGoToDelete(item: any): Promise<void> {
    try{
      await this.acoesSvc.onDeleteAcao(item.id)
      alert("Deletado")
    }catch(err){
       console.log(err)
    }
  }
}

