import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Acoes } from 'src/app/shared/modules/acoes.interface';
import { AcoesService } from './../acoes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  value: Acoes = null; 

		navigationExtras: NavigationExtras = {
		state: {
			value: null
		}
	}
	
  constructor(private router: Router,private acoesSvc: AcoesService) {

  	const navigation = this.router.getCurrentNavigation()
  	this.value = navigation?.extras?.state.value;
  }

  ngOnInit(): void {
        if(typeof this.value === 'undefined'){
      this.router.navigate(['list'])
    }
  }
  onGoToEdit(): void {
    this.navigationExtras.state.value = this.value;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  async onGoToDelete(): Promise<void> {
    try{
      await this.acoesSvc.onDeleteAcao(this.value?.id);
      console.log(this.value)
      alert("Deletado");
      this.router.navigate(['list'])
    }catch(err){
       console.log(err);
    }
    
  }

  onBackToList() {
    this.router.navigate(['list']);

  }
}

