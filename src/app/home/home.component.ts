import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  public name = '';
  
  public lastname ='';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  post(name,lastName){
    let giveData ={
      'firstName':name,
      'lastName': lastName
    }
    this.api.postApi(giveData).subscribe((response) =>{
      let _response;
      _response = response;
      alert(_response.message);
    });
  }

  get(){
    this.api.getApi().subscribe((response)=>{
      let _response;
      _response = response;
      alert(_response.message)
    })
  }

}
