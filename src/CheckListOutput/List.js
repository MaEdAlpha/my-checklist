import React from "react";

import ListItem from "./ListItem";
import Card from "../UI/Card";

const List = (props) => {
  return (
    <Card>
      {props.items.map((item) => {
        return <ListItem key={item.id} data={item.data} />;
      })}
    </Card>
  );
};

export default List;
