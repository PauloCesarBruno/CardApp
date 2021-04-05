import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardDetalhe } from 'src/app/shared/card-detalhe.model';
import { CardDetalheService } from 'src/app/shared/card-detalhe.service';

@Component({
  selector: 'app-card-detalhe-form',
  templateUrl: './card-detalhe-form.component.html',
  styles: [
  ]
})
export class CardDetalheFormComponent implements OnInit {

  constructor(public service: CardDetalheService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    // tslint:disable-next-line: curly
    // tslint:disable-next-line: triple-equals
    if (this.service.formData.cataoDetalheId == 0) {
    this.inserirGravacao(form);
    }
    else {
    this.alterarGravacao(form);
    }
  }


  // tslint:disable-next-line: typedef
  inserirGravacao(form: NgForm){
     // tslint:disable-next-line: deprecation
     this.service.postCardDetalhe().subscribe (
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Inserico com Sucesso !', 'Novo Registro');
      },
      err => { console.log (err); }
    );
  }

  // tslint:disable-next-line: typedef
  alterarGravacao(form: NgForm){
     // tslint:disable-next-line: deprecation
     this.service.putCardDetalhe().subscribe (
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Alterado com Sucesso !', 'Alteração de Registro');
      },
      err => { console.log (err); }
    );
  }

  // tslint:disable-next-line: typedef
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new CardDetalhe();
  }

}
