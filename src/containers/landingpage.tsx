import * as React from "react";
import { connect } from "react-redux";

import actions from "../store/actions";

import DashboardComponent from "../components/landingpage";
import BreedeGenerator from "../components/breedGenerator";

class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      breedData: [],
      modalOpen: false,
    };
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.dashboardData !== this.props.dashboardData) {
      if (Object.keys(this.props.dashboardData).length) {
        let formatData = [];
        formatData = Object.entries(this.props.dashboardData).map(
          ([name, obj], index) => ({ id: index, breed: name, subBreed: obj })
        );
        this.setState({
          breedData: formatData,
        });
      }
    }
  }
  componentDidMount() {
    this.props.fetchDashboardResponse();
  }
  handleClickOpen = (x: any) => {
    this.props.fetchBreedImages(x.breed);
    this.setState({
      modalOpen: true,
    });
  };
  handleClose = () => {
    this.setState({
      modalOpen: false,
    });
  };
  render() {
    return (
      <>
        <DashboardComponent
          breedData={this.state.breedData}
          isLoading={this.props.isLoading}
          handleClickOpen={this.handleClickOpen}
          handleChange={this.props.handleChange}
          subBreedList={this.props.subBreedList}
          fetchSubBreed={this.props.fetchSubBreed}
        />
        <BreedeGenerator
          open={this.state.modalOpen}
          onClose={this.handleClose}
          breedImages={this.props.breedImages}
          isLoading={this.props.modalLoading}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  dashboardData: state.dashboardResponse.dashboardData,
  isLoading: state.dashboardResponse.isLoading,
  modalLoading: state.dashboardResponse.modalLoading,
  breedImages: state.dashboardResponse.breedImages,
  subBreedList: state.dashboardResponse.subBreedList,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchDashboardResponse: () => dispatch(actions.fetchDashboardResponse()),
  fetchBreedImages: (req: any) => dispatch(actions.fetchBreedImages(req)),
  fetchSubBreed: (req: any) => dispatch(actions.fetchSubBreed(req)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
