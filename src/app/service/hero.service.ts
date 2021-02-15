import { Hero } from './../common/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

heroes: Hero[]=
[
{id: 1, name: "Ruthy Matteacci", superPower:  "Seismic Attributes",address:  "Kolomak"},
{id: 2, name: "Enoch Grollmann", superPower:  "Komodo", address:  "Maao"},
{id: 3, name: "Lauritz Badder", superPower:  "Equipment Maintenance",address:  "Tuguan"},
{id: 4, name: "Saudra Abdon", superPower:  "Online Publishing",address:  "Montego Bay"},
{id: 5, name: "Trent Tuerena", superPower:  "CTL", address:  "São Miguel dos Campos"},
{id: 6, name: "Curt Holbarrow", superPower:  "Solaris Zones",address:  "Kalpáki"},
{id: 7, name: "Dal Dorkins", superPower:  "ISO 9001",address:  "Jingzhou"},
{id: 8, name: "Dyana Champion", superPower:  "Nonprofits",address:  "‘Alāqahdārī Kirān wa Munjān"},
{id: 9, name: "Lou Prine", superPower:  "FSC certified",address:  "Derventa"},
{id: 10, name: "Norton Kippen", superPower:  "Public Policy",address:  "Wudian"}]



  constructor() { }

  getAll(){
    return this.heroes
  }
}
