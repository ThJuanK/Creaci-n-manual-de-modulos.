import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent{
  
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    
      const heroeBorrado: string= this.heroes.pop() || '';
      if (heroeBorrado != ''){
        this.heroesBorrados.push(heroeBorrado)
      }
  }

}
