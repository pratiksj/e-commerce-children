import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

export const ShopCategory = () => {
  const {all_Product} = useContext(ShopContext)
  return (
    <div className="shop-category"></div>
  )
}
