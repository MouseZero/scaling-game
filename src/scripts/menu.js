const React = require('react')
const ReactDOM = require('react-dom')
const curry = require('lodash.curry')

module.exports = function (celestialBodyData, newScene) {
  const createScene = curry(newScene)(celestialBodyData)
  ReactDOM.render(
    <Menu bodyData={celestialBodyData.showcase} createScene={createScene} />,
    document.getElementById('react-navbar')
  )
}

function Menu (props) {
  return (
    <div className='dropdown'>
      <MenuButton />
      <MenuDropdown bodyData={props.bodyData} createScene={props.createScene} />
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
          <Item data={x.name} bodyId={i} createScene={props.createScene} />
        </span>
      )}
    </ul>
  )
}

function Item (props) {
  return (
    <li onClick={() => {
      props.createScene(props.bodyId)
    }}>{props.data}</li>
  )
}
