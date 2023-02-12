import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.map(eachCurrency => ({
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      usdValue: eachCurrency.usd_value,
    }))
    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="cryptocurrencies-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency"
        />
        <div className="item-container">
          <div className="title-container">
            <h1>Coin Type</h1>
            <div className="usd-container">
              <h1>USD</h1>
              <h1 className="EURO">EURO</h1>
            </div>
          </div>
          {currencyList.map(eachCurrency => (
            <CryptocurrencyItem
              currencyDetails={eachCurrency}
              key={eachCurrency.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
