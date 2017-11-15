import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  private userDetails;
   data:any[];
  
  constructor(private userService: UserdataService) { }

  ngOnInit() {
  }

  public getData() {
    
  }

  public sendConsent(frstname,lstname,biom,mob): void {
    this.data.push(
      { firstname: frstname, lastname: lstname,biometric:biom,mob:mob }
    )
    
    
    if (!this.data) { return; }
    this.userService.getKeysForHashing(this.data.toString())
      .subscribe(user => {
        console.log(user);
      });
  }

}
