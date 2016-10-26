import React from 'react'

class Person extends React.Component {
  render() {
    // this.props.name = 'Mahatthana'
    // this.props.nickname = 'Kelvin'
    return (
      <span>
        Name: {this.props.name},
        Nickname: {this.props.nickname}
      </span>
    )
  }
}

export default Person
