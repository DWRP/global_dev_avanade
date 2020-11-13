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

  ngOnInit(): void {
  }

  changeUser(event: KeyboardEvent){
    if((event.target as HTMLInputElement).value !== '\n'){
      this.username = (event.target as HTMLInputElement).value
    }else{
      (event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.replace('\n','')
      this.loadData()
    }
  }


  loadData(){
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
