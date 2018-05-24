import * as React from 'react';

export namespace Types {
    export type HomepageProps = {
        //
    };
    export type HomepageState = {
        memsList: Array<any>;
    };
}

export default class Homepage extends React.Component<Types.HomepageProps, Types.HomepageState> {
    constructor(props: Types.HomepageProps) {
        super(props);
        this.state = {
            memsList: []
        };
    }

    public async componentDidMount() {
        const response: any = await localStorage.getItem('memList');
        const dataParsed = JSON.parse(response);
        this.setState({
            memsList: dataParsed
        });
        console.log(this.state.memsList);
    }

    public render() {
        return (
            <div className="memContainer">
                {this.state.memsList.map((mem: any, idx: number) => {
                    return (
                        <div key={idx} className="card text-center mems-addition-container">
                            <div className="card-header">{mem.title}</div>
                            <div> Autor i data dodania </div>
                            <div className="card-body">
                                <div className="memPhotoContainer"> Miejsce na zdjęcie </div>
                                Tagi:
                                {this.state.memsList[idx].tags.map((tag: any, id: number) => {
                                    return <p key={id}>{tag.tag}</p>;
                                })}
                                <div> Łapka w górę | Łapka w dół | Skomentuj </div>
                            </div>
                        </div>
                    );
                })}
                <nav aria-label="Page navigation example" className="memPagination">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Poprzednia
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Następna
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
