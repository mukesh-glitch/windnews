import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {


    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loding: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} - WindNews `
    }
    async updateNews() {
        this.props.changeProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=086e17ff9bb04da686d1b039ab1b372e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true })
        let data = await fetch(url)
        this.props.changeProgress(40);
        let jsonData = await data.json();
        this.setState({ articles: jsonData.articles, totalResults: jsonData.totalResults, loding: false })
        this.props.changeProgress(100);



    }

    async componentDidMount() {

        this.updateNews();
        console.log("componeentdidmout")

    }


    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.updateNews();
    // }
    // handlePrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.updateNews();

    // }


    fetchMoreData = async () => {
        // this.state.page = this.state.page + 1;
        this.setState({ page: ++this.state.page })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=086e17ff9bb04da686d1b039ab1b372e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let jsonData = await data.json();
        this.setState({ articles: this.state.articles.concat(jsonData.articles) })
    };


    render() {
        return (

            <div className='container my-3 pd-3' >
                <h1 className='text-center ' style={{ marginTop: "2em" }}>WindNews - Top {(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}  Headlines</h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length === this.state.totalResults ? false : true}
                    loader={<Spinner />}
                    endMessage={<p>thnak you</p>}

                >
                    <div className="row">
                        {(this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                                    date={element.publishedAt} />

                            </div>

                        }))}

                    </div>

                    {/* <button type="button" onClick={this.handlePrevClick} className="btn btn-dark">prev</button>
                <button type="button" onClick={this.handleNextClick} className="btn btn-dark">next</button> */}
                </InfiniteScroll>
            </div>
        )
    }
}

export default News