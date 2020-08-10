import React, { Component } from 'react'
import {Links} from './Data';
import {vriSKills} from './Data';
import {projects} from './Data'

const ProductContent = React.createContext();



class ProductProvider extends Component {

    state ={
        
        
        links: Links,
        don :vriSKills,
        project: projects




    }



    render() {
        return (
            <ProductContent.Provider value ={{

                ...this.state
            }}>

                {this.props.children}
            </ProductContent.Provider>
        )
    }
}

const ProductConsumer = ProductContent.Consumer;

export {ProductProvider, ProductConsumer};



