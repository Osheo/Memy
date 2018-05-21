import * as React from 'react';

export namespace Types {
  export type FooterProps = {
    //
  };
  export type FooterState = {
    // 
  };
}

export default class Footer extends React.Component<Types.FooterProps, Types.FooterState> {
  constructor(props: Types.FooterProps) {
    super(props);
    this.state = {
        // 
    };
  }

  render() {
    return (
        <div className="footer">
            <h2>copyright 2018.</h2>
        </div>
    );
  }
}
