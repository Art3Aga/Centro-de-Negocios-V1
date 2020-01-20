import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Centro de Negocios';
  }
  getTitulo(texto: string) {
    this.title = texto;
}

}
