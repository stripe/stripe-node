import { BankAccount, DeletedBankAccount } from './BankAccounts.js';
import { Card, DeletedCard } from './Cards.js';
export type ExternalAccount = BankAccount | Card;
export type DeletedExternalAccount = DeletedBankAccount | DeletedCard;
