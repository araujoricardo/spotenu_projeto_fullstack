import React from "react";
import { connect } from "react-redux"
import Login from "../Login";
import SignUp from "../SignUp";
import {HomeWrapper} from "./style";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentPage: "signup"
        };
    };

    renderPage = () =>{
        switch(this.state.currentPage){
            case "home":{
                return;
            };
            case "login":{
                return <Login/>
            };
            case "signup":{
                return <SignUp/>
            };
            default:{
                return;
            };
        };
    };


    render(){
        return(
            <HomeWrapper>
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    {this.renderPage()}
                </div>
            </HomeWrapper>
        );
    };

};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(null, mapDispatchToProps) (Home);