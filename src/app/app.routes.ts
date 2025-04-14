import { RouterModule ,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddnewvoteComponent } from './addnewvote/addnewvote.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivevotesComponent } from './activevotes/activevotes.component';
import { VoteshistoryComponent } from './voteshistory/voteshistory.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';

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
        path : 'addnewvote',
        component : AddnewvoteComponent
    },
    {
        path : 'aboutus',
        component : AboutusComponent
    },
    {
        path : 'activevotes',
        component : ActivevotesComponent
    },
    {
        path : 'voteshistory',
        component : VoteshistoryComponent
    },
    {
        path : 'personalinfo',
        component : PersonalinfoComponent
    },
    {
        path : '**',
        redirectTo : 'welcome'
    }//redirect unknown paths to welcome
    
];
