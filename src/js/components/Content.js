import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Paper from "./Content/Paper"

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {name: "Than"};
    }
    render(){
        var title = "Hi RO"
        setTimeout(() => {
            this.setState({name: "Bob"})},
            3000)

        var list = [
            <Footer/>,
            <Footer/>,
            <Footer/>
        ]
        return(
            <div>
                <Footer/>
                <h3>This is the teminal to teminator</h3>
                <Paper/>
                {list}
                <Header title = {title}/>
                {this.state.name}
            </div>
        );
    }
}