import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard], data: {name: 'home', bodyClass: 'home-bg'} },
    { path: 'sign-in', component: SignInComponent, data: {name: 'sign-in', bodyClass: 'home-bg'} },
    { path: 'sign-up', component: SignUpComponent, data: {name: 'sign-up', bodyClass: 'home-bg'} },
    { path: 'new-game', component: CharacterCreatorComponent, canActivate: [authGuard], data: {name: 'new-game', bodyClass: 'new-game-bg'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  
export class AppRoutingModule { }
