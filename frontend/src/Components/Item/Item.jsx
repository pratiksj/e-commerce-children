import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img className='image-size' src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">{props.new}</div>
            <div className="item-price-old">{props.old}</div>
        </div>
    </div>
  )
}
