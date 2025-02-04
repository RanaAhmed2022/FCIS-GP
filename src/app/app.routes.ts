import { RouterModule ,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path : '', 
        redirectTo : 'welcome', 
        pathMatch : 'full'
    }, // start with welcome page
    {
        path : 'welcome',
        component : WelcomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'registration',
        component : RegistrationComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : '**',
        redirectTo : 'welcome'
    } //redirect unknown paths to welcome
];
