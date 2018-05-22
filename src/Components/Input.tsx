import * as React from 'react';

export namespace Types {
    export type InputProps = {
        label?: any;
        type: any;
        id: any;
        name: any;
        placeholder: string;
    };
    export type InputState = {
        //
    };
}

export default class Input extends React.Component<Types.InputProps, Types.InputState> {
    constructor(props: Types.InputProps) {
        super(props);
        this.state = {
            //
        };
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} className="form-control" />
            </div>
        );
    }
}
