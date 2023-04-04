import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Message } from '../../model/message-data';
import { MatDialog } from '@angular/material/dialog';
import { InvalidFormDialogComponent } from '../invalid-form-dialog/invalid-form-dialog.component';
import { ValidMessageformDialogComponent } from '../valid-messageform-dialog/valid-messageform-dialog.component';
import { ShareService } from 'src/app/shared/services/share.service';
import { NotificationServiceService } from '../../services/notification-service.service';
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
    private userService: ShareService,
    private notificationService: NotificationServiceService
  ) {}

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
    /* autocomplete de usuarios */
    this.filteredUsersOptions = this.messageForm.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const username = typeof value === 'string' ? value : value?.username;
        return username ? this._filter(username as string) : this.users.slice();
      })
    );

    this.userService.getAllUsers().subscribe((data) => {
      // console.log('data: ', data);
      this.users = data;

      // console.log('user: ', this.users);
    });
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
    for (let i = 0; i < this.users.length; i++) {
      if (this.messageForm.value.mail_to == this.users[i]) return true;
      else return false;
    }
    return false;
  }

  sendMessage() {
    if (this.messageForm.invalid || this.verifyValidUser() == false) {
      this.messageForm.markAllAsTouched();
      this.dialog.open(InvalidFormDialogComponent);
    } else {
      const message = {
        content: this.messageForm.value.message_text,
        date: new Date(),
        user_from_id: localStorage.getItem('user_id'),
        user_to_id: this.messageForm.value.mail_to.user_id,
        read: 0,
      };
      //---------------------------------------------------
      this.notificationService.addNewMessage(this.message).subscribe((msg) => {
        console.log('Mensaje enviado correctamente'+msg);
      });
      /*      console.log('mensaje: ' + this.messageForm.value.message_text);
       console.log('fecha: ' + new Date());
      console.log('userLogin: ' + localStorage.getItem('user_id'));
     console.log('mail_to: ' + this.messageForm.value.mail_to.user_id); */

      //---------------------------------------------------
      console.log(
        this.messageForm.value.mail_to.user_id,
        ' - ',
        this.messageForm.value.message_text
      );
      this.messageForm.reset();
      this.dialog.open(ValidMessageformDialogComponent);
    }
  }
}
