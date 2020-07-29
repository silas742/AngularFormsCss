import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  valor: number;
 gerarValor(): void {
 this.valor = Math.round(Math.random() * 100) + 1;
 }

  EstilosParaBotao(){
    return {
      backgroundColor: '#228B22',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
    }
  }
  ObterClassesRodape(){
    return['rodape']
  }
  obterclassValor(){
    return{
    valor:true,
numeropar:this.valor %2 ==0,
numeroimpar: this.valor%2 !=0
    }
  }
}
