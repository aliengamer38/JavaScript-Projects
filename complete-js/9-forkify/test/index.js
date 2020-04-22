// hand is an array
let suits = ["S", "H", "D", "C"];
let hand = ["KS", "KD", "KD", "KD", "KD"];

function getNums(hand) {
    return hand.map(c => {
        // return c[0] === "A" ? 1 : parseInt(c[0]);
        switch (c[0]) {
            case "A":
                return 1;
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            default:
                return parseInt(c[0]);
        }
    });    
}
function getSuits(hand) {
    return hand.map(c => {
        return c[1]
    })
}

function flush(hand) {    
    for (let j = 0; j < 4; j++) {
        if (hand[j][1] !== hand[j + 1][1]) {
            return false;
        }
    }
    return true;
}
// console.log(flush(hand))
function straight(hand) {
    let nums = getNums(hand);    
    let init = nums[0]
    for (let j = 1; j < 5; j++) {
        if (init + 1 !== nums[j]) {
            return false;
        }
        init++;
    }
    return true;
}
// console.log(straight(hand));

function fourOfAKind(hand) {
    let nums = getNums(hand);
    for (let i = 0; i < 5; i++) {
        if (nums[i] !== nums[i + 1]) {
            return false
        } else {

        }
    }
}

// console.log(getSuits(hand));
// console.log(getNums(hand));

function getOccurrence(number, hand) {
    let nums = getNums(hand);
    let id = nums.indexOf(number);
    let count = 0;
    while (true) {
        if (id === -1) {
            break;
        }
        nums.splice(id, 1);
        id = nums.indexOf(number);
        count++;
    }   
    return count;
}

// console.log(getOccurrence(13, hand));



