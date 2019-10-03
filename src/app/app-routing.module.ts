import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConceptComponent} from './concept/concept.component';
import {JoinComponent} from './join/join.component';
import {MissionComponent} from './mission/mission.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'concept', component: ConceptComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'join', component: JoinComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
