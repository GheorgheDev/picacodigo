import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface OrderList {
  id: number,
  name: string
}

@Component({
  selector: 'app-ordination',
  templateUrl: './ordination.component.html',
  styleUrls: ['./ordination.component.scss']
})
export class OrdinationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  orderForm: FormGroup = this.fb.group({
    orderId: [],
  });

  orders: OrderList[] = [
    {
      id: 40,
      name: 'Valoración'
    },
    {
      id: 41,
      name: 'Menor precio'
    },
    {
      id: 42,
      name: 'Mayor precio'
    }
  ];

  orderCard() {
    let id = this.orderForm.value.orderId;
    this.orderCardElement(id);
  }

  @Output() orderSelectList = new EventEmitter<number>();
  orderCardElement(id: number){
    this.orderSelectList.emit(id);
  }
}