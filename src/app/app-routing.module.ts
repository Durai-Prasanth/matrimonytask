import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileShowComponent } from './pages/profile-show/profile-show.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
