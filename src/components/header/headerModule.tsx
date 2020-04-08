import React, { Component } from "react";

interface IRecipeProps {
  name: string
}

class headerModule extends Component<IRecipeProps> {
  constructor (props: IRecipeProps) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  render () {
    const { name } = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

export default headerModule;