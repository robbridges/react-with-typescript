import React from "react";

const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = () => {
    console.log("I'm being dragged");
  };


  return ( 
    <div>
      <input onChange ={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponent;