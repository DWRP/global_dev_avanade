import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dacd-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  @Input() userInFav = false

  constructor() { }

  ngOnInit(): void {
    
  }
  
  @Output() favorite = new EventEmitter()
  
  @Input() userData: {
    id: number | null,
    login: string,
    name: string,
    bio: string,
    avatar_url: string,
    public_repos:string
  } = {
    id: null,
    login: '',
    name: '',
    bio: '',
    avatar_url: '',
    public_repos:''
  }
  
  addFav(){
    this.favorite.emit()
  }
}
