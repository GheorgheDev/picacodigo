import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.scss'],
})
export class UserManagementTableComponent implements OnInit {
  @Input() userData: UserData[];

  @Output() banUsersToggle = new EventEmitter<number>();
  banUserToggle(userid:number){
    this.banUsersToggle.emit(userid)
  
  }

  displayedColumns: string[] = ['userID', 'username', 'name', 'actions'];

  dataSourceUser: any;

  @ViewChild('userPaginator') paginatorUser: MatPaginator;

  ngOnInit(): void {
    this.dataSourceUser = new MatTableDataSource(this.userData);
  }

  ngAfterViewInit() {
    this.dataSourceUser.paginator = this.paginatorUser;
    this.dataSourceUser.paginator._intl.itemsPerPageLabel =
      'Usuarios por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUser.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUser.paginator) {
      this.dataSourceUser.paginator.firstPage();
    }
  }

 
}
