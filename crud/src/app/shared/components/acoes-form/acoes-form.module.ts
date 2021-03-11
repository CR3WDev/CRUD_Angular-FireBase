import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AcoesFormComponent } from './acoes-form.component';

@NgModule({
  declarations: [AcoesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AcoesFormComponent]
})
export class AcoesFormModule { }
