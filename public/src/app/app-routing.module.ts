import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Admin/Categories/add-category/add-category.component';
import { ListCategoriesComponent } from './Admin/Categories/list-categories/list-categories.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //{path: '',redirectTo:'list-category',component:ListCategoriesComponent},
  { path: 'list-category', component: ListCategoriesComponent },
  {path: 'admin-dashboard', component: DashboardComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
