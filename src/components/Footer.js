import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/_DJilly" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/jillianpichocki/" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/JillianPichocki" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; Jillian Pichocki 2017</p>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
