import React, {Component} from 'react';
import NewBoxForm from '../NewBoxForm/NewBoxForm'
import Box from '../Box/Box'





class BoxList extends Component{
    state = {
        items:[{color:'', height:'', width:''}]
    }



    addBox=(item)=>{
        this.setState(st=>({
            items:[...st.items, item]
        }))
    }

    renderBoxes=()=>{
        return (
            this.state.items.map(item=>(
                <Box 
            color={item.color}
            height={item.height}
            width={item.width}/>
            ))
        )
    }
    render(){
       
        return(
            <div>
                <NewBoxForm addBoxes={this.addBox}/>
                {this.renderBoxes()}
            </div>
            
        )
    }
}

export default BoxList;