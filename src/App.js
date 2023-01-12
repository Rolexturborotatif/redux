import {useSelector} from 'react-redux'
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask';
import Filtred from './Components/Filtred';



function App() {
  const Todos = useSelector(state=> state.Todo.todos)
  const Filtre = useSelector(state => state.Todo.Filtre)

  return (
    <div className="App">
      <AddTask />
      <TodoList Todos={(Filtre=='Done')? Todos.filter(el=> el.isDone== true): (Filtre =='UnDone')? Todos.filter(el=> el.isDone== false) : Todos}/>
      <hr/>
      <Filtred/>
    </div>
  );
}

export default App;
