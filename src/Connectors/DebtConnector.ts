import * as firebase from './../database/firebase';
import * as DebtModel from './../Models/DebtModel';

export function getAllDebts(): Promise<Array<DebtModel.Models.Debt>> {
  return firebase.getHTTP(`/debts`, null);
}
