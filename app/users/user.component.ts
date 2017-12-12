import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastService } from '../toast/toast.service';
import { User } from './user';
import { clone } from 'lodash';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

//import * as CryptoJS from 'crypto-js';

@Component({
    moduleId: module.id,
    templateUrl: 'user.template.html'
})

export class UserComponent implements OnInit {
  users: User[];
  userForm: boolean = false;
  editUserForm: boolean = false;
  isNewForm: boolean;
  newUser: any = {};
  editedUser: any = {};
  apiUrl: string = "http://peyala.indusnettechnologies.com:8080/peyala/api/get-faq-web/";

  constructor(private _userService: UserService, private _toastService: ToastService, private http: Http) { }

  ngOnInit() {
    this.getRecords();
    this.getData();
    this.getUsers();

    var messageOptions = {
        title: "Welcome to User Listing",
        msg: "From User Module",
        type: "info",
    };
    this._toastService.addToast(messageOptions);
  }

  getUsers() {
    this.users = this._userService.getUsersFromData();
  }

  getData() {
    return this.http.post(this.apiUrl, {}).map((res: Response) => res.json());
    
  }
  getRecords() {
    
    // Encrypt 
    //var ciphertext = CryptoJS.AES.encrypt('my message', '518740671b7851e1d0a18c14262754e0');
      
    // Decrypt 
    //var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), '518740671b7851e1d0a18c14262754e0');
    //var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    this.getData().subscribe(data => {
        console.log(data);
        // Decrypt 
        //var bytes  = crypto.AES.decrypt(data.toString(), '518740671b7851e1d0a18c14262754e0');
        //var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        //console.log(plaintext);
    })
  }
}
