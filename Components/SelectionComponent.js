import React, { useState } from "react";

const SelectionComponent = ({
  //HOC component   ---> High order component  --> High order function
  lists = [],
  selectedIDs = [],
  onSelectionUpdate = () => {},
  itemComponent: Component,
  idKey = "id",
}) => {
  const [selections, setSelections] = useState(selectedIDs); //Hooks

  const onSelect = (id) => {
    let nextSelections = [...selections];
    if (selections.includes(id)) {
      nextSelections = selections.filter((_id) => _id !== id);
    } else nextSelections.push(id);
    setSelections(nextSelections);
    onSelectionUpdate(nextSelections);
  };

  return (
    <>
      {lists.map((item) => {
        const isSelected = selections.includes(item[idKey]);
        return (
          <Component
            key={`${item[idKey]}`}
            onSelection={() => onSelect(item[idKey])}
            isSelected={isSelected}
            item={item}
          />
        );
      })}
    </>
  );
};
export default SelectionComponent;
