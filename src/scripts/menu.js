const React = require('react')
const ReactDOM = require('react-dom')

module.exports = function (celestialBodyData) {
  console.log(celestialBodyData.rulers[0].name)
  ReactDOM.render(
    <Menu bodyData={celestialBodyData.showcase} test='test prop' />,
    document.getElementById('react-navbar')
  )
}

function Menu (props) {
  return (
    <div className='dropdown'>
      <MenuButton />
      <MenuDropdown bodyData={props.bodyData} />
    </div>
  )
}

function MenuButton () {
  return (
    <button
      className='dropdown-toggle btn btn-primary'
      type='button'
      data-toggle='dropdown'>
      Button
    </button>
  )
}

function MenuDropdown (props) {
  return (
    <ul className='dropdown-menu'>
      {props.bodyData.map((x, i) =>
        <span key={i}>
          { console.log('key ' + i) }
          <Item data={x.name} bodyId={i} />
        </span>
      )}
    </ul>
  )
}

function Item (props) {
  return (
    <li onClick={testCallback(props.bodyId)}>{props.data}</li>
  )
}

function testCallback (string) {
  return () => {
    console.log('pressed ' + string)
  }
}
