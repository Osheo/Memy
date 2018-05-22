import * as React from 'react';
import Input from './Input';

export namespace Types {
    export type MemsAdditionProps = {
        //
    };
    export type MemsAdditionState = {
        //
    };
}

export default class MemsAddition extends React.Component<Types.MemsAdditionProps, Types.MemsAdditionState> {
    constructor(props: Types.MemsAdditionProps) {
        super(props);
        this.state = {
            //
        };
    }

    public render() {
        return (
            <div className="card text-center mems-addition-container">
                <div className="card-header">Dodaj mema</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Wybierz zdjęcie</label>
                            <div id="file-input">
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <hr />
                            <Input label="Podaj tytuł" placeholder="Tytuł" />
                            <Input label="Podaj tagi" placeholder="Tag" />
                        </div>
                    </form>
                </div>
                {/* <div className="card-footer text-muted">2 days ago</div> */}
            </div>
        );
    }
}
