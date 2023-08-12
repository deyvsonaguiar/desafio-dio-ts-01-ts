export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getStatus(): boolean {
    return this.status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    try {
      if (this.validateStatus()) {
        let newBalance = this.getBalance()
        newBalance = newBalance + value
        this.setBalance(newBalance)
        return console.log(`Voce depositou ${this.currency(value)}. Seu novo saldo é: ${this.currency(newBalance)}`)
      }
    } catch (error) {
      throw new Error('Não foi possível finalizar o depósito!')
    }
  }

  withdraw = (value: number):void => {
    try {
      if (this.validateStatus() && value <= this.getBalance()) {
        let newBalance = this.getBalance()
        newBalance = newBalance - value
        this.setBalance(newBalance)
        console.log(`Você conseguiu sacar ${this.currency(value)}. Seu novo saldo é: ${this.currency(newBalance)}`)
      }
    } catch (error) {
      throw new Error('Não foi possível realizar o saque!')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  currency(value: number): string {
    const newCurrency = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return newCurrency
  }
}
