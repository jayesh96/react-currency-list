import React,{Component} from 'react';
import NavbarLayout from '../components/navbar';
import CardLayout from '../components/card';
import {Col,Button} from 'react-materialize'
import {connect} from 'react-redux';
import {addDataById} from '../actions/index';
import { ApolloProvider } from 'react-apollo';
import client from '../config'
import gql from 'graphql-tag';

class RenderTweets extends Component{
    constructor(){
        super();
        this.state = {
            items: [''],
        }
    }
    search(){
        client
        .query({
            query: gql`
                {
                rates(currency: "USD") {
                currency
                }
                }
              `
  })
  .then(data => this.props.addDataById(data.data.rates));

}
        
    render(){
        console.log('State',this.props.addData)
        return(
            <div>
            <ApolloProvider client={client}>
            <NavbarLayout/>
            
            <Col s={4}>
            {
                this.props.addData.map((data,index) =>{
                    return(
                        <CardLayout  key={index} list={data.currency}/>
                    )
                })
            }
            <CardLayout />
            </Col>
            <Button onClick ={() => this.search()}>Submit</Button>
            </ApolloProvider>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,{addDataById})(RenderTweets);
