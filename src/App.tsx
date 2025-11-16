import { useState, useEffect } from 'react'

import './App.css'
import { Item, type ItemProps } from './components/item'
import { List } from './components/list'



function App() {
  const [tasks, setTasks] = useState<ItemProps[]>([])

useEffect (() => {
  setTasks(
    [
  {
     title: 'Příprava prezentace',
     description: 'Vytvořit prezentaci pro páteční meeting s klientem.'
  },
  {
     title: 'Kontrola e-mailů',
     description: 'Projít doručenou poštu a odpovědět na důležité zprávy.'
  },
  {
     title: 'Plánování kampaně',
     description: 'Naplánovat marketingovou kampaň na příští měsíc.'
  },
  {
     title: 'Testování aplikace',
     description: 'Otestovat nové funkce a nahlásit případné chyby.'
  }
  ]
  )

},[])

  

  return (
    <>
    <h1>Domácí úkol</h1>
    <Item title = 'Koupit svačinu'
    description='2 rohlíky a 20 deka vlašáku'
    done = {true}/>
    <List items={tasks} />
    </>
  )
}

export default App
