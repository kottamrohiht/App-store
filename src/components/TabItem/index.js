import './index.css'

const TabItem = props => {
  const {item, isActive, changeTabItem} = props
  const {displayText} = item

  const onClickTabItem = () => {
    changeTabItem(item.tabId)
  }

  const activeTab = isActive ? 'active-style' : ''

  return (
    <li onClick={onClickTabItem} className="tabItem">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`displayText ${activeTab}`}
      >
        {' '}
        {displayText}{' '}
      </button>
    </li>
  )
}

export default TabItem
