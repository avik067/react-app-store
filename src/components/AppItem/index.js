import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="item-container">
      <img src={imageUrl} className="img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
