import { Component } from '@angular/core';



@Component({
  selector: 'app-palin',
  templateUrl: './palin.component.html',
  styleUrl: './palin.component.css'
})
export class palinComponent {

  palavra: string = '';
  resultado: boolean | null = null;

  verificarPalindromo(): void {
    const palavraInvertida = this.palavra.split('').reverse().join('');
    this.resultado = this.palavra.toLowerCase() === palavraInvertida.toLowerCase();
  }
}
