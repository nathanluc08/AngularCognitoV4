import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { DashboardChartJSComponent } from "./chartsJS/dashboardChartJS/dashboard-chartjs.component";
import { DashboardGoogleChartsComponent } from "./GoogleCharts/dashboard-GoogleCharts/dashboard-GoogleCharts.component";

const routes: Routes = [
  { path:'', component: NavigationBarComponent,
    children:
      [
        { path:'', redirectTo:'dashboardChartJS', pathMatch:'full' },
        { path:'dashboardChartJS', component: DashboardChartJSComponent },
        { path:'dashboardGC', component: DashboardGoogleChartsComponent },
      ]
  },
  { path:'sign-in', component: SignInComponent },
  { path:'**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
