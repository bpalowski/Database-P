import { ModuleWithProviders }  from '@angular/core'; //helps provide our router to the rest of the application.
import { Routes, RouterModule } from '@angular/router'; //contain code that will help us render specific components when specific URLs are provided to the router
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
