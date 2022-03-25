import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <img alt='#' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bill_Gates_June_2015.png/640px-Bill_Gates_June_2015.png' width="200px"></img>
        <div style={{"fontSize":"40px"}}>Bill Gates</div>
      </div>
    )
  }
}
