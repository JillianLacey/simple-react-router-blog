import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                blogTitle: ""
            }
        }
    };

    componentWillMount() {
        const { id } = this.props.match.params;
        const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

        fetch(URL).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ post: data });

        })
    }

    render() {


        return (

            <div className="container">
                <div className="col-lg-5  mx-auto">
                    <div className="col-lg-8 ">
                        <h2 class="post-title">{this.state.post.blogTitle}</h2>
                        <p class="post-subtitle">{this.state.post.blogEntry}</p>
                        <p class="post-meta">Posted by {this.state.post.authorName}</p>
                        <p><NavLink exact to="/">Back</NavLink></p>
                    </div>
                </div>
            </div>
        );

    }
}
