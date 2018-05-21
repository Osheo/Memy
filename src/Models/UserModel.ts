export namespace Enums {
    export enum RoleName {
        debtor = 'debtor',
        founder = 'founder'
    }
}

export namespace Types {
    export type UserDto<T> = Array<T>;
}

export namespace Models {
    export class User {
        public email: string;
        public firstName: string;
        public id: number;
        public lastName: string;
    }
    export class UserSystem extends User {
        public roleName: string;
        public password: string;
    }
}
