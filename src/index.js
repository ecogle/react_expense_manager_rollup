import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import WidgetElement from './components/Widget';

const item = {
   "item":"Mango Juice",
   "amount":30.00,
   "spend_date":"10-10-2020",
   "category": "food",
}
ReactDOM.render(
   <React.StrictMode>
      <HelloWorld />
      <ExpenseEntryItem items={item}/>
      <WidgetElement name="Chad" list="Hot Dogs, Buns, Mustard"/>
   </React.StrictMode>,
   document.getElementById('root')
);