interface ChildProps {
  color: string;
  onClick: () => void; 
}

export const Child = ({color, onClick}: ChildProps) => {
  return <div>
    { color }
    <button onClick={onClick}>
      Click me
    </button>
    </div>
};

// the below is more useful as we are specifically telling React that this is a function component, and gain access to the properties of Function components.
export const ChildAsFC: React.FC<ChildProps> = ( { color, onClick }) => {
  return <div>
    {color}
    <button onClick={onClick}>
      Click me
    </button>
    </div>;
};

