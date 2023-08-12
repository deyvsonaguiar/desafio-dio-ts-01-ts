import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    let oldBalance = this.getBalance()
    if (this.validateStatus()) {
      const newBalance = oldBalance + value
      this.setBalance(newBalance) 
      console.log(`Voce pegou um empréstimo de ${this.currency(value)}. Seu novo saldo é ${this.currency(newBalance)}`)
    } else {

      throw new Error('Não foi possível finalizar o empréstimo')
    }
  }
}