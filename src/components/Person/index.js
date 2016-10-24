import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <span>
        Name: {this.props.name},
        Nickname: {this.props.nickname}
      </span>
    )
  }
}

export default Person
