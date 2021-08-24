import React from 'react';
import Networks from './Networks';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <Networks data={this.props.data}/>
            
                        <ul className="copyright">
                            <li>&copy; Copyright Osman Bakari.</li>
                        </ul>
        
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;