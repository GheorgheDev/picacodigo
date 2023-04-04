import { Component, OnInit } from '@angular/core';
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
      username: 'AndreaC',
      fullname: 'Andrea Cebrian',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
    {
      user_id: "2",
      username: 'JuanJo',
      fullname: 'Juan Sevilla',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
    {
      user_id: "3",
      username: 'SalvadorS',
      fullname: 'Salvador Santo',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
    {
      user_id: "4",
      username: 'GheorgheB',
      fullname: 'Gheorghe Bucurici',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
    {
      user_id: "5",
      username: 'BarbaraR',
      fullname: 'Barbara Rodriguez',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
    {
      user_id: "6",
      username: 'MichelleM88',
      fullname: 'Michelle Masias',
      email: 'string',
      status: 'active',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "7",
      username: 'Gabi',
      fullname: 'José Gabriel',
      email: 'string',
      status: 'active',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "8",
      username: 'Tomy',
      fullname: 'Tomas Algo',
      email: 'string',
      status: 'active',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "9",
      username: 'Paco',
      fullname: 'Francisco Jose',
      email: 'string',
      status: 'active',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "10",
      username: 'SergioP',
      fullname: 'Sergio Piedas',
      email: 'string',
      status: 'inactive',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "11",
      username: 'JuanJe',
      fullname: 'Juan Jesús',
      email: 'string',
      status: 'inactive',
      rol: 'user',
      picture: 'ruta'
    },
    {
      user_id: "12",
      username: 'Mario',
      fullname: 'Mario Bros',
      email: 'string',
      status: 'active',
      rol: 'admin',
      picture: 'ruta'
    },
  ];

  filteredUsers: UserData[];
  filteredAdmin: UserData[];
  userType: string = '0';

  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  ngOnInit(): void {
    if(!!this.userTypeFromSS){
      this.userType = this.userTypeFromSS
    }
    this.filteredUsers = this.usersData.filter((user) => user.rol === 'user');

    this.filteredAdmin = this.usersData.filter((user) => user.rol === 'admin');
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
