import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Acoes } from '../../modules/acoes.interface';
import { AcoesService } from './../../../pages/acoes/acoes.service'

@Component({
  selector: 'app-acoes-form',
  templateUrl: './acoes-form.component.html',
  styleUrls: ['./acoes-form.component.scss']
})
export class AcoesFormComponent implements OnInit {
value: Acoes = null;
acoesForm: FormGroup;
  constructor(private router: Router,private fb:FormBuilder,private acoesSvc: AcoesService) {
  	
  	const navigation = this.router.getCurrentNavigation();
  	this.value = navigation?.extras?.state?.value;
  	this.initForm();
   }

  ngOnInit(): void {
  	

  	if(typeof this.value === 'undefined'){
  		this.router.navigate(['new'])
  	}else{
  		this.acoesForm.patchValue(this.value)
  	}
  }
  onSave():void {
  	console.log("Saved",this.acoesForm.value)
    if(this.acoesForm.valid){
      const acao = this.acoesForm.value;
      const acaoId = this.value?.id || null;
      this.acoesSvc.onSaveAcao(acao, acaoId);
      this.acoesForm.reset();
    }
  }
  onBackToList():void {
  	this.router.navigate(['list'])
  }

  private initForm():void {
  	this.acoesForm = this.fb.group({
  		Sigla: ['', [Validators.required]],
  		Nome: ['', [Validators.required]],
  		Data: ['', [Validators.required]],
  		Hora: ['', [Validators.required]],
  		Cotacao: ['', [Validators.required]],
  		Volume: ['', [Validators.required]]
  	})
  }
}
