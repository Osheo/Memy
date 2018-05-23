import * as React from 'react';
import { observer } from 'mobx-react';
import UserStore from './../../Stores/UserStore';
// import * as FirebaseConnector from './../../Connectors/DBConnector';
import { Link } from 'react-router-dom';

export namespace Types {
    export type HeaderProps = {};
    export type HeaderState = {
        loggedUser: any;
    };
}
@observer
export default class Header extends React.Component<Types.HeaderProps, Types.HeaderState> {
    constructor(props: Types.HeaderProps) {
        super(props);
        this.state = {
            loggedUser: ''
        };
    }

    public render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {UserStore.loggedUser ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/memsaddition`}>
                                    Dodaj mema
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    onClick={() => {
                                        UserStore.logout();
                                    }}
                                >
                                    Wyloguj
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/login`}>
                                    Zaloguj
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/register`}>
                                    Zarejestruj
                                </Link>
                            </li>
                        </ul>
                    )}
                    {/* <li className="nav-item">
                            <Link className="nav-link" to={`/memsaddition`}>
                                Dodaj mema
                            </Link>
                        </li>
                        <li>{this.state.loggedUser.email} </li> */}
                    {/* <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={e => {
                                    e.preventDefault();
                                    FirebaseConnector.createDateToDatabase();
                                }}
                            >
                                Wgraj nowe dane
                            </a>
                        </li> */}
                </div>
            </nav>
        );
    }
}
