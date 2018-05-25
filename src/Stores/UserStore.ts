import { observable, action } from 'mobx';
// import * as UserConnector from './../Connectors/UserConnector';
import { toast } from 'react-toastify';

class UserStore {
    @observable public loggedUser: boolean = false;
    @observable public usersList: any | null;
    @observable public user: any = null;
    @observable public render: boolean = false;

    constructor() {
        this.getAllUsers();
        this.ifLoggedUser();
    }

    public validationLogin(data: any) {
        if (data.email !== '' && data.password !== '') {
            // console.log(this.usersList[1].email);
            for (var i = 0; i < this.usersList.length; i++) {
                if (this.usersList[i].email === data.email && this.usersList[i].password === data.password) {
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

    public validationRegister(data: any) {
        if (data.email !== '' && data.password !== '' && data.passwordConfirmation !== '' && data.password === data.passwordConfirmation) {
            let userExist: boolean = false;
            for (var i = 0; i < this.usersList.length; i++) {
                if (this.usersList[i].email === data.email) {
                    userExist = true;
                }
            }
            if (userExist) {
                toast.error('Podany użytkownik już istnieje');
                return;
            } else {
                localStorage.setItem('loggedUserData', JSON.stringify(data));
                console.log('zalogowaono usera');
                const usersData: any = localStorage.getItem('userList');
                const parsedData = JSON.parse(usersData);
                parsedData.push(data);
                localStorage.setItem('userList', JSON.stringify(parsedData));
                console.log('dodano do local');
                this.user = data;
                this.loggedUser = true;
                toast.success('Zalogowano pomyślnie');
                return;
            }
        } else {
            toast.error('Popraw dane');
        }
    }

    @action
    public logout() {
        localStorage.removeItem('loggedUserData');
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

    private async getAllUsers() {
        if (localStorage.getItem('userList') === null) {
            const data = [
                {
                    email: 'mati@gmail.pl',
                    password: '1234'
                }
            ];
            localStorage.setItem('userList', JSON.stringify(data));
            this.usersList = data;
            this.render = true;
        } else {
            const data: any = localStorage.getItem('userList');
            this.usersList = JSON.parse(data);
            this.render = true;
        }

        // console.log(this.usersList[0]);
    }
}

export default new UserStore();
