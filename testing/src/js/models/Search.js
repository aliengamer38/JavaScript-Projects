import axios from "axios";
import * as config from "../config";

class Search {
	constructor(query) {
        this.query = query;        
	}

	async getResults() {
		const proxy = "";
		const path = `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`;
		try {
			const res = await axios(path);
			this.result = res.data.recipes;			
		} catch (err) {
			alert(err);
		}
	}
}

export default Search;
