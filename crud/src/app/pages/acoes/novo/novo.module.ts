import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoRoutingModule } from './novo-routing.module';
import { NovoComponent } from './novo.component';
import { AcoesFormModule } from './../../../shared/components/acoes-form/acoes-form.module';

@NgModule({
  declarations: [NovoComponent],
  imports: [
    CommonModule,
    NovoRoutingModule,
    AcoesFormModule
  ]
})
export class NovoModule { }
