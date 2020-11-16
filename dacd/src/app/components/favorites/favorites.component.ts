import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'dacd-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  @Input() favs:any = []

  @Output() remove = new EventEmitter()
  @Output() search = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  searchFav(event:any){
    this.search.emit(event)
  }

  removeFav(event:any){
    this.remove.emit(event)
  }

}
