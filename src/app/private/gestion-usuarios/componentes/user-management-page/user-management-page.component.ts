import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss'],
})
export class UserManagementPageComponent implements OnInit {
  usersData: UserData[] = [
    {
      userID: "1",
      userUsername: 'AndreaC',
      name: 'Andrea Cebrian',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
    {
      userID: "2",
      userUsername: 'JuanJo',
      name: 'Juan Sevilla',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
    {
      userID: "3",
      userUsername: 'SalvadorS',
      name: 'Salvador Santo',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
    {
      userID: "4",
      userUsername: 'GheorgheB',
      name: 'Gheorghe Bucurici',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
    {
      userID: "5",
      userUsername: 'BarbaraR',
      name: 'Barbara Rodriguez',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
    {
      userID: "6",
      userUsername: 'MichelleM88',
      name: 'Michelle Masias',
      email: 'string',
      status: 'active',
      role: 'user',
    },
    {
      userID: "7",
      userUsername: 'Gabi',
      name: 'José Gabriel',
      email: 'string',
      status: 'active',
      role: 'user',
    },
    {
      userID: "8",
      userUsername: 'Tomy',
      name: 'Tomas Algo',
      email: 'string',
      status: 'active',
      role: 'user',
    },
    {
      userID: "9",
      userUsername: 'Paco',
      name: 'Francisco Jose',
      email: 'string',
      status: 'active',
      role: 'user',
    },
    {
      userID: "10",
      userUsername: 'SergioP',
      name: 'Sergio Piedas',
      email: 'string',
      status: 'inactive',
      role: 'user',
    },
    {
      userID: "11",
      userUsername: 'JuanJe',
      name: 'Juan Jesús',
      email: 'string',
      status: 'inactive',
      role: 'user',
    },
    {
      userID: "12",
      userUsername: 'Mario',
      name: 'Mario Bros',
      email: 'string',
      status: 'active',
      role: 'admin',
    },
  ];

  filteredUsers: UserData[];
  filteredAdmin: UserData[];

  ngOnInit(): void {
    this.filteredUsers = this.usersData.filter((user) => user.role === 'user');

    this.filteredAdmin = this.usersData.filter((user) => user.role === 'admin');
  }

  ngAfterViewInit() {}
  changeUserStatus(userid: string) {
    let userToBan = this.usersData.find((user) => user.userID == userid);
    if (!!userToBan) {
      if(userToBan.status == 'inactive')
        userToBan.status = 'active';
      else
      userToBan.status = 'inactive';
    }
  }

  
}
