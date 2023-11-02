import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

import { plantList } from '../datas/plantList'

function ShoppingList() {
    const categoryList = plantList.reduce((categories, plant) => {
        if (categories.indexOf(plant.category) === -1) {
            categories.push(plant.category);
        }
        return categories;
    }, []);

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categoryList.map((category) => (
                    <li key={category}> {category} </li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
                ))}
            </ul> 
        </div>
    )
}

export default ShoppingList