import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .post('/get-data')
        .then((d) => this.setState({ data: d.data }))
        .catch(console.log)
    }, 1000)
  }

  getBG(v) {
    if (v < 0) return `rgba(255, 140, 0, ${Math.abs(v)}`
    if (v > 0) return `rgba(0, 0, 0, ${Math.abs(v)}`
    return 'rgb(255, 255, 255)'
  }

  getColor(v) {
    if (v > 0.5) return `#bbb9b9`
    return '#222222'
  }

  getRow(e, n) {
    return <div style={{ background: this.getBG(e[`Param${n}`]), color: this.getColor(e[`Param${n}`]) }}>{e[`Param${n}`]}</div>
  }

  render() {
    return (
      <div className="Main">
        <div className="entities">
          {this.state.data.map((e) => (
            <div key={e.id} className="entity">
              <div>{e.id}</div>
              {this.getRow(e, 1)}
              {this.getRow(e, 2)}
              {this.getRow(e, 3)}
              {this.getRow(e, 4)}
              {this.getRow(e, 5)}
              {this.getRow(e, 6)}
              {this.getRow(e, 7)}
              {this.getRow(e, 8)}
              {this.getRow(e, 9)}
              {this.getRow(e, 10)}
              {this.getRow(e, 11)}
              {this.getRow(e, 12)}
              {this.getRow(e, 13)}
              {this.getRow(e, 14)}
              {this.getRow(e, 15)}
              {this.getRow(e, 16)}
              {this.getRow(e, 17)}
              {this.getRow(e, 18)}
              {this.getRow(e, 19)}
              {this.getRow(e, 20)}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

if (document.getElementById('Main')) ReactDOM.render(<Main />, document.getElementById('Main'))
