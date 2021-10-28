import React from 'react'
import './mobile.css';

export class mobile{
    constructor(name)
    {
        this.name = "samsung";
    }

 
    render()
    {
        return <h1>{this.props.name}</h1>
    }
} 
 
export default mobile;