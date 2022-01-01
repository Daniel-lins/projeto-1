import './styles.css'
import { Component } from "react";

export class Buttton extends Component {
    render () {
        const { text, onClick, disabled } = this.props;
       return (

            <button
            disabled={disabled}
            className='button'
             onClick={onClick}>
            load more posts
            </button> 
       ); 
    }
}