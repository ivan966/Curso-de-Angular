import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistroComponent } from "./registro/registro.component";

@NgModule({
    declarations:[
        HomeComponent,
        RegistroComponent,
    ],
    imports:[
        RouterModule,
    ],
    exports:[
        HomeComponent,
        RegistroComponent,
    ],
})


export class componentsModule{

}