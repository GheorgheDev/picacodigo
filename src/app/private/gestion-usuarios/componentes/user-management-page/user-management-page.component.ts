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
      user_id: "1",
      user_username: 'AndreaC',
      name: 'Andrea Cebrian',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
    {
      user_id: "2",
      user_username: 'JuanJo',
      name: 'Juan Sevilla',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
    {
      user_id: "3",
      user_username: 'SalvadorS',
      name: 'Salvador Santo',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
    {
      user_id: "4",
      user_username: 'GheorgheB',
      name: 'Gheorghe Bucurici',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
    {
      user_id: "5",
      user_username: 'BarbaraR',
      name: 'Barbara Rodriguez',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
    {
      user_id: "6",
      user_username: 'MichelleM88',
      name: 'Michelle Masias',
      email: 'string',
      status: 'active',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "7",
      user_username: 'Gabi',
      name: 'José Gabriel',
      email: 'string',
      status: 'active',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "8",
      user_username: 'Tomy',
      name: 'Tomas Algo',
      email: 'string',
      status: 'active',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "9",
      user_username: 'Paco',
      name: 'Francisco Jose',
      email: 'string',
      status: 'active',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "10",
      user_username: 'SergioP',
      name: 'Sergio Piedas',
      email: 'string',
      status: 'inactive',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "11",
      user_username: 'JuanJe',
      name: 'Juan Jesús',
      email: 'string',
      status: 'inactive',
      role: 'user',
      img: 'ruta'
    },
    {
      user_id: "12",
      user_username: 'Mario',
      name: 'Mario Bros',
      email: 'string',
      status: 'active',
      role: 'admin',
      img: 'ruta'
    },
  ];

  filteredUsers: UserData[];
  filteredAdmin: UserData[];
  user_id = 1

  ngOnInit(): void {
    this.filteredUsers = this.usersData.filter((user) => user.role === 'user');

    this.filteredAdmin = this.usersData.filter((user) => user.role === 'admin');
  }

  ngAfterViewInit() {}
  changeUserStatus(user_id: string) {
    let userToBan = this.usersData.find((user) => user.user_id == user_id);
    if (!!userToBan) {
      if(userToBan.status == 'inactive')
        userToBan.status = 'active';
      else
      userToBan.status = 'inactive';
    }
  }

  
}
