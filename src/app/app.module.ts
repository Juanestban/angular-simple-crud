import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComComponent } from './components/test-com/test-com.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutPrincipalComponent } from './components/layout-principal/layout-principal.component';
import ModulesMaterialUI from './material-ui/';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComComponent,
    NavigationComponent,
    LayoutPrincipalComponent,
    FormUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ModulesMaterialUI,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
