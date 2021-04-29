import {Transaction} from '../models/transaction.model';

export class Account {  
    idAccount? : number;  
    balance : number;
    listTransactions : Transaction[];

    constructor(idAccount : number, balance : number, listTransactions : Transaction[]){
        this.idAccount = idAccount;
        this.balance = balance;
        this.listTransactions = listTransactions;
    }

}