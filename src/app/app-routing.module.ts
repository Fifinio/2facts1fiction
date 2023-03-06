import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HeroComponent } from './hero/hero.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'play', component: GameComponent },
  { path: '', component: HeroComponent },
  // 404
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
