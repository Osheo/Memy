import * as React from 'react';
import Input from './Input';
import { toast } from 'react-toastify';
import UserStore from './../Stores/UserStore';
// import logo from './Eclipse-1s-100px.svg';

export namespace Types {
    export type MemsAdditionProps = {
        //
    };
    export type MemsAdditionState = {
        image: any;
    };
}

export default class MemsAddition extends React.Component<Types.MemsAdditionProps, Types.MemsAdditionState> {
    constructor(props: Types.MemsAdditionProps) {
        super(props);
        this.state = {
            image: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    public handleSubmit(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const currentTime = new Date().toLocaleDateString();
        const memData = {
            title: form.get('title'),
            author: UserStore.user.email,
            time: currentTime,
            likes: {
                count: 0,
                author: []
            },
            tags: [
                {
                    tag: form.get('tag')
                },
                {
                    tag: form.get('tag1')
                },
                {
                    tag: form.get('tag2')
                }
            ]
        };
        if (localStorage.getItem('memList') === null) {
            const memArrayData = [
                {
                    title: memData.title,
                    author: UserStore.user.email,
                    time: currentTime,
                    likes: {
                        count: 0,
                        author: []
                    },
                    tags: memData.tags
                }
            ];
            localStorage.setItem('memList', JSON.stringify(memArrayData));
            console.log(memArrayData);
        } else {
            const memDataList: any = localStorage.getItem('memList');
            const parsed = JSON.parse(memDataList);
            parsed.push(memData);
            localStorage.setItem('memList', JSON.stringify(parsed));
            toast.success('Dodano mema');
        }
    }

    public render() {
        return (
            <div className="card text-center mems-addition-container">
                <div className="card-header">Dodaj mema</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Wybierz zdjęcie</label>
                            <div id="file-input">
                                <input type="file" onChange={this.onImageChange} className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <hr />
                            <Input label="Podaj tytuł" name="title" placeholder="Tytuł" />
                            <Input label="Podaj tagi" name="tag" placeholder="Tag" />
                            <Input name="tag1" placeholder="Tag" />
                            <Input name="tag2" placeholder="Tag" />
                        </div>
                        <button className="btn btn-primary acceptFormButton">Dodaj mema</button>
                    </form>
                    {/* <img src="http://www.pngmart.com/files/3/Vector-PNG-File.png" height="42" width="42" /> */}
                </div>
                {/* <div className="card-footer text-muted">2 days ago</div> */}
            </div>
        );
    }
}
