import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from 'src/app/core/components/registro/registro.component';

@Component({
  selector: 'pro-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public registroF: MatDialog) { }

  Registro(){
    this.registroF.open(RegistroComponent, {
      width: '30%',
    })
  }

}
