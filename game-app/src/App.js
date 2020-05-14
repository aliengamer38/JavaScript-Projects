import React, { Component, Fragment } from "react";
import classes from "./App.css";
import Comments from "./Comment/Comments"
import axios from "./Utility/axios"
import AuthContext from "./Utility/auth-context"
import Wrapper from "./Utility/Wrapper"
import Post from "./Post/Post"
import Computers from "./Computer/Computers"
import Computer from "./Computer/Computer"
import AddComputer from "./Computer/AddComputer";

const SERVER_NAME = "https://jsonplaceholder.typicode.com/posts";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.test = "TEST!";


class App extends Component {
	state = {
		posts: undefined,
		pageNumber: 1,
		contentPerPage: 10,
		incButton: { isDisable: false },
		decButton: { isDisable: false },
		test: undefined,
		anotherTest: undefined,
		isThereError: false,
		computers: [
			{
				name: { value: "MSI", isEditable: false },
				specs: { value: "Laptop", isEditable: false },
				job: { value: "Gaming", isEditable: false },				
				editBtn: { disabled: false },
				saveBtn: { disabled: false },				
				deleteBtn: { disabled: false },
				saveDBBtn: { disabled: false },
				isEditable: false
			},			
			{
				name: { value: "Dell", isEditable: false },
				specs: { value: "PC", isEditable: false },
				job: { value: "Creative", isEditable: false },
				isEditable: false,
				editBtn: { disabled: false },
				saveBtn: { disabled: false },
				deleteBtn: { disabled: false },				
				saveDBBtn: { disabled: false },				
			}			
		]
	}
	componentDidUpdate() {
		console.log("APP componentDidUpdate")
	}
	submit = (e, obj) => {		
		console.log("submitting...");	
		axios.post(SERVER_NAME, {
			header: obj.post.title,
			main: obj.post.body,			
		}).then(response => {
			console.log(response);
		}).catch(err => {
			console.log(err);
		})		
	}
	componentDidMount() {
		// console.log("APP componentDidMount")
		// axios.get("/posts").then(response => {
		// 	const data = response.data;
		// 	window.data = response.data;			
		// 	this.setState({ posts: data });							
		// 	this.getUIBtnProp(this.state.pageNumber, this.state.contentPerPage);					
		// 	// this.setState({ test: "test" });
		// 	// this.setState({ anotherTest: "anotherTest" });
		// }).catch(err => {
		// 	this.setState({ isThereError: true })
		// 	console.log(err);
		// })
		// console.log("APP after axios")

	}		
	goToPageNumber = (e, obj) => {
		const pageNumber = Number(obj.goToInput.value);
		const contentPerPage = this.state.contentPerPage;
		const maxPageNumber = Math.ceil(this.state.posts.length / contentPerPage);		
		if (pageNumber > 0 && pageNumber <= maxPageNumber)  {
			this.setState({ pageNumber:  pageNumber}); 
			this.getUIBtnProp(pageNumber, contentPerPage)
			// this.setState({ test: "test" });
			// this.setState({ decButton: { isDisable: true } });		
		}
	}
	incPage = (e) => {				
		const pageNumber = this.state.pageNumber;
		const contentPerPage = this.state.contentPerPage;		
		this.setState(		
			{ pageNumber: pageNumber + 1 }				
		)
		this.getUIBtnProp(pageNumber + 1, contentPerPage)
	}
	getUIBtnProp = (pageNumber, contentPerPage) => {
		const nextMaxItem = contentPerPage * pageNumber;				
		if (pageNumber === 1) {
			this.setState({ decButton: { isDisable: true } });		
		} else {
			this.setState({ decButton: { isDisable: false} });
		}

		if (this.state.posts[nextMaxItem] === undefined) {	
			this.setState({ incButton: {isDisable: true} });
		} else {
			this.setState({ incButton: {isDisable: false} });			
		}
	}	
	decPage = (e) => {
		const pageNumber = this.state.pageNumber;
		const contentPerPage = this.state.contentPerPage;

		this.setState(prevState => {
			if (prevState.pageNumber !== 0) {
				return this.setState(prevState => ({ pageNumber: --prevState.pageNumber }))
			}
		})
		this.getUIBtnProp();		
		this.getUIBtnProp(pageNumber - 1, contentPerPage)
	}
	delete = (e, obj) => {
		// const newPosts = [...this.state.posts];
		// const index = newPosts.findIndex(p => p.id === obj.post.id);
		// newPosts.splice(index, 1);
		// this.setState({ posts: newPosts });
		console.log(`${SERVER_NAME}/${obj.post.id}`);	
		axios.delete(`/posts/${obj.post.id}`).then(response => {
			console.log("RESPONSE", response);
		}).catch(err => {
			console.log(err);
		})
	}
	addComputer = (e, obj) => {
		const newObj = { ...obj };
		const comp = {
			name: { value: newObj.computer.name.current.value, isEditable: false },
			specs: { value: newObj.computer.specs.current.value, isEditable: false },
			job: { value: newObj.computer.job.current.value, isEditable: false }			
		};
		const newComputers = [...this.state.computers];
		newComputers.push(comp);
		this.setState({ computers: newComputers });
		// clear inputs
		obj.computer.name.current.value = "";
		obj.computer.specs.current.value = "";
		obj.computer.job.current.value = "";
	}
	inputChange = (e, obj) => {
		const newComputers = [...this.state.computers];
		const findIndex = newComputers.findIndex(c => c === obj.computer);
		const newComputer = { ...newComputers[findIndex] }
		newComputer[obj.fieldName].value = e.target.value;
		newComputers[findIndex] = newComputer;
		this.setState({ computers: newComputers });
	}
	saveComputer = (e, obj) => {		
		const newComputers = [...this.state.computers];		
		const findIndex = newComputers.findIndex(c => c === obj.computer);
		const newComputer = { ...newComputers[findIndex] };	
		
		console.log(newComputer);

		newComputer.name.value = obj.computer.name.value;
		newComputer.specs.value = obj.computer.specs.value;
		newComputer.job.value = obj.computer.job.value;

		newComputer.isEditable = false;
		newComputers[findIndex] = newComputer;		
		this.setState({ computers: newComputers });
	}
	editComputer = (e, obj) => {		
		const newComputers = [...this.state.computers];		
		const findIndex = newComputers.findIndex(c => c === obj.computer);
		const newComputer = { ...newComputers[findIndex] };				

		newComputer.isEditable = true;
		newComputers[findIndex] = newComputer;		
		this.setState({ computers: newComputers });
	}
	deleteComputer = (e, obj) => {
		const newComputers = [...this.state.computers];
		const findIndex = this.state.computers.findIndex(c => c === obj.computer);
		newComputers.splice(findIndex, 1);
		this.setState({ computers: newComputers });
	}
	render() {
		console.log("APP render")		
		// if (this.state.isThereError) {
		// 	return <p>There is an error processing</p>
		// }
		// if (!this.state.posts) {
		// 	return null;
		// }
		// if (this.state.posts.length > 0) {
		// 	const contentPerPage = this.state.contentPerPage;
		// 	const pageNumber = this.state.pageNumber;
		// 	const posts = this.state.posts.slice((pageNumber - 1) * contentPerPage, contentPerPage * pageNumber);
		// 	const comment = (
		// 		<Comments posts={posts}
		// 			pageNumber={this.state.pageNumber}
		// 			incPage={this.incPage}
		// 			decPage={this.decPage}
		// 			isIncBtnDisable={this.state.incButton.isDisable}
		// 			isDecBtnDisable={this.state.decButton.isDisable}
		// 			contentPerPage={this.state.contentPerPage}
		// 			goToPageNumber={this.goToPageNumber}
		// 			submit={this.submit}/>
		// 	)
		// 	return (
		// 		<AuthContext.Provider value={{submit: this.submit, delete:this.delete}}>
		// 			{comment}
		// 		</AuthContext.Provider>
		// 	);
		// } else {
		// 	return (
		// 		<div style={{ textAlign: "center"}}>
		// 			<p>Array is empty</p>
		// 		</div>
		// 	);
		// }		
		return (
			<AuthContext.Provider value={{
				deleteComputer: this.deleteComputer,
				editComputer: this.editComputer,
				saveComputer: this.saveComputer,
				inputChange: this.inputChange
			}}>
				<div style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "0.5rem"
				}}>
					<AddComputer addComputer={this.addComputer}/>
					<Computers computers={this.state.computers} />
					<button>Save</button>						
					<button>Get Info</button>										
				</div>
			</AuthContext.Provider>
		)
	}
}

export default App;
