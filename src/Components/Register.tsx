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

    public render() {
        return (
            <div className="registrationForm">
                <form>
                    <Input label="Login" type="email" id="email" name="email" placeholder="Wpisz email" />
                    <Input label="Imię" type="name" id="name" name="name" placeholder="Wpisz imię" />
                    <Input label="Nazwisko" type="surname" id="surname" name="surname" placeholder="Wpisz nazwisko" />
                    <Input label="Hasło" type="password" id="password" name="password" placeholder="Wpisz hasło" />
                    <Input label="Potwierdź hasło" type="password" id="password" name="password" placeholder="Powtórz hasło" />
                </form>
                <div className="registrationButton">
                    <button type="submit" className="btn btn-primary acceptFormButton">
                        Zarejestruj
                    </button>
                </div>
            </div>
        );
    }
}
