import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/common/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList: Hero[]=[];
  phrase: string='';

  constructor(private heroService: HeroService) { }


  ngOnInit(): void {

      this.heroList=this.heroService.getAll();
      this.heroList.forEach(element => {
        //console.table(element)
      });
  }

}
