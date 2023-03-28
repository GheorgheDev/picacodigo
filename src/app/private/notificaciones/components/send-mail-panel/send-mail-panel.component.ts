import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Message } from '../../model/message-data';
import {MatDialog} from '@angular/material/dialog';
import { InvalidFormDialogComponent } from '../invalid-form-dialog/invalid-form-dialog.component';
import { ValidMessageformDialogComponent } from '../valid-messageform-dialog/valid-messageform-dialog.component';


@Component({
  selector: 'app-send-mail-panel',
  templateUrl: './send-mail-panel.component.html',
  styleUrls: ['./send-mail-panel.component.scss'],
})
export class SendMailPanelComponent implements OnInit {

  constructor(private _ngZone: NgZone, private _fb: FormBuilder, public dialog: MatDialog) {}

  users: UserData[] = [
    {
      user_id: "1",
      user_username: 'AndreaC',
      name: 'Andrea Cebrian',
      img: 'ruta'
    },
    {
      user_id: "2",
      user_username: 'JuanS',
      name: 'Juan Sevilla',
      img: 'ruta'
    },
    {
      user_id: "3",
      user_username: 'SalvadorS',
      name: 'Salvador Santos',
      img: 'ruta'
    },
    {
      user_id: "4",
      user_username: 'GheorgheB',
      name: 'Gheorghe Bucurici',
      img: 'ruta'
    },
    {
      user_id: "5",
      user_username: 'BarbaraR',
      name: 'Barbara Rodriguez',
      img: 'ruta'
    },
    {
      user_id: "6",
      user_username: 'MichelleM',
      name: 'Michelle Masias',
      img: 'ruta'
    },
    {
      user_id: "6",
      user_username: 'MichelleM',
      name: 'Michelle Masias',
      img: 'ruta'
    },
  ];

  filteredUsersOptions: Observable<UserData[]>;


  messageForm: FormGroup = this._fb.group({
    mail_to: ['', [Validators.required]],
    message_text: ['', [Validators.required]]
  })

  fData: FormData = new FormData();
  message: Message = {} as Message;

  ngOnInit() {

    /* autocomplete de usuarios */
    this.filteredUsersOptions = this.messageForm.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const user_username =
          typeof value === 'string' ? value : value?.user_username;
        return user_username
          ? this._filter(user_username as string)
          : this.users.slice();
      })
    );
  }

  displayFn(userData: UserData): string {
    return userData && userData.user_username ? userData.user_username : '';
  }

  private _filter(user_username: string): UserData[] {
    const filterValue = user_username.toLowerCase();

    return this.users.filter((user) =>
      user.user_username.toLowerCase().includes(filterValue)
    );
  }

  

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

 
  verifyValidUser(){
    for(let i=0; i<this.users.length; i++){
      if(this.messageForm.value.mail_to == this.users[i])
        return true; 
      else
       return false;  
      }
      return false
    }

  sendMessage() {
    
    if (this.messageForm.invalid || this.verifyValidUser() == false) {
      this.messageForm.markAllAsTouched();
      this.dialog.open(InvalidFormDialogComponent);
    } else {
      //console.log(this.messageForm.value.mail_to, ' - ', this.messageForm.value.message_text);
      this.messageForm.reset();
      this.dialog.open(ValidMessageformDialogComponent);
      };

    }



  }
  
  
  

