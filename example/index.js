import * as React from '../dist'

class Example extends React.Component {
  render() {
    return <div className="container2">
      hello zewail
    </div>
  }
}

function Example2 (props) {
  return <div className={props.className} style={props.style}>
    hello zewail2
    </div>
}

React.render(<div>
  <Example />
  <Example2 className="container" style={{ fontSize: '18px' }} />
</div>, document.getElementById('app'))