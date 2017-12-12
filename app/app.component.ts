import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import {Observable} from 'rxjs/Rx';

import { ToastService } from './toast/toast.service';

@Component({
  moduleId: module.id,
  selector: 'ng-app',
  templateUrl: 'app.template.html',
  styleUrls: ['./shared/css/developer.css'],
})

export class AppComponent implements OnInit {
  appName: string = "Angular Boilerplate";

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router,private toastyService:ToastyService, private toastyConfig: ToastyConfig, private _toastService: ToastService) {
        this.routeLinks = [
            {
                label: 'Products',
                link: './products',
                index: 0
            }, {
                label: 'Users',
                link: './users',
                index: 1
            }
        ];
    }
    ngOnInit(): void {
        var messageOptions = {
            title: "Welcome to App",
            msg: "From App Module",
            type: "success",
        };
        this._toastService.addToast(messageOptions);
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
