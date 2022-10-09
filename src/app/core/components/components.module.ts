import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistroComponent } from "./registro/registro.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        HomeComponent,
        RegistroComponent,
    ],
    imports:[
        RouterModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        CommonModule,
    ],
    exports:[
        HomeComponent,
        RegistroComponent,
    ],
})


export class componentsModule{

}