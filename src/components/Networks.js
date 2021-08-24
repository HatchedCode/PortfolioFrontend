import React from 'react';

class Networks extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            networks : [
                <li key={"linkedin"}><a href={"https://www.linkedin.com"}><i className={"fa fa-linkedin"}></i></a></li>,
                <li key={"github"}><a href={"https://www.github.com"}><i className={"fa fa-github"}></i></a></li>,
            ]
        }
    }

    render(){
        return(
            <ul className="social-links">
                {this.state.networks}
            </ul>
        );
    }
}

export default Networks;