let budgetController = (function () {
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
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
                case "inc":
                    newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function () {
            console.log(data)
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

    let DOMStrings = {
        inputType, inputDescription,
        inputValue, inputBtn,
        incomeContainer, expenseContainer,
        budgetLabel, incomeLabel,
        expensesLabel, percentageLabel,
        container
    }
    return {
        getInput: function () {
            let type = document.querySelector(DOMStrings.inputType).value;
            let description = document.querySelector(DOMStrings.inputDescription).value;
            let value = parseFloat(document.querySelector(DOMStrings.inputValue).value);            
            return {
                type, description, value
            };
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
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            
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
            newHTML = newHTML.replace("%value%", obj.value);

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
    }   
    let updateBudget = function () {
        budgetCtrl.calculateBudget();

        let budget = budgetCtrl.getBudget()
        UICtrl.displayBudget(budget);
    }
    let ctrlAddItem = function () {
        let input, newItem;
        input = UICtrl.getInput();
        if (input.description && input.value && input.value > 0) {
            newItem = budgetCtrl
                .addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            updateBudget();
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
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            })
        }
    }
})(budgetController, UIController);

controller.init();