import React, { Component } from 'react';
import VideoListItem from '../components/video-list-item';
import { connect } from 'react-redux';

class VideoList extends Component {

  // const videoList = this.props.videos.map((video) => {
  //   return (
  //     <VideoListItem
  //       key={video.etag}
  //       video={video}/>
  //   );
  // });

  renderVideoList(video) {
    return (
        <VideoListItem
          key={video.etag}
          video={video}/>
      );
  }

  render() {
    if(!this.props.videos) {
      return <div>Loading</div>;
    } else {
      return (

      <ul className="list-group">
      {this.props.videos.map(this.renderVideoList)}
      </ul>
    );
    }

  }
}

function mapStateToProps({videos: videos}) {
  return {
    videos: videos
  };
}

export default connect(mapStateToProps)(VideoList);
