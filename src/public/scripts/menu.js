const React = require('react')
const ReactDOM = require('react-dom')
const curry = require('lodash.curry')

module.exports = function (celestialBodyData, zoom) {
  ReactDOM.render(
    <Menu bodyData={celestialBodyData.showcase} zoom={zoom} />,
    document.getElementById('react-navbar')
  )
}

function Menu (props) {
  return (
    <div className='dropdown'>
      <MenuButton />
      <MenuDropdown bodyData={props.bodyData} zoom={props.zoom} />
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
          <Item data={x.name} bodyId={i} zoom={props.zoom} />
        </span>
      )}
    </ul>
  )
}

function Item (props) {
  return (
    <li onClick={() => {
      console.log('you clicked')
    }}>{props.data}</li>
  )
}
