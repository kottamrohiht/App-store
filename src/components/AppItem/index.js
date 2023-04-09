import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item

  return (
    <li className="appItemContainer">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name"> {appName} </p>
    </li>
  )
}

export default AppItem
