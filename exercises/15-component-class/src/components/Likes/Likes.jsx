import { Component } from "react";

class Likes extends Component {
  state = {
    likes: 0,
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

  like = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  };

  render() {
    /**
     * Make the button functional
     */
    return (
      <div className="mt-4">
        <button className="btn btn-light" onClick={()=>this.like()}>{this.state.likes} Likes</button>
      </div>
    );
  }
}

export default Likes;
