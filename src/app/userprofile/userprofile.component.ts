import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  private userDetails;
  constructor(private userService: UserdataService) { }

  ngOnInit() {
  }




  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.getKeysForHashing(this.userDetails)
      .subscribe(user => {
        console.log(user);
      });
  }

}
