import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'managment',
  },
  {
    path: 'managment',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/modules/managment/managment.module').then(
        (m) => m.ManagmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
