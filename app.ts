import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Deyvson', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(2000)
companyAccount.getLoan(1000)
companyAccount.withdraw(1000)
console.log(companyAccount)
const bonusAccount: DioAccount = new BonusAccount(2, 'Deyvson Aguiar', 30)
bonusAccount.deposit(100)
bonusAccount.withdraw(10)
console.log(bonusAccount)