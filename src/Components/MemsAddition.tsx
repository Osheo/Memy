import * as React from 'react';
import Input from './Input';
import UserStore from './../Stores/UserStore';
// import logo from './Eclipse-1s-100px.svg';

export namespace Types {
    export type MemsAdditionProps = {
        //
    };
    export type MemsAdditionState = {
        image: any;
        tags: Array<any>;
    };
}

export default class MemsAddition extends React.Component<Types.MemsAdditionProps, Types.MemsAdditionState> {
    constructor(props: Types.MemsAdditionProps) {
        super(props);
        this.state = {
            image: null,
            tags: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewTag = this.addNewTag.bind(this);
    }

    public onImageChange(event: any) {
        if (event.target.files && event.target.files[0]) {
            // console.log(event.target.files[0].name);
            // const img = event.target.files[0].name;
            // const img = require('Eclipse-1s-100px.svg');
            this.setState({
                // image: img
            });
        }
    }

    public addNewTag(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const newTag = form.get('tag');
        this.state.tags.push(newTag);
        this.setState({
            tags: this.state.tags
        });
        console.log(this.state.tags);
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const currentTime = new Date().toLocaleDateString();
        const memData = {
            title: form.get('title'),
            author: UserStore.user.email,
            time: currentTime,
            tags: this.state.tags
        };
        if (localStorage.getItem('memList') === null) {
            const memArrayData = [
                {
                    title: memData.title,
                    author: UserStore.user.email,
                    time: currentTime,
                    tags: this.state.tags
                }
            ];
            localStorage.setItem('memList', JSON.stringify(memArrayData));
            console.log(memArrayData);
        } else {
            const memDataList: any = localStorage.getItem('memList');
            const parsed = JSON.parse(memDataList);
            parsed.push(memData);
            localStorage.setItem('memList', JSON.stringify(parsed));
        }
    }

    public render() {
        return (
            <div className="card text-center mems-addition-container">
                <div className="card-header">Dodaj mema</div>
                <div className="card-body">
                    <label>Wybierz zdjęcie</label>
                    <div id="file-input">
                        <input type="file" onChange={this.onImageChange} className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <form onSubmit={this.addNewTag}>
                        <Input label="Podaj tagi" name="tag" placeholder="Tag" />
                        <button className="btn btn-primary">Dodaj tag </button>
                    </form>
                    {this.state.tags !== null ? (
                        <span>
                            {this.state.tags.map((tag: any, idx: number) => {
                                return <span key={idx}> {tag} |</span>;
                            })};{' '}
                        </span>
                    ) : (
                        <div> ela</div>
                    )}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <hr />
                            <Input label="Podaj tytuł" name="title" placeholder="Tytuł" />
                        </div>

                        <hr />
                        <button className="btn btn-primary acceptFormButton">Dodaj mema</button>
                    </form>
                    {/* <img src="http://www.pngmart.com/files/3/Vector-PNG-File.png" height="42" width="42" /> */}
                </div>
            </div>
        );
    }
}
