import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
    ],
    exports: [
        NavbarComponent,
    ],
})

export class sharedMudole{

}