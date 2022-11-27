import React from "react";

const withSelectComponent = (WrappedComponent: any) => {
  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        selectedItem: null,
      };
    }

    handleChange = (e: any, key: any) => {
      this.setState({
        selectedItem: e.target,
      });
    };
    render() {
      return (
        <WrappedComponent
          selectedItem={this.state.selectedItem}
          handleChange={this.handleChange}
          {...this.props}
        />
      );
    }
  };
};

export default withSelectComponent;
