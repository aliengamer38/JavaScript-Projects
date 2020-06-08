const state = {
    debits: [
        {name: "Pam", counter: 50, amount: 150}
    ]
}

const upState = [...state.debits]
console.log(upState)