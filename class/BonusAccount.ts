import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  deposit = (value: number): void => {
    const newBalance = (value + 10) + this.getBalance()
    this.setBalance(newBalance)
    console.log(`Você depositou ${this.currency(value)}. Seu novo saldo com bônus é ${this.currency(newBalance)}`);
  }

}
