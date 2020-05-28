import React, { Component } from "react"
import * as actionTypes from "../store/action/actionTypes"
import { connect } from "react-redux";

const getShortMonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

const dateToString = (date, offset) => {
    const offsetDateTime = date.getTime() + offset * 3600 * 1000
    console.log(offsetDateTime)
    const offsetDateString = new Date(offsetDateTime).toISOString();
    console.log(offsetDateString.slice(0, offsetDateString.indexOf("T")));
    return offsetDateString.slice(0, offsetDateString.indexOf("T"))
}

const standardDateString = (ISODate) => {
    const dateArr = ISODate.split("-");
    console.log(dateArr[1])
    const dateStdrString = `${getShortMonthName[+dateArr[1] - 1]} ${+dateArr[2]}, ${+dateArr[0]}`;
    return dateStdrString;
}

const timeRemainingStr = (time) => {    
    const dayMultiplier = 3600 * 1000 * 24;
    const hourMultiplier = 3600 * 1000
    const minuteMultiplier = 60 * 1000
    const secondMultiplier = 1000;
    console.log(time);
    const days = Math.floor(time / dayMultiplier);
    console.log(days)
    const hours = Math.floor((time - (days * dayMultiplier)) / hourMultiplier);
    console.log(hours)
    const minutes = Math.floor((time - (days * dayMultiplier) - (hours * hourMultiplier)) / minuteMultiplier)
    console.log(minutes)
    const seconds = Math.floor((time - (days * dayMultiplier) - (hours * hourMultiplier) - (minutes * minuteMultiplier)) / secondMultiplier);
    console.log(seconds)

    const timeRemaining = `${days} day/s ${hours} hour/s ${minutes} minute/s ${seconds} second/s`
    return timeRemaining;
}

class Work extends Component {
    refs = {}
    
    constructor(props) {
        super(props);
        this.refs.expires = React.createRef();
    }
    expireChange = (e) => {
        this.props.expiresChange(e.target.value);
    }
    render() {
        return (
            <div>
                <p>Date Today: {standardDateString(dateToString(new Date(), 8))}</p>
                <p>{standardDateString(dateToString(this.props.expirationDateValue, 8))}</p>                
                <button onClick={e => this.props.startExpirationTimer()}>Run Timer</button>
                <label htmlFor="expires">Expires In: </label>
                <input onChange={e => this.expireChange(e)}
                    value={dateToString(this.props.expirationDateValue, 8)} type="date" id="expires" />
                <button onClick={e => this.props.startExpirationTimer()}>Reveal</button>
                <p>{timeRemainingStr(this.props.expireIn)}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        expirationDate: new Date(state.work.expirationDate.value).toDateString(),
        expireIn: state.work.expireIn,
        expirationDateValue: state.work.expirationDate.value
    }
}
const mapDispatchToProps = dispatch => {
    return {
        startExpirationTimer: () => { dispatch({ type: actionTypes.START_TIME}) },
        expiresChange: (value) => { dispatch({ type: actionTypes.EXPIRES_CHANGE, value: value }) }        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Work);