
import './App.css'
import { Item, type ItemProps } from './components/item'
import { List } from './components/list'

import type { ItemData } from './components/item'

const tasks: ItemData[] = [
  {
     title: 'Příprava prezentace',
     description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
     done: true
  },
  {
     title: 'Kontrola e-mailů',
     description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
     done: false
    },
    {
      title: 'Plánování kampaně',
      description: 'Naplánovat marketingovou kampaň na příští měsíc.',
      done: false
    },
    {
      title: 'Testování aplikace',
      description: 'Otestovat nové funkce a nahlásit případné chyby.',
      done: false
  }
]


function App() {
  

  

  return (
    <>
    <h1>Domácí úkol</h1>
    <Item title = 'Koupit svačinu'
    description='2 rohlíky a 20 deka vlašáku'
    done = {true}/>
    <List title='Úkoly' items={tasks} />
    </>
  )
}

export default App
