import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-send-mail-panel',
  templateUrl: './send-mail-panel.component.html',
  styleUrls: ['./send-mail-panel.component.scss']
})
export class SendMailPanelComponent implements OnInit {

  mailToControl = new FormControl();
  
  users: UserData[] = [
    {
      userID: 1,
      userUsername: "AndreaC",
      name: "Andrea Cebrian"
    },
    {
      userID: 2,
      userUsername: "JuanS",
      name: "Juan Sevilla"
    },
    {
      userID: 3,
      userUsername: "SalvadorS",
      name: "Salvador Santos"
    },
    {
      userID: 4,
      userUsername: "GheorgheB",
      name: "Gheorghe Bucurici"
    },
    {
      userID: 5,
      userUsername: "BarbaraR",
      name: "Barbara Rodriguez"
    },
  ]

  filteredUsersOptions: Observable<string[]>;

/*   ngOnInit() {
    this.filteredUsersOptions = this.mailToControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users.filter(user => user.toLowerCase().includes(filterValue));
  } */
  
  constructor() { }


}
