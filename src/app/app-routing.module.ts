// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PratosComponent } from './pratos/pratos.component';

const routes: Routes = [
  { path: '', component: PratosComponent },
  // Outras rotas, se houver
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
