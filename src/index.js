import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import WidgetElement from './components/Widget';

ReactDOM.render(
   <React.StrictMode>
      <HelloWorld />
      <ExpenseEntryItem />
      <WidgetElement name="Chad" list="Hot Dogs, Buns, Mustard"/>
   </React.StrictMode>,
   document.getElementById('root')
);