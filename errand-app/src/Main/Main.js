import React, { Component } from "react"
import Classes from "./Main.css"
import Article from "../Article/Article"
import User from "../User/User"
import Users from "../User/Users"
import AuthContext from "../Utility/auth-context"
import AddUser from "../User/AddUser"

class Main extends Component {    
    state = {
        users: [{
            key: 1,
            info: {            
                id: { value: "101", isDisabled: true },
                name: { value: "Ram", isDisabled: true },
                desc: { value: "Developer", isDisabled: true },
                attmptPass: { value: "", isDisabled: false },
                password: { value: "1" },
                deleteBtn: { isDisabled: true },
                displayBtn: { isDisabled: true },
                saveBtn: { isDisabled: true },
                authBtn: { isDisabled: false },
                clickBtn: { isDisabled: false },
                isAuth: { value: false}
            }
        }],  
        isDisplayArticle: true,
    }
   
    displayArticle = () => {        
        this.state.isDisplayArticle ? this.setState({ isDisplayArticle: false })
            : this.setState({ isDisplayArticle: true })
    }    
    deleteItem = (e, obj) => {
        const isDelete = prompt("Are you sure to delete this item?");
        if (isDelete.toLowerCase() === "yes") {
            const newUsers = [...this.state.users];
            const userIndex = newUsers.findIndex(u => u.info.id === obj.user.id);
            newUsers.splice(userIndex, 1);
            
            this.setState({ users: newUsers });
            alert("Item Deleted!");
        }
    }    
    addItem = (e, obj) => {        
        const fields = obj.fields;
        if (fields.password.current.value === "") {
            alert("Password must not be empty!")
        } else if (fields.password.current.value !== fields.repeat.current.value) {
            alert("Password does not match!");
        } else {
            alert("Item added!");
            const newUsers = [...this.state.users];
            const lastKey = newUsers[newUsers.length - 1].key;
            const newUser = {
                key: lastKey + 1,
                info: {
                    id: { value: fields.id.current.value, isDisabled: true },
                    name: { value: fields.name.current.value, isDisabled: true },
                    desc: { value: fields.desc.current.value, isDisabled: true },
                    attmptPass: { value: "", isDisabled: false },
                    password: { value: fields.password.current.value },
                    deleteBtn: { isDisabled: true },
                    displayBtn: { isDisabled: true },
                    saveBtn: { isDisabled: true },
                    authBtn: { isDisabled: false },
                    clickBtn: { isDisabled: false },
                    isAuth: { value: false}
                }
            }
            newUsers.push(newUser);
            this.setState({ users: newUsers });
            fields.id.current.value = "";
            fields.name.current.value = "";
            fields.desc.current.value = "";
            fields.password.current.value = "";
            fields.repeat.current.value = "";
        }
    }
    saveItem = (e, obj) => {
        alert("Save Complete!")        

        const newUsers = [...this.state.users];
        const userIndex = newUsers.findIndex(u => u.info.id === obj.user.id);
        const newUser = { ...newUsers[userIndex] };        
        newUsers[userIndex] = newUser;
        
        const fields = obj.fields;

        fields["ID"].current.value = "";
        fields["Name"].current.value = "";
        fields["Desc"].current.value = "";

        newUser.info.authBtn.isDisabled = false;
        newUser.info.id.isDisabled = true;
        newUser.info.name.isDisabled = true;
        newUser.info.desc.isDisabled = true;
        newUser.info.isAuth.value = false;

        newUser.info.saveBtn.isDisabled = true;
        newUser.info.displayBtn.isDisabled = true;
        newUser.info.deleteBtn.isDisabled = true;
        newUser.info.attmptPass.isDisabled = false;        

        this.setState({ users: newUsers });
    }
    
    changeField = (e, obj) => {                
        const targetInput = e.target;
        const field = targetInput.dataset.field;
                
        const newUsers = [...this.state.users];        
        
        const userIndex = newUsers.findIndex(u => u.info.id === obj.user.id);   
        const newUser = {...newUsers[userIndex]}
                
        newUser.info[field].value = targetInput.value;                
        newUsers[userIndex] = newUser;
        
        this.setState({ users: newUsers });                
    }       
    authUser = (e, obj) => {        
        console.log(obj.fields)

        const newUsers = [...this.state.users];
        const userIndex = newUsers.findIndex(u => u.info.id === obj.user.id);
        const newUser = { ...newUsers[userIndex] };        
        newUsers[userIndex] = newUser;

        window.newUser = newUser;
        window.users = this.state.users;        
        console.log(newUser.info.attmptPass.value)
        console.log(newUser.info.password.value)
        
        if (newUser.info.attmptPass.value === newUser.info.password.value) {
            newUser.info.isAuth.value = true;
            newUser.info.saveBtn.isDisabled = false;
            newUser.info.displayBtn.isDisabled = false;
            newUser.info.deleteBtn.isDisabled = false;
            newUser.info.authBtn.isDisabled = true;
            newUser.info.id.isDisabled = false;
            newUser.info.name.isDisabled = false;
            newUser.info.desc.isDisabled = false;
            newUser.info.attmptPass.isDisabled = true;            
        }
        newUser.info.attmptPass.value = "";
        this.setState({ users: newUsers });
        newUser.attmptPass = ""                
    }
    displayItem = (e, obj) => {
        console.log(obj.user.id.value);
        console.log(obj.user.name.value);
        console.log(obj.user.desc.value);
    }
    componentDidMount() {
        console.log("MAIN mounted")
    }
    render() {        
        console.log("MAIN rendered")
        let article;                
        if (this.state.isDisplayArticle) {
            article = (<Article/>);
        } 
        return (
            <div style={{margin: "1rem 0"}}>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.AuthUser,
                    changeField: this.changeField,  
                    authUser: this.authUser,
                    alertMe: this.alertMe,
                    deleteItem: this.deleteItem,
                    saveItem: this.saveItem,                   
                    displayItem: this.displayItem
                }}>
                    <div className={Classes.Main}>
                        <div style={{marginBottom: "0.5rem"}}>
                            <AddUser addItem={this.addItem}
                                alertFields={this.alertFields}/>
                        </div>
                        <button onClick={() => this.displayArticle()}>Display</button>
                        {article}
                        <div className={Classes.Users}>                    
                            <Users users={this.state.users} />
                        </div>
                    </div>
                </AuthContext.Provider>
            </div>            
        )
    }
}

export default Main;
