import { useState } from 'react'

import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

import { plantList } from '../datas/plantList'

function ShoppingList({ cart, updateCart }) {
    const [categorySelected, updateCategorySelected] = useState("")

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div className='lmj-shopping-list'>
            <Categories categorySelected={categorySelected} updateCategorySelected={updateCategorySelected} />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => 
                    !categorySelected || categorySelected === category? (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ) : null )}
            </ul> 
        </div>
    )
}

export default ShoppingList