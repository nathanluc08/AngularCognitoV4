import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { DashboardChartJSComponent } from "./chartsJS/dashboardChartJS/dashboard-chartjs.component";
import { DashboardServerComponent } from "./Server/dashboard-server/dashboard-server.component";
import { ProfilesComponent } from "./components/profiles/profiles.component";
import { UsersCompanyComponent } from "./components/users-company/users-company.component";
import { CompanyComponent } from "./components/company/company.component";

const routes: Routes = [
  { path:'navbar', component: NavigationBarComponent,
    children:
      [
        { path:'', redirectTo:'dashboardChartJS', pathMatch:'full' },
        { path:'dashboardChartJS', component: DashboardChartJSComponent },
        { path:'dashboardServer', component: DashboardServerComponent },
        { path:'profiles', component: ProfilesComponent },
        { path:'usersCompany', component: UsersCompanyComponent },
        { path:'company', component: CompanyComponent },
      ]
  },
  { path:'sign-in', component: SignInComponent },
  { path:'**', component: SignInComponent },
  { path:'', component: SignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
