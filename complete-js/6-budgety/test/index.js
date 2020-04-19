let formatNumber = function (num) {
	num = Math.abs(num);
	num = num.toFixed(2);
	let numSplit = num.split(".");
	let int = numSplit[0];
	let dec = numSplit[1];
	let intNum = "";
	let leadingDigits = int.length % 3;
    let separatorCount = Math.ceil(int.length / 3);
    console.log(separatorCount)
	if (int.length > 0) {
		if (leadingDigits === 0) {
			leadingDigits = 3;
		}

		for (let i = 0; i < separatorCount; i++) {
			if (i === 0) {
				intNum += int.substr(0, leadingDigits);
			} else {
				intNum += "," + int.substr(leadingDigits + (i - 1) * 3, 3);
            } 
		}
	}
	return intNum;
};

console.log(formatNumber(1234567890));
