import { Component } from '@angular/core';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends  AdminDashboardComponent{
  title = 'gladiator';



   success():boolean{
    let logininfo=sessionStorage.getItem("isLoggedinAdmin");
    if(logininfo=='true'){
   
    return true;
    }
    else
      {
        return false;
      }
  }

}
