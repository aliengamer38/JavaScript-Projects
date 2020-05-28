import React, { Component, Fragment } from "react"
import classes from "./Account.css"
import { connect } from "react-redux"



class Account extends Component {
    componentWillMount() {
        
    }    
    render() {
        let accountInfo = (
            <p>Not Authenticated</p>
        )
        if (this.props.isAuthenticated) {
            accountInfo = (    
                <div className={classes.Account}>
                    <heading>
                        <h1>My App</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, a.</p>
                    </heading>      
                    <main>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae facilis commodi nisi quod consequatur ducimus omnis eius temporibus repellendus architecto ratione eos quas non, nulla recusandae esse magni fugit?
                        </p>
                    </main>                
                </div>
            )
        }
        return (
            <Fragment>
                {accountInfo}
            </Fragment>
            
        );                    
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.login.isLogin
    }
}
export default connect(mapStateToProps, null)(Account);