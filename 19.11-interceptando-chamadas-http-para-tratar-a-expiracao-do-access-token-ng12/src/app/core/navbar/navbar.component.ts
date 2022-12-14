import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean = false;
  usuarioLogado: string = ''

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.usuarioLogado = this.auth.jwtPayload?.nome;
  }
  
  temPermissao(permissao: string) {
    return this.auth.temPermissao(permissao);
  }
}
