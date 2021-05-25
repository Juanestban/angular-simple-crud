import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NGM } from '@angular/forms';
// httpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComComponent } from './components/test-com/test-com.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutPrincipalComponent } from './components/layout-principal/layout-principal.component';
import ModulesMaterialUI from './material-ui/';

@NgModule({
  declarations: [
    AppComponent,
    TestComComponent,
    NavigationComponent,
    LayoutPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ModulesMaterialUI,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
