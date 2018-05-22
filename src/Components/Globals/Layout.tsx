import * as React from 'react';
import UserStore from './../../Stores/UserStore';
import { observer } from 'mobx-react';
import { ToastContainer } from 'react-toastify';
// import * as UserConnector from './../../Connectors/UserConnector';
import Header from './Header';
import Login from './../Login';
// import Footer from './Footer';

export namespace Types {
    export type LayoutProps = {
        //
    };
    export type LayoutState = {
        // render: boolean;
    };
}
@observer
export default class Layout extends React.Component<Types.LayoutProps, Types.LayoutState> {
    constructor(props: Types.LayoutProps) {
        super(props);
        this.state = {
            // render: false
        };
    }

    //   public async componentDidMount() {
    //     try {
    //         const currentUser = await UserConnector.getUserById(0);
    //         this.setState({
    //             render: true,
    //             currentUser
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    public render() {
        if (UserStore.render) {
            return (
                <div className="system-wrapper">
                    <ToastContainer autoClose={5000} />
                    <Header />
                    <div className="container">{UserStore.loggedUser ? this.props.children : <Login />}</div>
                    {/* <Footer /> */}
                </div>
            );
        } else {
            return <h1>Ładowanie danych...</h1>;
        }
    }
}
