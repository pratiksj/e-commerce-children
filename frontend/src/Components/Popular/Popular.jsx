import './Popular.css'
import data_Product from '../assets/data'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular in Parents</h1>
        <hr/>
        <div className="popular-item">
{data_Product.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new={item.new} old={item.old}/> })}

        </div>
    </div>
  )
}
