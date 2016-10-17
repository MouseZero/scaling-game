const React = require('react')
const ReactDOM = require('react-dom')

module.exports = function (celestialBodyData, zoom) {
  ReactDOM.render(
    <Menu bodyData={celestialBodyData.bodies} zoom={zoom} />,
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
      className='dropdown-toggle btn btn-primary bigButton'
      type='button'
      data-toggle='dropdown'>
      Zoom To&nbsp;&nbsp;
      <span className="buttonDisplay glyphicon glyphicon-search" aria-hidden="true"></span>
    </button>
  )
}

function MenuDropdown (props) {
  return (
    <ul className='dropdown-menu'>
      {props.bodyData.map((x, i) =>
        <span key={i}>
          <Item data={x} bodyId={i} zoom={props.zoom} />
        </span>
      )}
    </ul>
  )
}

function Item (props) {
  return (
    <li onClick={() => {
      props.zoom(props.data.size, {})
    }}>{props.data.name}</li>
  )
}
