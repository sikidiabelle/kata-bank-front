export class Transaction {
    idTransaction? : number;
    date : Date;
    montant : number;

    constructor(idTransaction : number, date : Date, montant : number){
        this.idTransaction = idTransaction;
        this.date = date;
        this.montant = montant;
    }
}