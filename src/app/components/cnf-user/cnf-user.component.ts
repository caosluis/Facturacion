import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnf-user',
  templateUrl: './cnf-user.component.html',
  styleUrls: ['./cnf-user.component.css']
})
export class CnfUserComponent implements OnInit {

  constructor(
    public UserService:UserService
  ) { }

  ngOnInit() {
  }

}
