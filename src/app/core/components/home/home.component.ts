import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'pro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Email', 'DNI', 'FechaNac', 'Telefono', 'Direccion', 'accion'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, public registroF : MatDialog) { }
  ngOnInit(): void {
    this.getAllRegistro();
  }

  getAllRegistro() {
    this.api.getRegistro()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("No se pudo registrar")
        }
      })
  }

  Registro(){
    this.registroF.open(RegistroComponent, {
      width: '30%',
    }).afterClosed().subscribe(val=>{
      if(val === 'Registro'){
        this.getAllRegistro();
      }
    })
    
  }

  modificar(row : any){
    this.registroF.open(RegistroComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='modificar'){
        this.getAllRegistro();
      }
    })
  }

  borrar(id:number){
    this.api.borrar(id)
    .subscribe({
      next:(res)=>{
        alert("cliente borrado correctamente");
        this.getAllRegistro();
      },
      error:()=>{
        alert("no se pudo borrar")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
