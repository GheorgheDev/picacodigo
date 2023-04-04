import { NotificationServiceService } from './../../services/notification-service.service';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Message } from '../../model/message-data';
import { MatDialog } from '@angular/material/dialog';
import { InvalidFormDialogComponent } from '../invalid-form-dialog/invalid-form-dialog.component';
import { ValidMessageformDialogComponent } from '../valid-messageform-dialog/valid-messageform-dialog.component';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';
import { NewMailBoxDataDB } from '../../model/mailbox-data';
@Component({
  selector: 'app-send-mail-panel',
  templateUrl: './send-mail-panel.component.html',
  styleUrls: ['./send-mail-panel.component.scss'],
})
export class SendMailPanelComponent implements OnInit {
  constructor(
    private _ngZone: NgZone,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    public sharedServices: SharedServicesService,
    public notificationService: NotificationServiceService,

  ) {}

  user_id = "0"
  user_idFromSS: string | null = sessionStorage.getItem('user_id');

  //Lista de usuarios en enviar nuevo mensaje
  users: UserData[] = [];

  filteredUsersOptions: Observable<UserData[]>;

  messageForm: FormGroup = this._fb.group({
    mail_to: ['', [Validators.required]],
    message_text: ['', [Validators.required]],
  });

  fData: FormData = new FormData();
  message: Message = {} as Message;

  ngOnInit() {
    if (!!this.user_idFromSS) {
      this.user_id = this.user_idFromSS
    }
    this.sharedServices.getAllUsers().subscribe((data) => {
      this.users = data;
    });

    this.filteredUsersOptions = this.messageForm.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const username = typeof value === 'string' ? value : value?.username;
        return username ? this._filter(username as string) : this.users.slice();
      })
    );
  }

  displayFn(userData: UserData): string {
    return userData && userData.username ? userData.username : '';
  }

  private _filter(username: string): UserData[] {
    const filterValue = username.toLowerCase();

    return this.users.filter((user) =>
      user.username.toLowerCase().includes(filterValue)
    );
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  verifyValidUser() {
    let foundAndUser = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.messageForm.value.mail_to == this.users[i])
        if (this.users[i].user_id != this.user_id) {
          foundAndUser = 1;
        }
    }
    return foundAndUser;
  }

  sendMessage() {
    console.log(this.messageForm.value.mail_to)
    let newMessage: NewMailBoxDataDB= {} as NewMailBoxDataDB
    newMessage.content = this.messageForm.value.message_text
    newMessage.user_to_id = this.messageForm.value.mail_to.user_id
    newMessage.user_from_id = this.user_id
    newMessage.date = new Date
    newMessage.read = 0
    
    if (this.messageForm.invalid || this.verifyValidUser() == 0) {
      this.messageForm.markAllAsTouched();
      this.dialog.open(InvalidFormDialogComponent);
    } else {
      //console.log(this.messageForm.value.mail_to, ' - ', this.messageForm.value.message_text);
      this.messageForm.reset();
      this.dialog.open(ValidMessageformDialogComponent);
    }
  }

  addMessageToDB(newMessage: NewMailBoxDataDB){
    console.log("esto es el mensaje de nuevo: ", newMessage)
    this.notificationService.addNewMessage(newMessage).subscribe({
      next: newMessageID => {
        console.log("esto es el id del message created: ", newMessageID);
      },
      error: error => {
        console.log(error);
        console.log("error del add message")
      },
      complete: () => {
        console.log("vete a dormids")
      }
    });
  }
}
