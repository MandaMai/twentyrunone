import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwentyComponent } from './twenty/twenty.component';

const routes: Routes = [
  {path: 'twenty' , component: TwentyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
