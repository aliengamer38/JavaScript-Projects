import React, { Component } from "react"
import Comment from "./Comment"
import classes from "./Comments.css"
import axios from "axios"
import AuthContext from "../Utility/auth-context"

class Comments extends Component {    
    goToInput = React.createRef();    
    static contextType = AuthContext;
    render() {          
        return (            
            <div className={classes.Comments}>                
                {this.props.posts.map((p, i) => {
                    return <Comment post={p} key={i}/>
                })}
                <div className={classes.Pagination}>
                    <button onClick={this.props.decPage}
                        disabled={this.props.isDecBtnDisable}>&lt;&lt; Prev</button>
                    <span>-- Page {this.props.pageNumber} --</span>
                    <button onClick={this.props.incPage}
                        disabled={this.props.isIncBtnDisable}>Next &gt;&gt;</button>                    
                </div>
                <div>
                    <button onClick={e => this.props.goToPageNumber(e, {goToInput: this.goToInput.current})}>Go</button> <input ref={this.goToInput} type="text" style={{width: "1.1rem", textAlign: "center"}} maxLength="2"/>
                </div>                                
            </div>
        )
    }
}
export default Comments;