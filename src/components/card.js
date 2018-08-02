import React,{Component} from 'react';
import {Card} from 'react-materialize'

class CardLayout extends Component{
    render(){
        let {list} = this.props;
        // console.log('list',list)
        return(
            <Card horizontal >
                <p>{list}</p>
            </Card>
        )
    }
}

export default CardLayout;