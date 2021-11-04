// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClick = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }
    })
  }

  handleResClick = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResClick}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger