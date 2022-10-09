import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'pro-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroForm !: FormGroup;
  actionBtn : string = "Registro"
  constructor(private formBuilder : FormBuilder, 
              private api : ApiService, 
              @Inject(MAT_DIALOG_DATA) public modificarF : any,
              private dialogRef : MatDialogRef<RegistroComponent>,
              ) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      Nombre : ['', Validators.required],
      Apellido : ['', Validators.required],
      Email : ['', Validators.required],
      DNI : ['', Validators.required],
      FechaNac : ['', Validators.required],
      Telefono : ['', Validators.required],
      Direccion : ['', Validators.required],
    });

    if(this.modificarF){
      this.actionBtn = "Guardar"
      this.registroForm.controls['Nombre'].setValue(this.modificarF.Nombre);
      this.registroForm.controls['Apellido'].setValue(this.modificarF.Apellido);
      this.registroForm.controls['Email'].setValue(this.modificarF.Email);
      this.registroForm.controls['DNI'].setValue(this.modificarF.DNI);
      this.registroForm.controls['FechaNac'].setValue(this.modificarF.FechaNac);
      this.registroForm.controls['Telefono'].setValue(this.modificarF.Telefono);
      this.registroForm.controls['Direccion'].setValue(this.modificarF.Direccion);
    }
  }

  
  Registro(){
    if(!this.modificarF){
      if(this.registroForm.valid){
        this.api.postRegistro(this.registroForm.value)
        .subscribe({
          next:(res)=>{
            alert("Registro Completado");
            this.registroForm.reset();
            this.dialogRef.close('Registro');
          },
          error:()=>{
            alert("Error de Registro");
          }
        })
        
      }
    }else{
      this.modificar();
    }
  }

  modificar(){
    this.api.putRegistro(this.registroForm.value, this.modificarF.id)
    .subscribe({
      next: (res) => {
        alert("Cambio Guardado");
        this.registroForm.reset();
        this.dialogRef.close('modificar');
      },
      error:()=>{
        alert("no se pudo guardar")
      }
    })
  }
  
}
