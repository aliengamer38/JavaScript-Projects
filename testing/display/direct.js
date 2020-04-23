// promise

// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(300), 2000);
// }).then(msg => console.log(`This message is from: ${msg}`));

// async and await

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(400), 2000);    
})

async function display() {
    const word = await promise;
    console.log(`Await message: ${word}`);
}

display();