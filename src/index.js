import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import WidgetElement from './components/Widget';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import MessageWithEvent from './components/MessageWithEvent';
import Clock from './components/Clock';
import Counter from './components/Counter';
import ClockUsingHooks from './components/ClockUsingHooks';
import ExpenseEntryItemListFn from './components/ExpenseEntryItemListFn';
import ClockWorkflow from './components/ClockWorkflow';

const items = [
   { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
   { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
   { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
   { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
   { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
   { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
   { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
   { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
   { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
   { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
];


const item = 
   [{
      "id":1,
      "item":"Mango Juice",
      "amount":30.5,
      "spend_date":"10-10-2020",
      "category": "food",
   },
   {
      "id":2,
      "item":"Orange Juice",
      "amount":20.7,
      "spend_date":"8-15-2020",
      "category":"food",
   },
   {
      "id":3,
      "item":"Peach Juice",
      "spend_date":"09-15-2021",
      "amount":40.3,
      "category":"food",
   }]

ReactDOM.render(
   <React.StrictMode>
      {/* <HelloWorld /> */}
      {/* <ExpenseEntryItem items={item}/> */}
      {/* <WidgetElement name="Chad" list="Hot Dogs, Buns, Mustard"/> */}
      {/* <ExpenseEntryItemList items={item}/> */}
      {/* <MessageWithEvent name="Chad"/> */}
      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <ClockUsingHooks /> */}
      <ExpenseEntryItemListFn items={items} />
      <ClockWorkflow />
   </React.StrictMode>,
   document.getElementById('root')
);

setTimeout(() => {
   ReactDOM.render(
      <React.StrictMode>
         <div><p>Clock is removed from the DOM.</p></div>
      </React.StrictMode>,
      document.getElementById('root')
   );
}, 5000);