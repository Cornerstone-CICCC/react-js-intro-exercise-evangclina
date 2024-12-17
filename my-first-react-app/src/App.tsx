import './App.css'
import Header from './Header'
import Info from './Info'
import Welcome from './Welcome'

function App() {

  return (
    <>
      <Header logoText="My First React App"/>
      <Welcome message="Hello!"/>
      <Info firstname="Evangelina" lastname="Vega" age={24} isStudent={true}/>
    </>
  )
}

export default App
