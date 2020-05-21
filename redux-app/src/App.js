import React, { Component } from 'react';
import Users from "./User/Users"
import computerReducer from "./Utility/store/reducer/compRedc"
import specsReducer from "./Utility/store/reducer/specsRedc"
import Doors from "./Door/Doors"
import Cars from "./Car/Cars"
import Plane from "./Plane/Plane"

class App extends Component {
	render() {
		return (
			<div>
				{/* <Users/>	 */}
				{/* <Button/> */}
				{/* <Box/> */}
				{/* <Doors/> */}
				{/* <Cars/> */}
				<Plane/>
			</div>
		);
	}
}

export default App;
