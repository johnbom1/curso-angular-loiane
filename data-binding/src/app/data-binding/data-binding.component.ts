import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']

})
export class DataBindingComponent implements OnInit {

  getValor() {
    return 1;
  }
  url: string = 'http://loiane.com';

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  cursoAngular: boolean = true;
  urlImagem = "https://img.freepik.com/fotos-gratis/caminho-no-meio-de-edificios-sob-um-ceu-escuro-no-japao_181624-43078.jpg?w=900&t=st=1666122763~exp=1666123363~hmac=4dff9a43f1efd0d6f8b3b41f958c262557166538ffb75dee7a37a879333b17cb";

  nomeDoCurso: string = 'Angular';


  valorInicial = 15;


  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');

  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
