import * as React from 'react';
// import * as FirebaseConnector from './../../Connectors/DBConnector';
import { Link } from 'react-router-dom';

export namespace Types {
    export type HeaderProps = {
       
    };
    export type HeaderState = {
        //
    };
}

export default class Header extends React.Component<Types.HeaderProps, Types.HeaderState> {
    constructor(props: Types.HeaderProps) {
        super(props);
        this.state = {
            //
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/login`}>
                                Lista użytkowników
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/register`}>
                                Lista długów
                            </Link>
                        </li>
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
                    </ul>
                </div>
            </nav>
        );
    }
}
