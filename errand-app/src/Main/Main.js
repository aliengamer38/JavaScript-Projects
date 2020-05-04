import React, { Component } from "react"
import Classes from "./Main.css"
import Article from "../Article/Article"
import User from "../User/User"
import Computer from "../Computer/Computer"

class Main extends Component {
    state = {
        users: [
            { id: 101, name: "Pam", desc: "Developer" },
            { id: 243, name: "Ram", desc: "DevOps" },
            { id: 154, name: "Lam", desc: "System" },
            { id: 348, name: "Doe", desc: "Network" },
            { id: 596, name: "Jane", desc: "Agile" },
            { id: 783, name: "Grant", desc: "JavaScript" },
            { id: 207, name: "Dam", desc: "C++" },
            { id: 190, name: "User", desc: "C" }
        ],
        isDisplayArticle: true,
        desc: {description: "Gaming"},
        dummyText: "Note"
    }
    constructor(props) {
        super(props);
        console.log("It is not a useless constructor")
    }
   
    displayArticle = () => {        
        this.state.isDisplayArticle ? this.setState({ isDisplayArticle: false })
            : this.setState({ isDisplayArticle: true })
    }
    alternateMain = () => {
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

    counter = 0;
    changeComp = () => {
        console.log("counter");
        this.count++;
        // this.setState({desc: `Description - ${this.counter}`})
        this.setState({dummyText: `note: ${this.counter}`})
    }
    shouldComponentUpdate(nextProps, nextState) {        
        console.log("[Main.js] shouldComponentUpdate");
        console.log(this.state.users)
        console.log(nextState.users);
        console.log(this.state.users !== nextState.users |); // false
        return this.state.users !== nextState.users ? true : false;            
    }   
    test = () => {
        return (
            <div style={{textAlign: "center"}}>
                <button onClick={this.changeComp}>Change Computer</button>
                <Computer desc={this.state.desc.description}/>
            </div>
        )
    }
    changeField = (e, i) => {
        const targetInput = e.target;
        const field = targetInput.dataset.field;
                
        const newUsers = [...this.state.users];
        const newUser = {...newUsers[i]};
        newUsers[i] = newUser;
        newUser[field] = targetInput.value;        
        this.setState({ users: newUsers });                
    }

    render() {
        let article;
        console.log(this.state.isDisplayArticle);
        console.log(article);
        if (this.state.isDisplayArticle) {
            article = (<Article/>);
        } 
        return (
            <div className={Classes.Main}>
                <button onClick={() => this.displayArticle()}>Click Me</button>
                {article}
                <div className={Classes.Users}>                    
                    {this.state.users.map((u, i) => {
                        return <User user={u} changeField={ e => this.changeField(e, i)} key={i}/>                              
                    })}              
                </div>
            </div>
        )
    }
}

export default Main;