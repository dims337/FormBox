import React,{Component} from "react";


class Box extends Component{
    render(){
        let style = {
            backgroundColor: this.props.color,
            height: parseInt(this.props.height),
            width:parseInt(this.props.width)
        }
        return(
            <div>
                <div style={style}>

                </div>
                <button onClick={this.props.delete}>X</button>
            </div>
            
        )
    }
}


export default Box;