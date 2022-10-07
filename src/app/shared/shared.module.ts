import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        NavbarComponent,
    ],
})

export class sharedMudole{

}