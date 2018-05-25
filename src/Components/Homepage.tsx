import * as React from 'react';
// import UserStore from './../Stores/UserStore';
// import { toast } from 'react-toastify';

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
        this.addLike = this.addLike.bind(this);
        this.addDislike = this.addDislike.bind(this);
    }

    public async componentDidMount() {
        const response: any = await localStorage.getItem('memList');
        const dataParsed = JSON.parse(response);
        this.setState({
            memsList: dataParsed
        });
        console.log(this.state.memsList);
    }

    public addLike(id: any) {
        // if (this.state.memsList[id].likes.author.lenght !== undefined) {
        //     for (let i = 0; i < this.state.memsList[id].likes.author.lenght; i++) {
        //         if (this.state.memsList[id].likes.author[i] === UserStore.user.email) {
        //             toast.warn('Już polajkowałeś mema!');
        //         } else {
        //             this.state.memsList[id].likes.author.push(UserStore.user.email);
        //         }
        //     }
        // } else {
        //     this.state.memsList[id].likes.author.push(UserStore.user.email);
        //     console.log('DODANO AUTORA');
        // }

        this.state.memsList[id].likes = {
            count: this.state.memsList[id].likes.count + 1
        };
        this.setState({
            memsList: this.state.memsList
        });

        localStorage.setItem('memList', JSON.stringify(this.state.memsList));
        console.log('dodano like');
    }

    public addDislike(id: any) {
        this.state.memsList[id].dislikes = {
            count: this.state.memsList[id].dislikes.count + 1
        };
        this.setState({
            memsList: this.state.memsList
        });

        localStorage.setItem('memList', JSON.stringify(this.state.memsList));
        console.log('dodano like');
    }

    public render() {
        if (this.state.memsList !== null) {
            return (
                <div className="memContainer">
                    {this.state.memsList.map((mem: any, idx: number) => {
                        return (
                            <div key={idx} className="card text-center mems-addition-container">
                                <div className="card-header">{mem.title}</div>
                                <div className="authorTime">
                                    {mem.author} | {mem.time}
                                </div>
                                <div className="card-body">
                                    <div className="memPhotoContainer"> Miejsce na zdjęcie </div>
                                    Tagi:
                                    {this.state.memsList[idx].tags.map((tag: any, id: number) => {
                                        return <span key={id}> {tag.tag} | </span>;
                                    })}
                                    <div>
                                        <button type="button" onClick={() => this.addLike(idx)} className="btn btn-success">
                                            <i className="fas fa-thumbs-up" /> {mem.likes.count}
                                        </button>

                                        <button type="button" onClick={() => this.addDislike(idx)} className="btn btn-danger space">
                                            <i className="fas fa-thumbs-down" /> {mem.dislikes.count}
                                        </button>

                                        <button type="button" className="btn btn-primary space">
                                            <i className="fas fa-comment-alt" /> Skomentuj
                                        </button>
                                    </div>
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
        } else {
            return <h1> Brak memów do wyświetlenia </h1>;
        }
    }
}
