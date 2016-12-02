import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrendingVideos } from '../actions/index';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTrendingVideos();
  }

  render() {
    return (
      <div>
      <SearchBar/>
      <div className="col-sm-10 col-sm-offset-1">
        <VideoList />
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchTrendingVideos: fetchTrendingVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);
