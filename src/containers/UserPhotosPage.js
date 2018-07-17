import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// redux actions
import {
  fetchUserPhotos,
  clearUserData,
} from './../redux/actions/userPageActions';

// selectors
import { dataSelector, pageNumberSelector } from '../selectors/selectors';

// components
import InfiniteScroll from '../components/infiniteScroll/InfiniteScroll';
import { PageWrapper } from '../components/pageLayout/index';

class UserPhotoPage extends Component {
  componentWillUnmount() {
    this.props.clearUserData();
  }

  loadNextPage = () =>
    this.props.fetchUserPhotos(
      this.props.match.params.userId,
      this.props.pageNumber,
    );

  render() {
    return (
      <PageWrapper>
        <h1>User photos</h1>
        <Link to="/">Go to dogs</Link>
        <InfiniteScroll
          list={this.props.photos}
          loadNextPage={this.loadNextPage}
          hasNextPage
          fetchError={this.props.error}
        />
      </PageWrapper>
    );
  }
}

UserPhotoPage.propTypes = {
  fetchUserPhotos: PropTypes.func.isRequired,
  clearUserData: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

// connect with state, by using selectors
const mapStateToProps = state => ({
  photos: dataSelector(state.userData.photos),
  pageNumber: pageNumberSelector(state.userData.pageNumber),
  error: state.userData.error,
});

// connect with actions
const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: (userId, pageNumber) =>
    dispatch(fetchUserPhotos(userId, pageNumber)),
  clearUserData: () => dispatch(clearUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotoPage);
