import * as React from 'react';
// import * as UserConnector from './../Connectors/UserConnector';


export namespace Types {
    export type LoginProps = {};
    export type LoginState = {
        render: boolean
    };
}

export default class Login extends React.Component<Types.LoginProps, Types.LoginState> {
    constructor(props: Types.LoginProps) {
        super(props);
        this.state = {
            render: false,
        };
    }

    // public async componentDidMount() {
    //     try {
    //         const users = await UserConnector.getAllUsers();
    //         console.log(users)
    //         this.setState({
    //             render: true,
    //             users
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    render() {
        return (
            // <div className="table-responsive">
            //     <h3 className="text-center py-3">Użytkownicy systemu</h3>
            //     <table className="table table-striped table-user">
            //         <thead>
            //             <tr>
            //                 <th>id</th>
            //                 <th>Imię</th>
            //                 <th>Nazwisko</th>
            //                 <th>Email</th>
            //                 <th>Rola</th>
            //                 <th>Hasło</th>
            //                 <th>Zmień hasło</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {this.state.users &&
            //                 this.state.users.map((user: any, idx: number) => {
            //                     return (
            //                         <tr key={idx}>
            //                             <td>{idx}</td>
            //                             <td> {user.firstName}</td>
            //                             <td>{user.lastName}</td>
            //                             <td>{user.email}</td>
            //                             <td>{user.roleName}</td>
            //                             <td>{user.password}</td>
            //                             <td>
            //                                 <button
            //                                     onClick={() => {
            //                                         this.changeUserData(idx);
            //                                     }}
            //                                 >
            //                                     Change
            //                                 </button>
            //                             </td>
            //                         </tr>
            //                     );
            //                 })}
            //         </tbody>
            //     </table>
            // </div>

            <h1>HELLO WORLD MATI !</h1>
        );
    }
}
