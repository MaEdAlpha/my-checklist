import {React, useState} from 'react';

import "./App.css";
import AddItem from "./CheckListInput/AddItem";
import Card from "./UI/Card";
import List from "./CheckListOutput/List";

function App() {
  let allItems = [
    {id: 1, data: 'eat'},
    {id: 2, data: 'sleep'},
    {id: 3, data: 'code'},
    {id: 4, data: 'bump nasties'},
  ];

  const [listItems, setListItems] = useState(allItems);

  const onNewListItemHandler = (newListItemInput) => {
    setListItems( (prevItems ) => {
      return [newListItemInput, ...prevItems];
    });
  }

  return (
    <div className="app_container">
      <Card className="app_spacer">
        <AddItem onAddThisToList={onNewListItemHandler} />
      </Card>
      <Card className="app_spacer">
        <List items={Array.from(listItems)}/>
      </Card>
    </div>
  );
}

export default App;
