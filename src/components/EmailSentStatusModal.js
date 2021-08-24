import React from  'react'

class EmailSentStatusModal extends React.Component {
    constructor(props) {
        super(props);
        
        const getAlertStyles = (success) => {
            console.log(success)
            return !success ? 
            (
                {
                    color: '#721c24',
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    position: 'relative',
                    padding: '.75rem 1.25rem',
                    marginBottom: '1rem',
                    border: '1px solid transparent',
                    borderRadius: '.25rem',
                }
            )
            :
            (
                {
                    color: '#155724',
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    position: 'relative',
                    padding: '.75rem 1.25rem',
                    marginBottom: '1rem',
                    border: '1px solid transparent',
                    borderRadius: '.25rem',
                }
            )
        }

        var success = this.props.success;
        var message = "Error, there was a problem sending the message";

        if(this.props.message){
            message = this.props.message;
        }

        this.state = {
            wasEmailDeliverySuccessful : success,
            message : message,
            styles : getAlertStyles(success),
            class : "lead"
        }
    }

    handleClose = () => this.setState({modal:false});

    render(){
        return (
            <div className="button">
                <div className="button">
                    <div style={this.state.styles} className={this.state.class} >{this.state.message}</div>
                </div>
            </div>
        )
    }
}


export default EmailSentStatusModal;