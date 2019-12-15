import * as React from '../dist'

React.render(<div className="container" style={{
  fontSize: '18px'
}} onClick={() => {
  console.log(1234)
}}>hello</div>, document.getElementById('app'))