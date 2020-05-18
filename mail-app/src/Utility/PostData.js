import React, { Component, Fragment } from "react"
import axios from "axios"

class PostData extends Component {
    componentWillMount() {
        axios.post("https://burger-app-3fd69.firebaseio.com/users.json", {
            id: 1,
            name: "Pam",
            gender: "female",
            job: "developer",
            description: "We are the children of this world. Nobody can stop us! We will save the world from this tyranny.",
            bio: "The working time machine",
            shouldDisplayBio: true
        }).then(reponse => {
            console.log(reponse.data);
        })
    }
    render() {
        return (
            <div>
                <p>Posting Data...</p>
            </div>                            
        )
    }
}

export default PostData;