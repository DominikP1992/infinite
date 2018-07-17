import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// redux actions
import { fetchDogs } from './../redux/actions/dogPageActions';

// selectors
import { dataSelector, pageNumberSelector } from '../selectors/selectors';

// components
import InfiniteScroll from '../components/infiniteScroll/InfiniteScroll';
import { PageWrapper } from '../components/pageLayout/index';

class DogsPage extends Component {
  loadNextPage = () => this.props.fetchDogs(this.props.pageNumber);

  render() {
    return (
      <PageWrapper>
        <h1>DOG SCROLL</h1>
        <InfiniteScroll
          list={this.props.photos}
          loadNextPage={this.loadNextPage}
          hasNextPage
          fetchError={this.props.error}
          showLink
        />
      </PageWrapper>
    );
  }
}

DogsPage.propTypes = {
  fetchDogs: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

// connect with state, by using selectors
const mapStateToProps = state => ({
  photos: dataSelector(state.dogsData.photos),
  pageNumber: pageNumberSelector(state.dogsData.pageNumber),
  error: state.dogsData.error,
});

// connect with actions
const mapDispatchToProps = dispatch => ({
  fetchDogs: pageNumber => dispatch(fetchDogs(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);
