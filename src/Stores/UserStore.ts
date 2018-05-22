import { observable, action } from 'mobx';
import * as UserConnector from './../Connectors/UserConnector';
import { toast } from 'react-toastify';

class UserStore {
    @observable public loggedUser: boolean = false;
    @observable public usersList: Array<any> = [];
    @observable public user: any = null;
    @observable public render: boolean = false;

    constructor() {
        this.pullAllUsers();
        this.ifLoggedUser();
    }

    public validationLogin(data: any) {
        if (data.email !== '' && data.password !== '') {
            for (var i = 0; i < this.usersList.length; i++) {
                if (this.usersList[i].email === data.email && this.usersList[i].password === data.password) {
                    // console.log('HURA ! ZALOGOWANO!');
                    localStorage.setItem('loggedUserData', JSON.stringify(data));
                    this.loggedUser = true;
                    toast.success('Zalogowano pomyślnie');
                    return;
                }
            }
            toast.error('Błędne dane logowania.');
        } else {
            toast.error('Uzupełnij dane');
        }
    }
    @action
    public logout() {
        localStorage.clear();
        this.loggedUser = false;
        this.user = null;
        toast.success('Wylogowano pomyślnie');
    }

    @action
    public ifLoggedUser() {
        if (localStorage.getItem('loggedUserData') !== null) {
            const data: any = localStorage.getItem('loggedUserData');
            this.user = JSON.parse(data);
            this.loggedUser = true;
            return true;
        } else {
            this.loggedUser = false;
            return false;
        }
    }

    private async pullAllUsers() {
        this.usersList = await UserConnector.getAllUsers();
        this.render = true;
    }
}

export default new UserStore();
