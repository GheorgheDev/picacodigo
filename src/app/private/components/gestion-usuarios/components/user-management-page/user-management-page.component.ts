import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import { UserManagementServiceService } from '../../services/user-management-service.service';

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss'],
})
export class UserManagementPageComponent implements OnInit {
  constructor(private userService: UserManagementServiceService) { }

  filteredUsers: UserData[];
  filteredAdmin: UserData[];
  usersData: UserData[];
  userType: string = '0';

  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  ngOnInit(): void {
    if(!!this.userTypeFromSS)
      this.userType = this.userTypeFromSS
    this.getUsersForManagement()
  }

  getUsersForManagement() {
    this.userService.getUsersForManagement().subscribe(
      (user) => {
        this.usersData = user

        this.filteredUsers = this.usersData.filter((user) => user.rol === 'user');
        this.filteredAdmin = this.usersData.filter((user) => user.rol === 'admin');
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngAfterViewInit() { }
  changeUserStatus(user_id: string) {
    let userToBan = this.usersData.find((user) => user.user_id == user_id);

    if (!!userToBan) {
      if (userToBan.status == 'inactive') {
        this.userService.unbanUser(user_id).subscribe(
          (user) => {
            userToBan!.status = 'active'
            user.status = userToBan?.status
          },
          (error) => {
            console.log(error)
          }
        )
      }
      else {
        this.userService.banUser(user_id).subscribe(
          (user) => {
            userToBan!.status = 'inactive'
            user.status = userToBan?.status
          },
          (error) => {
            console.log(error)
          }
        )
      }
    }
  }
}