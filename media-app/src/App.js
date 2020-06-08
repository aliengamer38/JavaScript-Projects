import React from 'react';
import classes from './App.css';
import Input from "./components/Input/Input"
import Debits from "./components/Debit/Debits"
import Launch from "./components/Launch/Launch"
import LogProvider from "./context/log-context"

const app = props => {				
	const display = () => {
		alert("special")
	}
	return (
		<div className={classes.App}>									
			<Input fieldNames={["name", "amount"]} />
			<Debits />			
			<LogProvider display={display}>
				<Launch />			
			</LogProvider>
		</div>	
	);
}

export default app;
