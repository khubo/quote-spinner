const logUpdate = require('log-update')

class Spinner {
  constructor (quotes, frameTime = 800) {
    this._quotes = quotes
    this._frameTime = frameTime
    this.frames = [' ']
  }

  start () {
    let i = 1
    for (let quote of this._quotes) {
      for (let j = 0; j < quote.length; j++) {
        this.frames[i] = this.frames[i - 1] + quote[j]
        i++
      }
      this.frames[i++] = ' '
    }

    i = 0
    this.timer = setInterval(() => {
      let frame = this.frames[i = ++i % this.frames.length]
      logUpdate(frame)
    }, this._frameTime)
  }

  stop () {
    clearInterval(this.timer)
    logUpdate(' ')
  }
}

module.exports = Spinner
