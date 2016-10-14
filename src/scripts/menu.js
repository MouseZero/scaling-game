const React = require('react')
const ReactDOM = require('react-dom')

module.exports = function(celestialBodyData){
  console.log(celestialBodyData.rulers[0].name)
  ReactDOM.render(
    <Menu bodyData={celestialBodyData.showcase} test='test prop' />,
    document.getElementById('react-navbar')
  )
}

function Menu(props){
  return(
    <div>
      <MenuButton />
      <MenuDropdown bodyData={props.bodyData} />
    </div>
  )
}

function MenuButton(){
  return (
    <div>
      Menu Button
    </div>
  )
}

function MenuDropdown(props){
  return(
    <div>
      Menu Dropdown
    </div>
  )
}
