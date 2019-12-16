import * as React from '../dist'

class Example extends React.Component {
  render() {
    return <div>
      hello zewail
    </div>
  }
}

function Example2 () {
  return <div>
    hello zewail2
    </div>
}

React.render(<Example2 />, document.getElementById('app'))