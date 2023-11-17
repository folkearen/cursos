import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
//import Ejemplo1 from './hooks/ejemplo1';
//import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Aca colocamos nuestro componente greeting */}
        {/* <GreetingF name="Alan"/> */}
        {/* <TaskListComponent/> */}
        {/* Ejmplos de hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        <Ejemplo4 nombre='Alan'>
          <h3>
            Estos es un prop.childrente
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
