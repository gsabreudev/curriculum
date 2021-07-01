import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'job', component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
