import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

let agr = []
for (let i = 0, n = 20; i < n; i++) agr.push('sum')

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], agr }
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .post('/get-data')
        .then((d) => this.setState({ data: d.data }))
        .catch(console.log)
    }, 333)
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

  aggregation(e, n) {
    let agr = this.state.agr
    agr[n - 1] = e.target.value
  }

  getAgrData(n) {
    let typeAgr = this.state.agr[n - 1]
    let a = []
    switch (typeAgr) {
      case 'sum':
        a = this.state.data.map((e) => e[`Param${n}`])
        return a.length ? a.reduce((a, b) => a + b).toFixed(2) : ''
      case 'max':
        a = this.state.data.map((e) => e[`Param${n}`])
        return a.length ? Math.max.apply(null, a).toFixed(2) : ''
      case 'min':
        a = this.state.data.map((e) => e[`Param${n}`])
        return a.length ? Math.min.apply(null, a).toFixed(2) : ''
      case 'avg':
        a = this.state.data.map((e) => e[`Param${n}`])
        return a.length ? (a.reduce((a, b) => a + b) / a.length).toFixed(2) : ''
      default:
        return ''
    }
  }

  getHtmlAgr(n) {
    return (
      <div>
        {this.getAgrData(n)}
        <select onChange={(e) => this.aggregation(e, n)}>
          <option value="sum" defaultValue="sum">
            sum
          </option>
          <option value="min">min</option>
          <option value="max">max</option>
          <option value="avg">avg</option>
        </select>
      </div>
    )
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
          <div className="entity">
            <div>Итого:</div>
            {this.getHtmlAgr(1)}
            {this.getHtmlAgr(2)}
            {this.getHtmlAgr(3)}
            {this.getHtmlAgr(4)}
            {this.getHtmlAgr(5)}
            {this.getHtmlAgr(6)}
            {this.getHtmlAgr(7)}
            {this.getHtmlAgr(8)}
            {this.getHtmlAgr(9)}
            {this.getHtmlAgr(10)}
            {this.getHtmlAgr(11)}
            {this.getHtmlAgr(12)}
            {this.getHtmlAgr(13)}
            {this.getHtmlAgr(14)}
            {this.getHtmlAgr(15)}
            {this.getHtmlAgr(16)}
            {this.getHtmlAgr(17)}
            {this.getHtmlAgr(18)}
            {this.getHtmlAgr(19)}
            {this.getHtmlAgr(20)}
          </div>
        </div>
      </div>
    )
  }
}

if (document.getElementById('Main')) ReactDOM.render(<Main />, document.getElementById('Main'))
