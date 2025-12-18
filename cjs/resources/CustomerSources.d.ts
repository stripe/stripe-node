import { Account } from './Accounts.js';
import { BankAccount, DeletedBankAccount } from './BankAccounts.js';
import { Card, DeletedCard } from './Cards.js';
import { Source } from './Sources.js';
export type CustomerSource = Account | BankAccount | Card | Source;
export type DeletedCustomerSource = DeletedBankAccount | DeletedCard;
