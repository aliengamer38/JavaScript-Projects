
const sendPromise = (promise, box) => {
    console.log("SENDPROMISE")
    promise.then(res => {
        box = res.default;
        console.log(box);
    })
}

export default sendPromise