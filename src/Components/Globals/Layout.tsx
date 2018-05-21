import * as React from 'react';
// import * as UserConnector from './../../Connectors/UserConnector';
import Header from './Header';
import Footer from './Footer';

export namespace Types {
  export type LayoutProps = {
    //
  };
  export type LayoutState = {
    render: boolean
  };
}

export default class Layout extends React.Component<Types.LayoutProps, Types.LayoutState> {
  constructor(props: Types.LayoutProps) {
    super(props);
    this.state = {
        render: false
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

  render() {
    // if(this.state.render) {
        return (
            <div className="system-wrapper">
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    // } else {
    //     return (
    //         <h1>Ładowanie danych...</h1>
    //     )
    // }
  }
}
