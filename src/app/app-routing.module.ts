import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";


const routes: Routes = [
  {path:"", component: NavigationBarComponent},
  {path:"sign-in", component: SignInComponent},
  {path:"**", component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
