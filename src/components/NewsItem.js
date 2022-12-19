import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, date } = this.props;
        return (

            <div className="card my-3 pd-3" >
                <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "30vh" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">Last updated {new Date(date).toGMTString()}</small></p>

                    <a href={newsUrl} className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem