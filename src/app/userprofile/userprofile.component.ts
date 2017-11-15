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
<<<<<<< HEAD
   data:any[];
   hashServiceUrl = 'http://93bde717.ngrok.io/BlockChainCorePublisher/rest/getKeysForHashing';
   private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
=======
  data: any[];

>>>>>>> da060c82073bcf6a2e8787e3b89e6aff28346c21
  constructor(private userService: UserdataService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  
=======
  public getData() {

  }
>>>>>>> da060c82073bcf6a2e8787e3b89e6aff28346c21

  public sendConsent(frstname, lstname, biom, mob): void {
    this.data.push(
      { firstname: frstname, lastname: lstname, biometric: biom, mob: mob }
    )
<<<<<<< HEAD
    console.log(frstname);
    
=======


>>>>>>> da060c82073bcf6a2e8787e3b89e6aff28346c21
    if (!this.data) { return; }
   this.userService.getKeysForHashing(this.data.toString())
   //this.http.post(this.hashServiceUrl, this.data.toString(), this.httpOptions)
      .subscribe(user => {
        console.log(user);
      });
  }

}
