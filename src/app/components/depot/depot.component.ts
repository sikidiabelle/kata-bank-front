import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/common/models/transaction.model';
import { AccountService } from 'src/app/common/services/account.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  type : number;
  transaction = new Transaction();
  transactionForm = new FormGroup({});

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      montant : new FormControl('' , Validators.required),
      type : new FormControl('', Validators.required)
    });
  }

  add(): void{
    console.log(this.transactionForm.value);
    //console.log([disabled]="!transactionForm.valid");
    this.transaction.date = new Date();
    this.transaction.montant = this.transactionForm.get('montant').value * this.transactionForm.get('type').value;
    this.accountService.addTransaction(1, this.transaction).subscribe(data=>data);
  }

}
