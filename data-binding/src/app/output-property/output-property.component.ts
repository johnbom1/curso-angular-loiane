import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});

  }

  decrementa() {
    //não consegui utilizar o native element.
    // this.campoValorInput?.nativeElement.value;
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});

  }


  constructor() { }

  ngOnInit(): void {
  }

}
