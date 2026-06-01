import AppName from "./components/AppName";
import ToDo from "./components/addtodo";
import ToDo2 from "./components/addtodo2";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App (){
  return <center class="todo-list-container">
    <AppName />
    <ToDo />
    <ToDo2 />

  </center>
}
export default App;