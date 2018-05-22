import * as React from 'react';
import Input from './Input';
// import * as DebtConnector from './../Connectors/DebtConnector';

export namespace Types {
    export type RegisterProps = {
        //
    };
    export type RegisterState = {
        render: boolean;
    };
}

export default class Register extends React.Component<Types.RegisterProps, Types.RegisterState> {
    constructor(props: Types.RegisterProps) {
        super(props);
        this.state = {
            render: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // public async componentDidMount() {
    //     try {
    //         const Register = await DebtConnector.getAllRegister();
    //         console.log(Register);
    //         this.setState({
    //             render: true,
    //             Register
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // tslint:disable-next-line:member-ordering

    public handleSubmit(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const loginData = {
            email: form.get('email'),
            name: form.get('name'),
            surname: form.get('surname'),
            password: form.get('password'),
            passwordConfirmation: form.get('passwordConfirmation')
        };
        console.log(loginData);
    }

    public render() {
        return (
            <div className="registrationForm">
                <form onSubmit={this.handleSubmit}>
                    <Input label="Login" type="email" id="email" name="email" placeholder="Wpisz email" />
                    <Input label="Imię" type="name" id="name" name="name" placeholder="Wpisz imię" />
                    <Input label="Nazwisko" type="surname" id="surname" name="surname" placeholder="Wpisz nazwisko" />
                    <Input label="Hasło" type="password" id="password" name="password" placeholder="Wpisz hasło" />
                    <Input label="Potwierdź hasło" type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="Powtórz hasło" />
                    <button type="submit" className="btn btn-primary acceptFormButton">
                        Zarejestruj
                    </button>
                </form>
            </div>
        );
    }
}
