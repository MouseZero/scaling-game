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
        <Item data={x.name} key={i} />
      )}
    </ul>
  )
}

function Item (props) {
  return (
    <li>{props.data}</li>
  )
}
