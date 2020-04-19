let budgetController = (function () {
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {            
            this.percentage = Math.round((this.value / totalIncome) * 100);            
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }
    function Income(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    } 
    let calculateTotal = function (type) {
        let sum = 0;        
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });        

        data.totals[type] = sum;
    };
    let allExpenses = [];
    let allIncomes = [];
    let totalExpenses = 0;
    // list of all incomes and expenses
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            let newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0
            }

            switch (type) {
                case "exp":
                    newItem = new Expense(ID, des, val);
                    break;
                case "inc":
                    newItem = new Income(ID, des, val);
                    break;
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function () {
            console.log({...data, expense: Expense, income: Income})
            return {...data, expense: Expense, income: Income};
        },
        deleteItem: function (type, id) {            
            let ids = data.allItems[type].map(function (current) {
                return current.id;
            });            
            let index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
                console.log(data.allItems[type]);
            }

        },
        calculateBudget: function () {
            calculateTotal("exp");            
            calculateTotal("inc");

            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current) {                
                // console.log(current instanceof Expense);
                // console.log(data.allItems.exp[0] instanceof Expense);
                console.log(data.allItems.exp[0]);
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function () {            
            let allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            })

            return allPerc;
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        }
    }
})();

let UIController = (function () {
    let inputType = ".add__type";
    let inputDescription = ".add__description";
    let inputValue = ".add__value";
    let inputBtn = ".add__btn";
    let incomeContainer = ".income__list";
    let expenseContainer = ".expenses__list";
    let budgetLabel = ".budget__value";
    let incomeLabel = ".budget__income--value";
    let expensesLabel = ".budget__expenses--value";
    let percentageLabel = ".budget__expenses--percentage";
    let container = ".container";
    let expensesPecLabel = ".item__percentage";
    let dateLabel = ".budget__title--month";

    let DOMStrings = {
        inputType, inputDescription,
        inputValue, inputBtn,
        incomeContainer, expenseContainer,
        budgetLabel, incomeLabel,
        expensesLabel, percentageLabel,
        container, expensesPecLabel,
        dateLabel
    }

    let formatNumber = function (num, type) {
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

        

        return (type === "exp" ? "-" : "+") + " " + intNum + "." + dec;

    };
    let nodeListForEach = function (list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    return {
        getInput: function () {
            let type = document.querySelector(DOMStrings.inputType).value;
            let description = document.querySelector(DOMStrings.inputDescription).value;
            let value = parseFloat(document.querySelector(DOMStrings.inputValue).value);            
            return {
                type, description, value
            };
        },
        displayPercentages: function (percentages) {
            let fields = document.querySelectorAll(DOMStrings.expensesPecLabel);
            
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },
        changeType: function () {
            let fields = document.querySelectorAll(
                DOMStrings.inputType + "," +
                DOMStrings.inputDescription + "," +
                DOMStrings.inputValue
            );

            nodeListForEach(fields, function (cur) {
                cur.classList.toggle("red-focus");
            });
            document.querySelector(DOMStrings.inputBtn).classList.toggle("red");
        },
        getDOMStrings: function () {
            return DOMStrings;
        },    
        clearFields: function () {
            let fields = document.querySelectorAll(DOMStrings.inputDescription + ", " + DOMStrings.inputValue);
            let fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            })
            fieldsArr[0].focus();
        },
        deleteListItem: function (selectorID) {
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        displayMonth: function () {
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + " " + year;            
        },
        displayBudget: function (obj) {
            let type;

            obj.budget > 0 ? type = "inc" : type = "exp";
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, "exp");
            
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }
        },
        addListItem: function (obj, type) {
            let html, newHTML, element;
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else {
                element = DOMStrings.expenseContainer;
                html = ' <div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHTML = html.replace("%id%", obj.id);
            newHTML = newHTML.replace("%description%", obj.description);
            newHTML = newHTML.replace("%value%", formatNumber(obj.value, type));            

            document.querySelector(element)
                .insertAdjacentHTML("beforeend", newHTML);

        }
    }
})();

let controller = (function (budgetCtrl, UICtrl) {
    let setupEventListeners = function () {
        let DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    
        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                // console.log("Enter was pressed");
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container)
            .addEventListener("click", ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener("change", UICtrl.changeType);        
    }   
    let updateBudget = function () {
        budgetCtrl.calculateBudget();

        let budget = budgetCtrl.getBudget()
        UICtrl.displayBudget(budget);
    };
    let updatePercentages = function () {
        budgetCtrl.calculatePercentages();
        let percentages = budgetCtrl.getPercentages();
        UICtrl.displayPercentages(percentages);
    };
    let ctrlAddItem = function () {
        let input, newItem;
        input = UICtrl.getInput();
        if (input.description && input.value && input.value > 0) {
            newItem = budgetCtrl
                .addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            updateBudget();
            updatePercentages();
        }
    };  
    let ctrlDeleteItem = function (event) {
        let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        let splitID, type, ID;
        if (itemID) {
            splitID = itemID.split("-");
            type = splitID[0];    
            ID = splitID[1];
        }
        ID = parseFloat(ID);
        budgetCtrl.deleteItem(type, ID);
        UICtrl.deleteListItem(itemID);
        updateBudget();
    }
    
    return {
        init: function () {
            console.log("Application has started");
            UICtrl.displayMonth();
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
        }
    }
})(budgetController, UIController);

controller.init();