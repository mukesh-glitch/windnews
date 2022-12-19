import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem'
export default class extends Component {

  state = ({
    progress: 0
  })

  changeProgress = (progress) => {
    this.setState({
      progress: progress
    })
    console.log('changed')
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News changeProgress={this.changeProgress} key="general" pageSize={9} category="general" />}></Route>
            <Route exact path="/business" element={<News changeProgress={this.changeProgress} key='business' pageSize={9} category="business" />} />
            <Route exact path="/entertainment" element={<News changeProgress={this.changeProgress} key="entertainment" pageSize={9} category="entertainment" />} />
            {/* <Route exact path="/general" element={<News changeProgress={ this.changeProgress} key="general" pageSize={9} category=" general" />} /> */}
            <Route exact path="/health" element={<News changeProgress={this.changeProgress} key="health" pageSize={9} category="health" />} />
            <Route exact path="/science" element={<News changeProgress={this.changeProgress} key="science" pageSize={9} category="science" />} />
            <Route exact path="/sports" element={<News changeProgress={this.changeProgress} key="sports" pageSize={9} category="sports" />} />
            <Route exact path="/technology" element={<News changeProgress={this.changeProgress} pageSize={9} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
