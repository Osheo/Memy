import * as React from 'react';
// import * as DebtConnector from './../Connectors/DebtConnector';

export namespace Types {
    export type RegisterProps = {
        //
    };
    export type RegisterState = {
        render: boolean
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
    render() {
        return (
            <h1> Register </h1>
        );
    }
}
