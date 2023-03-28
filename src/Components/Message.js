import { Component } from "react";
{/*class Components */}
class Message  extends Component{
    render(){
        return <h1>Message : {this.props.MsgContent}</h1>
    }
}
export default Message;