import Backdrop from './component/Backdrop';
import Todo from './component/Todo';
import Modal from './component/Modal';
function App() {
  return (<div>
    <h1>My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Master React'/>
    <Todo text='Explore the full React course'/>
    <Modal />
    <Backdrop />
  </div>
  );
}

export default App;
