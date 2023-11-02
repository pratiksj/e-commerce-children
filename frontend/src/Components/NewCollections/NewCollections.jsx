import './NewCollection.css';
import new_Collection from '../assets/new-collections'
import {Item}from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className="new-collections" >
<h1>New Collections</h1>
<hr/>
<div className="collections">{new_Collection.map((item, i)=>{ return <Item key={i} id={item.id} name={item.name} image={item.image} new={item.new} old={item.old}/>})}</div>

    </div>
  )
}
