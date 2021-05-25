import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPrincipalComponent } from './components/layout-principal/layout-principal.component';
import { TestComComponent } from './components/test-com/test-com.component';

const routes: Routes = [
  { path: '', component: LayoutPrincipalComponent },
  { path: 'test-comp', component: TestComComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
