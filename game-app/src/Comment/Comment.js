import React, { Component } from "react"
import AuthContext from "../Utility/auth-context"
import classes from "./Comment.css"

class Comment extends Component {
    static contextType = AuthContext;
    render() {
        return (
            <div className={classes.Comment}>
                <p onClick={e => this.context
                    .submit(e, { post: this.props.post })}>
                    ({this.props.post.id}) {this.props.post.title}                    
                </p>                              
                <button onClick={e =>
                    this.context.delete(e, { post: this.props.post })}>
                    Delete
                </button>
            </div>
        )
    }
}
export default Comment;