import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserData } from 'src/app/shared/models/user-data';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const USER_DATA: UserData[] = [
  {
    userID: 1,
    userUsername: "AndreaC",
    name: "Andrea Cebrian",
    email: "string",
    status: 'active',
    role: 'admin'
  },
  {
    userID: 2,
    userUsername: "JuanJo",
    name: "Juan Sevilla",
    email: "string",
    status: 'active',
    role: 'admin'
  },
  {
    userID: 3,
    userUsername: "SalvadorS",
    name: "Salvador Santo",
    email: "string",
    status: 'active',
    role: 'admin'
  },
  {
    userID: 4,
    userUsername: "GheorgheB",
    name: "Gheorghe Bucurici",
    email: "string",
    status: 'active',
    role: 'admin'
  },
  {
    userID: 5,
    userUsername: "BarbaraR",
    name: "Barbara Rodriguez",
    email: "string",
    status: 'active',
    role: 'admin'
  },
  {
    userID: 6,
    userUsername: 'MichelleM',
    name: 'Michelle Masias',
    email: "string",
    status: 'active',
    role: 'user'
  },
  {
    userID: 7,
    userUsername: 'Gabi',
    name: 'José Gabriel',
    email: "string",
    status: 'active',
    role: 'user'
  },
  {
    userID: 8,
    userUsername: 'Tomy',
    name: 'Tomas Algo',
    email: "string",
    status: 'active',
    role: 'user'
  },
  {
    userID: 9,
    userUsername: 'Paco',
    name: 'Francisco Jose',
    email: "string",
    status: 'active',
    role: 'user'
  },
  {
    userID: 10,
    userUsername: 'SergioP',
    name: 'Sergio Piedas',
    email: "string",
    status: 'inactive',
    role: 'user'
  },
  {
    userID: 11,
    userUsername: 'JuanJe',
    name: 'Juan Jesús',
    email: "string",
    status: 'inactive',
    role: 'user'
  },
  {
    userID: 12,
    userUsername: 'Mario',
    name: 'Mario Bros',
    email: "string",
    status: 'active',
    role: 'admin'
  },

];

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss'],
})
export class UserManagementPageComponent implements OnInit {
  displayedColumns: string[] = ['userID', 'username','name', 'actions'];
  
  /* user */
  filteredUsers = USER_DATA.filter(user => user.role ==='user');
  dataSourceUser = new MatTableDataSource(this.filteredUsers);
  @ViewChild('userPaginator') paginatorUser: MatPaginator;

  /* admin */
  filteredAdmin = USER_DATA.filter(user => user.role ==='admin');
  dataSourceAdmin = new MatTableDataSource(this.filteredAdmin);
  @ViewChild('adminPaginator') paginatorAdmin: MatPaginator;

  dataparaelfiltro: MatTableDataSource<UserData>;

ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSourceUser.paginator = this.paginatorUser;
    this.dataSourceUser.paginator._intl.itemsPerPageLabel = 'Usuarios por página';
    this.dataSourceAdmin.paginator = this.paginatorAdmin;
    this.dataSourceAdmin.paginator._intl.itemsPerPageLabel = 'Usuarios por página';

  }
  
  applyFilter(event: Event, datasourse:string) {
    if(datasourse == 'user')
      this.dataparaelfiltro = this.dataSourceUser
    else
      this.dataparaelfiltro = this.dataSourceAdmin

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataparaelfiltro.filter = filterValue.trim().toLowerCase();

    if (this.dataparaelfiltro.paginator) {
      this.dataparaelfiltro.paginator.firstPage();
    }
  }

  
}
