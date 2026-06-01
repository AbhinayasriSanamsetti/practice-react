import Title from './components/title.jsx'
import About from './components/about.jsx'
import Clock from './components/time.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App(){
      return(
        <div>
          <Title />
          <About />
          <Clock />
        </div>
      )
}
export default App;