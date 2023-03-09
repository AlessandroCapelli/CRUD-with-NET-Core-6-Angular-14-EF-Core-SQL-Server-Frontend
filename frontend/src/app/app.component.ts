import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperHero Frontend';

  heroes: SuperHero[] = []
  heroToEdit?: SuperHero

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
    this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) => {
      this.heroes = result
    })
  }

  initNewHero() {
    this.heroToEdit = new SuperHero()
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero
  }

  updateHeroesList(heroes: SuperHero[]) {
    this.heroes = heroes
  }

}
