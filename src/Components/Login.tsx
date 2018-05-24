import * as React from 'react';
import Input from './Input';
// import * as UserConnector from './../Connectors/UserConnector';
import UserStore from './../Stores/UserStore';

export namespace Types {
    export type LoginProps = {
        //
    };
    export type LoginState = {
        render: boolean;
        users: Array<any>;
    };
}

export default class Login extends React.Component<Types.LoginProps, Types.LoginState> {
    constructor(props: Types.LoginProps) {
        super(props);
        this.state = {
            render: false,
            users: []
        };

        // this.validationLogin = this.validationLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public async componentDidMount() {
        // try {
        // const users = await UserConnector.getAllUsers();
        // const data = [
        //     {
        //         email: 'mati@gmail.pl',
        //         password: '1234'
        //     }
        // ];
        // if (localStorage.getItem('userList') !== null) {
        //     localStorage.setItem('userList', JSON.stringify(data));
        // }
        // console.log('mati');
        this.setState({
            render: true
            // users
        });
        // } catch (err) {
        //     console.log(err);
        // }
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const loginData = {
            email: form.get('email'),
            password: form.get('password')
        };

        UserStore.validationLogin(loginData);
    }

    // mati = localStorage.getItem('loggedUserData');
    // mativ2;
    // mativ2 = JSON.parse(mati);

    public render() {
        return (
            <div className="loginContainerForm">
                {/* <div className="row"> */}
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <Input label="Email" type="email" id="email" name="email" placeholder="Wpisz email" />
                    <Input label="Hasło" type="password" id="password" name="password" placeholder="Wpisz hasło" />
                    <button type="submit" className="btn btn-primary acceptFormButton">
                        Zaloguj
                    </button>
                </form>
                {/* </div> */}
            </div>
        );
    }
}
