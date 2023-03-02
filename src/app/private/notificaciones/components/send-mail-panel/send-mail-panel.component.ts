import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-send-mail-panel',
  templateUrl: './send-mail-panel.component.html',
  styleUrls: ['./send-mail-panel.component.scss'],
})
export class SendMailPanelComponent implements OnInit {
  mailToControl = new FormControl();

  users: UserData[] = [
    {
      userID: 1,
      userUsername: 'AndreaC',
      name: 'Andrea Cebrian',
    },
    {
      userID: 2,
      userUsername: 'JuanS',
      name: 'Juan Sevilla',
    },
    {
      userID: 3,
      userUsername: 'SalvadorS',
      name: 'Salvador Santos',
    },
    {
      userID: 4,
      userUsername: 'GheorgheB',
      name: 'Gheorghe Bucurici',
    },
    {
      userID: 5,
      userUsername: 'BarbaraR',
      name: 'Barbara Rodriguez',
    },
  ];

  filteredUsersOptions: Observable<UserData[]>;

  ngOnInit() {
    this.filteredUsersOptions = this.mailToControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const userUsername =
          typeof value === 'string' ? value : value?.userUsername;
        return userUsername
          ? this._filter(userUsername as string)
          : this.users.slice();
      })
    );
  }

  displayFn(userData: UserData): string {
    return userData && userData.userUsername ? userData.userUsername : '';
  }

  private _filter(userUsername: string): UserData[] {
    const filterValue = userUsername.toLowerCase();

    return this.users.filter((user) =>
      user.userUsername.toLowerCase().includes(filterValue)
    );
  }

  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  mail_to: UserData;
  message_text: string = '';

  sendMessage(sendMessageForm: NgForm) {
    if(sendMessageForm.validator){
      sendMessageForm
    }
      console.log(this.mail_to, ' - ', this.message_text);
      sendMessageForm.reset();

  }
}
