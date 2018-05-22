import * as React from 'react';
import Input from './Input';
import * as UserConnector from './../Connectors/UserConnector';

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

        this.checkoutLogin = this.checkoutLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public async componentDidMount() {
        try {
            const users = await UserConnector.getAllUsers();
            console.log(users);
            this.setState({
                render: true,
                users
            });
        } catch (err) {
            console.log(err);
        }
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const loginData = {
            email: form.get('email'),
            password: form.get('password')
        };
        console.log('mati');
        this.checkoutLogin(loginData);
    }

    public checkoutLogin(data: any) {
        console.log(data);
    }

    public render() {
        return (
            <div className="registrationForm">
                <form onSubmit={this.handleSubmit}>
                    <Input label="Email" type="email" id="email" name="email" placeholder="Wpisz email" />
                    <Input label="Hasło" type="password" id="password" name="password" placeholder="Wpisz hasło" />
                    <button type="submit" className="btn btn-primary acceptFormButton">
                        Zaloguj
                    </button>
                </form>
            </div>
        );
    }
}
