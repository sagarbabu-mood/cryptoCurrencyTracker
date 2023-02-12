import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  console.log(currencyDetails)
  return (
    <li>
      <div className="list-item-container">
        <div className="list-title-container">
          <div className="logo-container">
            <img
              src={currencyLogo}
              alt={currencyName}
              className="currency-logo"
            />
            <p>{currencyName}</p>
          </div>
          <div className="usd-container">
            <div className="usd-value-container">
              <p className="usd">{usdValue}</p>
            </div>
            <p className="EURO">{euroValue}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
