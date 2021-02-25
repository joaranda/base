import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['Spierman', 'IronMan', 'Thor', 'Hulk', 'Capital America'];
  heroeBorrado: string = '';

  BorrarHerroe() {
   this.heroeBorrado = this.heroes.shift() || '';
}

}

