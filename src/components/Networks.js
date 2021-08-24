import React from 'react';

class Networks extends React.Component {
    render(){
        var networks = []
        if(this.props.data && this.props.data.length > 0){
           this.props.data.forEach(network => {
              networks.push(
                 <li key={network.name+"header"+networks.length}><a href={network.url}><i className={network.className}></i></a></li>,
              );
           });
        }

        return(
            <ul className="social-links">
                {networks}
            </ul>
        );
    }
}

export default Networks;