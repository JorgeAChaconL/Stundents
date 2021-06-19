import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
  public main = '';

  public second = '';

  public third = '';
  
  public career= '';

  public address ='';

  public phone = '';

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  subjectInfo(main,second,third,career, address, phone){
    alert(`Subjetcts Info: \n
    Main Subject: ${main} \n
    Second Subject: ${second} \n
    Third Subject: ${third} \n
    Career Subject: ${career} \n
    Address: ${address} \n
    Phone Number: ${phone}`)
  }
}
