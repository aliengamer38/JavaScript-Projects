import React, {useState} from "react"
import Computer from "../Computer/computerView"
import UserView from "../User/userView"
import LaptopView from "../Laptop/laptopView"
import User from "../User/user"
import OrderView from "../Order/orderView"
import SalesView from "../Sales/salesView"
import PersonView from "../Person/personView"
import {StyleRoot} from "radium"

const start = () => {        
    let users, setUsers;
    let [cust, setCust] = useState({
        name: "Ram",
        age: 40,
        desc: "developer"
    })
    let [toggleBtn, setToggleBtn] = useState(false);
    let [toggleDisplay, setToggleDisplay] = useState(false);
    const [orders, setOrders] = useState([
        { key: 1, orderId: 101, orderDesc: "PC" },
        { key: 2, orderId: 210, orderDesc: "Laptop" },
        { key: 3, orderId: 305, orderDesc: "Mobile" }
    ]);
    const setupUsers = () => {
        const user1 = new User("Pam", 30, "developer");
        const user2 = new User("Ram", 40, "devOps");
        const user3 = new User("Lam", 35, "agile");
        
        [users, setUsers] = useState([user1, user2, user3]);
    }    

    let sales, setSales;
    const init = () => {
        [sales, setSales] = useState([
            { key:1, id: 15, details: "ship", isProcessed: true },
            { key:2, id: 34, details: "shop", isProcessed: true },
            { key:3, id: 26, details: "store", isProcessed: false },
            { key:4, id: 67, details: "consume", isProcessed: true },
            { key:5, id: 51, details: "create", isProcessed: false },
        ]);        
    }
    init();
    setupUsers();
    // console.log(users);

    const deleteOrder = id => {
        const newSales = [...sales];
        newSales.splice(id, 1);
        setSales(newSales);
    }
    const deleteItem = (id) => {
        console.log(id);
        const newOrders = [...orders];
        newOrders.splice(id, 1);
        setOrders(newOrders);
        console.log("item deleted")
    }
    const changeInfo = () => {
        if (!toggleBtn) {
            setCust({
                name: "Pam",
                age: 50,
                desc: "devOps"
            });
            setToggleBtn(true);
        } else {
            setCust({
                name: "Ram",
                age: 40,
                desc: "developer"
            });
            setToggleBtn(false);
        }
    }
    const toggle = () => {
        if (!toggleDisplay) {                        
            setToggleDisplay(true)
        } else {
            setToggleDisplay(false)
        }
    }

    const deleteSales = (id) => {
        const newSales = [...sales];
        // const index = newSales.find(s => s.id === id);
        newSales.splice(id, 1);
        setSales(newSales);
    }

    const orderView = (orders.map((order, index) => {
        return <OrderView
            key={index}
            orderId={order.orderId}
            orderDesc={order.orderDesc}
            deleteItem={deleteItem.bind(this, index)}/>
        }))    
    console.log("Loading...")
    const salesView = sales.map((s, i) => {
        return <SalesView key={s.key}
            id={s.id}
            details={s.details}
            isProcessed={s.isProcessed}
            deleteSales={deleteSales.bind(this, i)}
        />
    })
    const changeName = (e, i) => {
        const newPersonList = [...personList];
        newPersonList.splice(i, 1, e.target.value);
        setPersonList(newPersonList);        
    }
    const [personList, setPersonList] = useState(["Pam", "Doe", "Jane", "Grant", "Sam", "Ram"]);
    const personDisplay = (name) => {
        return personList.map((p, i) => {
            return <PersonView name={p}
                changeName={e => { changeName(e, i) }}
                msgLength={p.length}/>
        })
    }
    console.log("Loading...")
    return (        
        <div className="main">            
            {personDisplay()}
        </div>
    )
}   

export default start;