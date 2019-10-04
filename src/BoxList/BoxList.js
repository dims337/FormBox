import React, {Component} from 'react';
import NewBoxForm from '../NewBoxForm/NewBoxForm'
import Box from '../Box/Box'
import uuid from 'uuid/v4'





class BoxList extends Component{
    state = {
        items:[]
    }



    addBox=(item)=>{
        this.setState(st=>({
            items:[...st.items, item]
        }))
    }

    handleDelete = (id)=>{
        this.setState({
            items: this.state.items.filter(item=> item.id !== id)
        })
    }

    renderBoxes=()=>{
        return (
            this.state.items.map(item=>(
                <Box 
            key={item.id}    
            id={item.id}    
            color={item.color}
            height={item.height}
            width={item.width}
            delete={()=>this.handleDelete(item.id)}/>
            
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