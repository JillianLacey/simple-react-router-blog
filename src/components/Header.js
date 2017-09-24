import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// const styles = {
//     navStyle: { top: 0, display: "flex", width: "100%", justifyContent: "space-around", paddingTop: 20, marginBottom: 50 },
//     listStyle: {},
//     linkStyle: {
//         textDecoration: "none",
//         border: "2px solid pink",
//         color: "green",
//         fontWeight: "bold",
//         padding: 5,
//     },
//     activeStyle: {
//         backgroundColor: "magenta",
//         color: "white"
//     }
// }
// <nav style={styles.navStyle} >
//     <NavLink exact to="/" style={styles.linkStyle} activeStyle={styles.activeStyle}>Home</NavLink>
//     <NavLink to="/createpost" style={styles.linkStyle} activeStyle={styles.activeStyle}>Create Post</NavLink>

// </nav>

export default class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/createpost" >Create Post</NavLink>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <div className="header-bg">
                                    <h1>Taking the Long Way</h1>
                                    <span className="subheading">A Collection of Travel Stories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
