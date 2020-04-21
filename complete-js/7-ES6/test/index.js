const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Pam",
            description: "developer"
        });
    }, 1000)
});
setTimeout(() => {
    console.log(prom);
}, 1500)