
import './App.css'
import { Item } from './components/item'

function App() {
  

  return (
    <>
    <h1>Domácí úkol</h1>
    <Item name = 'Koupit svačinu'
    description='2 rohlíky a 20 deka vlašáku'
    done = {true}/>
    </>
  )
}

export default App
