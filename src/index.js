import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import WidgetElement from './components/Widget';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import MessageWithEvent from './components/MessageWithEvent';
import Clock from './components/Clock';
import Counter from './components/Counter';


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
      <HelloWorld />
      <ExpenseEntryItem items={item}/>
      <WidgetElement name="Chad" list="Hot Dogs, Buns, Mustard"/>
      <ExpenseEntryItemList items={item}/>
      {/* <MessageWithEvent name="Chad"/> */}
      {/*<Clock />*/}
      <Counter />
   </React.StrictMode>,
   document.getElementById('root')
);