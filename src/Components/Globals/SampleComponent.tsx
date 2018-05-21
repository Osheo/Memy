import * as React from 'react';

export namespace Types {
  export type SampleProps = {
    //
  };
  export type SampleState = {
    // 
  };
}

export default class Sample extends React.Component<Types.SampleProps, Types.SampleState> {
  constructor(props: Types.SampleProps) {
    super(props);
    this.state = {
        // 
    };
  }

  render() {
    return (
      <h2>Sample component</h2>
    );
  }
}
