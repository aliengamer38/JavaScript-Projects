import React, { Component } from "react"
import Classes from "./Main.css"
import Article from "../Article/Article"
import User from "../User/User"

class Main extends Component {
    state = {
        users: [
            { id: 101, name: "Pam", desc: "Developer" }
            // { id: 243, name: "Ram", desc: "DevOps" },
            // { id: 154, name: "Lam", desc: "System" },
            // { id: 348, name: "Doe", desc: "Network" },
            // { id: 596, name: "Jane", desc: "Agile" },
            // { id: 783, name: "Grant", desc: "JavaScript" },
            // { id: 207, name: "Dam", desc: "C++" },
            // { id: 190, name: "User", desc: "C" },
        ],
        isDisplayArticle: true
    }
    constructor(props) {
        super(props);
        console.log("It is not a useless constructor")
    }
    changeField = (e, i) => {
        const targetInput = e.target;
        const field = targetInput.dataset.field;
        const newUsers = [...this.state.users];
        newUsers[i][field] = targetInput.value;
        this.setState({ users: newUsers });
    }
    displayArticle() {
        this.state.isDisplayArticle ? this.setState({ isDisplayArticle: false })
            : this.setState({ isDisplayArticle: true })
    }
    render() {
        let article;
        if (this.state.isDisplayArticle) {
            article = (<Article/>);
        }
        return (
            <div className={Classes.Main}>
                <button onClick={() => this.displayArticle()}>Click Me</button>
                {article}
                <div className={Classes.Users}>
                    {this.state.users.map((user, i) => {
                        return <User id={user.id}
                            name={user.name}
                            desc={user.desc}
                            changeField={(e) => this.changeField(e, i)}
                            key={i}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Main;