import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'dacd-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private api:ApiService) { }

  user:any|undefined
  username: string = ''
  errorLoad: boolean = false
  nullUser: boolean = false
  favs:any = []
  lastUser:string = ''

  ngOnInit(): void {
    let fav = window.localStorage.getItem('favs')
    if(fav){
      this.favs = fav.split(',')
    }
  }

  resetInfos(){
    this.nullUser = false
    this.errorLoad = false
  }

  changeUser(event: KeyboardEvent){
    console.log((event.target as HTMLInputElement).value)
    if(!(event.target as HTMLInputElement).value.includes('\n')){
      this.username = (event.target as HTMLInputElement).value
    }else{
      (event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.replace('\n','')
      this.loadData()
    }
  }
  hasFavorites(){
    if(this.favs.length > 0){
      return true
    }
    return false
  }

  searchFav(event: any){
    console.log(event)
    this.username = event.target.value?event.target.value:''
    this.loadData()
  }

  removeFav(event: any){
    this.favs = this.favs.filter((item:string)=>item !== event.target.value)
    window.localStorage.setItem('favs',this.favs.join(','))
  }

  addFav(){
    this.favs.push(this.username)
    window.localStorage.setItem('favs',this.favs.join(','))
  }

  userInFav(){
    if(this.favs){
      if(this.favs.includes(this.lastUser)){
        return false
      }
    }
    return true
  }
  loadData(){
    this.lastUser = this.username
    if(this.username){
      this.api.loadData(this.username).subscribe(data =>this.user = data,err=>{
        this.errorLoad = true
        this.user = undefined

      })
    }else{
      this.nullUser = true
    }
  }
}
