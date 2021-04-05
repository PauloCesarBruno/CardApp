import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { CardDetalhe } from '../shared/card-detalhe.model';
import { CardDetalheService } from '../shared/card-detalhe.service';

@Component({
  selector: 'app-card-detalhes',
  templateUrl: './card-detalhes.component.html',
  styles: [
  ]
})
export class CardDetalhesComponent implements OnInit {

  constructor(public service: CardDetalheService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  // tslint:disable-next-line: typedef
  popularForm(selectedRecord: CardDetalhe) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  // tslint:disable-next-line: typedef
  onDelete(id: number) {
    if (confirm('Tem Certeza de que quer Deletar este Registro ?'))
    {
    this.service.deleteCardDetalhe(id)
    // tslint:disable-next-line: deprecation
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Deletado com Sucesso !', 'Registro Deletado.');
      },
      // tslint:disable-next-line: semicolon
      err => {console.log(err)}
    // tslint:disable-next-line: semicolon
    )
    }
  }

}
