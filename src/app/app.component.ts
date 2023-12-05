import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage: boolean = false;
  message: string = '';
  datos: any[] = ["Primero", "Segundo", "Tercero", "Cuarto"];

  toggleMessage(buttonNumber: number): void {
    this.showMessage = !this.showMessage;
    this.message = `Soy la ${this.getOrdinalNumber(buttonNumber)} componente`;
  }

  private getOrdinalNumber(number: number): string {
    const suffixes = ['primera', 'segunda', 'tercera', 'cuarta'];
    return suffixes[number - 1] || '';
  }
  showContent: boolean[] = [false, false, false, false];

  toggleVisibility(index: number): void {
    this.showContent[index - 1] = !this.showContent[index - 1];
  }
}
