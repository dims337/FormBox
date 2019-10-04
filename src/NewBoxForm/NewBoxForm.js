import React,{Component} from "react";
import Box from '../Box/Box'
import '../NewBoxForm/FormStyle.css'


class NewBoxForm extends Component{

    state={color:'', height:'', width:''}

handleChange = (evt)=>{
    this.setState({ [evt.target.name]: evt.target.value });
}

handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addBoxes(this.state)
    this.setState({color:'', height:'', width:''})
    
}


    render(){
        return(
            <div className="form">
                 <form onSubmit={this.handleSubmit}>
                     <div>
                        <label htmlFor="color">Color:</label>
                        <input id='color'
                             name='color'
                             value={this.state.color}
                             onChange={this.handleChange}/>
                     </div>
                    
                    <div>
                        <label htmlFor="height">Height:</label>
                        <input 
                            id='height'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="width">Width:</label>
                        <input 
                            id='width'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}/>
                    </div>
                    
                    
                    <button>Submit!</button>
                 </form>
            </div>
           

            
        )
    }
}

export default NewBoxForm