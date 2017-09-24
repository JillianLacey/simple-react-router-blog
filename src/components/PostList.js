import React, { Component } from 'react';
// import ShowPost from './ShowPost';
import { Link } from 'react-router-dom';


export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    };
    // let songs = this.state.vehicles;

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
            // console.log("state", this.state.songs);
        })
    }




    render() {
        let posts = this.state.posts.map((post, index) => {
            // let postList;

            return (
                <div className="post-preview" key={index}>
                    <h2 class="post-title"><Link to={'/posts/' + post._id}>{post.blogTitle}</Link> </h2>
                    <p class="post-subtitle">{post.blogEntry}</p>
                    <p class="post-meta">Posted by {post.authorName}</p>
                    <hr />
                </div>



            )
        })



        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}