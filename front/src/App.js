import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import {
  Button,
  Divider,
  Container,
  Header,
  Table,
  Rating,
  Statistic,
  Message,
  Grid,
  GridRow
} from 'semantic-ui-react'

// import marketDataService from './services/market-service'

import 'semantic-ui-css/semantic.min.css'
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import './App.css'

function App() {
  const [position, setPosition] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // const result = await marketDataService.fetchPosition()
      setLoading(true)
    }
    fetchData()

    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        The wizard is running...
        <Divider />
        {/* {loading && <BalanceComponent {...{ balance }} />} */}

      </header>
    </div>
  )
}

export default App
