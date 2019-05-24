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

// export default ButtonExampleEmphasisShorthand
const TablePosition = props => {
  const { instrument, size, averagePrice, profitLoss, realizedPl } = props.data
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Instrument</Table.HeaderCell>
          <Table.HeaderCell>Size USD</Table.HeaderCell>
          {/* <Table.HeaderCell>Size BTC</Table.HeaderCell> */}
          <Table.HeaderCell>Average Price</Table.HeaderCell>
          <Table.HeaderCell>UPnL</Table.HeaderCell>
          <Table.HeaderCell>RPnL</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{instrument}</Table.Cell>
          <Table.Cell singleLine>{size * 10}</Table.Cell>
          <Table.Cell>{averagePrice}</Table.Cell>
          <Table.Cell>{profitLoss}</Table.Cell>
          <Table.Cell>{realizedPl}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
const MessageComponent = (props) => {
  const handleDismiss = () => {}
  return (
    <SemanticToastContainer />
    
  )

  // <Message onDismiss={this.handleDismiss} 
  // header='Welcome back!' 
  // content=' We keep live update and track record of the strategy. We are not financial advisors'/>)
}

const BalanceComponent = props => {
  var balance = props.balance.BTC
  return (
    <div>
      <Message>
        <Statistic label="Balance" value={balance} />
      </Message>
    </div>
  )
}

const PositionComponent = props => {
  return (
    <div>
      <TablePosition data={props.position} />
      <Divider />
    </div>
  )
}

const ProfitComponent = (props) => {
  const { instrument, size, averagePrice, profitLoss, realizedPl } = props.position
  const bestBid = props.bids[0]
  const bestAsk = props.bids[1]

  const estimatedShortPnL = ((size / averagePrice) - (size / bestBid)) * bestBid
  const estimatedLongPnL = ((size / bestAsk) - (size / averagePrice)) * bestAsk

  return (
    <div>
      <Container >
        <Grid>
          <Grid.Row>
            <Statistic  color="green">
              <Statistic.Value>{estimatedLongPnL}</Statistic.Value>
              <Statistic.Label>Long Profit</Statistic.Label>
            </Statistic>
            <Statistic  color="gray">
              <Statistic.Value>{profitLoss}</Statistic.Value>
              <Statistic.Label>Current</Statistic.Label>
            </Statistic>
            <Statistic  color="red">
              <Statistic.Value>{estimatedShortPnL}</Statistic.Value>
              <Statistic.Label>Short profit</Statistic.Label>
            </Statistic>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}
const OrderComponent = props => {
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <Statistic  color="green">
              <Statistic.Value>{props.bids[1]}</Statistic.Value>
              <Statistic.Label>Long</Statistic.Label>
            </Statistic>
            <Statistic  color="gray">
              <Statistic.Value>{props.bids[1] - props.bids[0]}</Statistic.Value>
              <Statistic.Label>Spread Short</Statistic.Label>
            </Statistic>
            <Statistic  color="red">
              <Statistic.Value>{props.bids[0]}</Statistic.Value>
              <Statistic.Label>Short</Statistic.Label>
            </Statistic>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}
function App() {
  const [position, setPosition] = useState([])
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const [balance, setBalance] = useState([])
  const [bids, setBids] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await marketDataService.fetchPosition()
      const resOrders = await marketDataService.fetchOrders()
      const resBalance = await marketDataService.fetchBalance()
      const bestBid = resOrders.reduce((a, v) => {
        return v.side === 'buy' && v.price > a ? v.price : a
      }, 0)

      const bestAsk = resOrders.reduce((a, v) => {
        return v.side === 'sell' && v.price < a ? v.price : a
      }, 100000000)

      console.log('best', bestBid, bestAsk)
      console.log(result, resOrders, resBalance)
      setPosition(result)
      setOrders(resOrders)
      setBalance(resBalance)
      setBids([bestAsk, bestBid])

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
       { <MessageComponent />
         
        }
        <TradingViewWidget
          symbol="BTCUSD"
          theme={Themes.DARK}
          locale="fr"
          autosize
          heigth={'3000'}
          width={"500"}

        />
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
