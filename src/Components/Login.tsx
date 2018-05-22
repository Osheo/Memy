import * as React from 'react';
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

    public render() {
        return (
            // <div className="container">
            //     <div className="login-form">
            //         <div className="form-group mx-sm-3 mb-2">
            //             <label>Email address</label>
            //             <input type="email" className="form-control" placeholder="Enter email" />
            //         </div>
            //     </div>
            // </div>
            <h1> 332</h1>
        );
        // {/* // <div className="table-responsive">
        // //     <h3 className="text-center py-3">Użytkownicy systemu</h3>
        // //     <table className="table table-striped table-user">
        // //         <thead>
        // //             <tr>
        // //                 <th>id</th>
        // //                 <th>Imię</th>
        // //                 <th>Nazwisko</th>
        // //                 <th>Email</th>
        // //                 <th>Rola</th>
        // //                 <th>Hasło</th>
        // //                 <th>Zmień hasło</th>
        // //             </tr>
        // //         </thead>
        // //         <tbody>
        // //             {this.state.users && */}
        // {/* //                 this.state.users.map((user: any, idx: number) => { */}
        // {/* //                     return (
        // //                         <tr key={idx}>
        // //                             <td>{idx}</td>
        // //                             <td> {user.firstName}</td>
        // //                             <td>{user.lastName}</td>
        // //                             <td>{user.email}</td>
        // //                             <td>{user.roleName}</td>
        // //                             <td>{user.password}</td>
        // //                             <td>
        // //                                 <button
        // //                                     onClick={() => {
        // //                                         this.changeUserData(idx);
        // //                                     }}
        // //                                 >
        // //                                     Change
        // //                                 </button>
        // //                             </td>
        // //                         </tr>
        // //                     );
        // //                 })}
        // //         </tbody>
        // //     </table>
        // // </div> */}

        // <h1 className="mati">HELLO WORLD MATI !</h1>
        // );
    }
}
