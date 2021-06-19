import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public name ='';
  public email='';
  public pass ='';

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  summit(name,email,pass){
    alert(`Student info: \n
          Name: ${name} \n
          Insitutional Email: ${email} \n
          Password: ${pass}`)
  }

}
