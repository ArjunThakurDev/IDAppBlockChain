import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  private userDetails;
  data: any[]=[];

  constructor(private userService: UserdataService) { }

  ngOnInit() {
  }

  public getData() {

  }

  public sendConsent(frstname, lstname, biom, mob) {
    this.data.push(
      { firstname: frstname, lastname: lstname, biometric: biom, mob: mob }
    )
    console.log(this.data);
    
    if (!this.data) { return; }
   this.userService.getKeysForHashing(JSON.stringify(this.data))
   //this.http.post(this.hashServiceUrl, this.data.toString(), this.httpOptions)
      .subscribe(user => {
        console.log(user);
      });
  }

}
