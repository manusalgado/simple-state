import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    imgURL: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  }
  render() {
    return (
      <React.Fragment>
        {/*<img src={this.state.imgURL} alt="Photo"/>*/}
        <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
        <ul>
          {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    )
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h2>Zero</h2> : count;
  }

  getBadgeClasses(){
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;