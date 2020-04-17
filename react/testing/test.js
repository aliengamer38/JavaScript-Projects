function User(name, job) {
	this.name = name;
	this.job = job;
	this.getName = function () {			
		console.log(this.name);
	}
	this.getNameArrow = () => {
		console.log(this.name);

	}
}

let user = new User("Ram");
let getName = user.getName;
let getNameArrow = user.getNameArrow;
getNameArrow();
getName();