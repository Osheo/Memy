import * as React from 'react';

export namespace Types {
    export type HomepageProps = {
        //
    };
    export type HomepageState = {
        //
    };
}

export default class Homepage extends React.Component<Types.HomepageProps, Types.HomepageState> {
    constructor(props: Types.HomepageProps) {
        super(props);
        this.state = {
            //
        };
    }

    public render() {
        return (
            <div className="memContainer">
                <div className="card text-center mems-addition-container">
                    <div className="card-header">Tytuł mema</div>
                    <div> Autor i data dodania </div>
                    <div className="card-body">
                        <div className="memPhotoContainer"> Miejsce na zdjęcie </div>
                        <div> Łapka w górę | Łapka w dół | Skomentuj </div>
                    </div>
                </div>
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
