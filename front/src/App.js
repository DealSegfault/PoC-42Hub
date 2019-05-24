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
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import marketDataService from './services/market-service'

import 'semantic-ui-css/semantic.min.css'
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import './App.css'

function App() {
  const [position, setPosition] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const result = await marketDataService.fetchPosition()
      setLoading(true)
    }
    fetchData()

    toast(
      {
          title: 'Info Toast',
          description: <p>This is a Semantic UI toast</p>
      },
      () => console.log('toast closed'),
      () => console.log('toast clicked')
  );
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        The wizard is running...
        <Divider />
        {loading && <BalanceComponent {...{ balance }} />}
        <Divider />
        {loading && <OrderComponent {...{ bids, orders }} />}
        {loading && <ProfitComponent {...{ balance, position, bids, orders }} />}

        <Divider />
        {loading && <PositionComponent {...{ position }} />}
      </header>
    </div>
  )
}

export default App
