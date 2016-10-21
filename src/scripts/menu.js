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
      <span className='glyphicon glyphicon-search' aria-hidden='true' />
    </button>
  )
}

function MenuDropdown (props) {
  return (
    <div className='dropdown-menu col-md-3 col-sm-12 col-xs-12'>
      {props.bodyData.reverse().map((x, i) =>
        <Item key={i} data={x} bodyId={i} zoom={props.zoom} />
      )}
    </div>
  )
}

function Item (props) {
  return (
    <div className='col-md-12 col-sm-6 col-xs-6' onClick={() => {
      props.zoom(props.data.size, {})
    }}>{props.data.name}</div>
  )
}
