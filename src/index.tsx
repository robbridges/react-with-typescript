import ReactDom from 'react-dom';
//import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch'
import EventComponent from './events/EventComponent';
//import UserSearch from './classes/UserSearch'

const App = () => {
  return ( <div>
    <EventComponent />
  </div>
  );
};

ReactDom.render(
  <App />,
  document.querySelector('#root')
)