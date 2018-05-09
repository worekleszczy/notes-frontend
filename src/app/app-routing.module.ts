import { NgModule, Injectable }             from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import {NotesComponent} from './notes/notes.component';
import {LoginComponent} from './login/login.component';


@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class UserLogged implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/notes']);
            return false;
        }
        return true;
    }
}

// const routes: Routes = [
//     // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     // { path: 'dashboard', component: DashboardComponent },
//     // { path: 'detail/:id', component: HeroDetailComponent },
//     // { path: 'heroes', component: HeroesComponent }
//     { path: 'notes', component: NotesComponent , canActivate: [AuthGuard]},
//     {path: 'login', component: LoginComponent}
//   ];
   
  @NgModule({
    imports: [ RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'notes', component: NotesComponent , canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent, canActivate: [UserLogged]}
    ]) ],
    exports: [ RouterModule ],
    providers: [AuthGuard, UserLogged]
  })
  export class AppRoutingModule {}