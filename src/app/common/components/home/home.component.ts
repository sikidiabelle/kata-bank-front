import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { Transaction } from '../../models/transaction.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() idAccount = 1;
  account : Account;
  constructor(private accountService : AccountService) {

  }

  ngOnInit(): void {
    this.accountService.getAccount(this.idAccount).subscribe(data => this.account = data);
  }
}
