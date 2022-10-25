import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  updateOption = e => {
    const value = countryAndCapitalsList.filter(
      each => each.id === e.target.value,
    )
    this.setState({capital: value[0].country})
    const {capital} = this.state
    console.log(capital)
  }

  render() {
    const {capital} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="title">Countries And Capitals</h1>
          <div className="selectContainer">
            <select className="dropDown" onChange={e => this.updateOption(e)}>
              {countryAndCapitalsList.map(eachOption => (
                <option key={eachOption.id} value={eachOption.id}>
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="capital">{capital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
