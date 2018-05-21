// import * as UserModel from './../Models/UserModel';

export namespace Types {
    export type DebtDto<T> = Array<T>;
}

export namespace Models {
    export class Debtor {
        public amount: number;
        public id: number;
        public returned: boolean;
        public user: {
            id: number
        }
    }
    export class Debt {
        public authorId: number;
        public finished: boolean;
        public id: number;
        public listDebtors: Array<Debtor>;
        public name: string;
    }
}
