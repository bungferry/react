import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Hello World from React! 📦 🚀</h1>
        <p>
        <img id="preview" src="placeholder.png"/>
        <img id="twibbon" src="twibbon.png" style="display: none"/>
        </p>
        <p>Pastikan gambar yang di upload memiliki ukuran</p>
        <p><input id="fileInput" type="file" /></p>    
      </main>
    )
  }
}
