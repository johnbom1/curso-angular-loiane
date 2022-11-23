import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  incrementa() {
    //não consegui utilizar o native element.
    // this.campoValorInput?.nativeElement.value;
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
