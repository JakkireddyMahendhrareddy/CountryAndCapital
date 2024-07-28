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

class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  changeCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state
    const result = countryAndCapitalsList.find(
      each => each.id === activeCapital,
    )

    return result.country
  }

  render() {
    const {activeCapital} = this.state
    const answer = this.getCountry(activeCapital)

    return (
      <div className="container">
        <div className="inner-container">
          <h1>Country and Capitals</h1>
          <select value={activeCapital} onChange={this.changeCapital}>
            {countryAndCapitalsList.map(eachCapital => (
              <option value={eachCapital.id} key={eachCapital.id}>
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>{answer}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
