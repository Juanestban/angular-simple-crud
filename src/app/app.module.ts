import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComComponent } from './components/test-com/test-com.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutPrincipalComponent } from './components/layout-principal/layout-principal.component';
import ModulesMaterialUI from './material-ui/';
import { CharactersFormTableComponent } from './components/characters-form-table/characters-form-table.component';
import { CharactersService } from './services/apiRMServices/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComComponent,
    NavigationComponent,
    LayoutPrincipalComponent,
    CharactersFormTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ModulesMaterialUI,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
