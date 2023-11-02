import { plantList } from '../datas/plantList'

import '../styles/Categories.css'

function Categories({ categorySelected, updateCategorySelected }) {
    const categoryList = plantList.reduce((categories, plant) => {
        if (categories.indexOf(plant.category) === -1) {
            categories.push(plant.category);
        }
        return categories;
    }, []);

    return (
        <div className='lmj-categories'>
            <select
                value={categorySelected}
                onChange={(e) => updateCategorySelected(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=""> Aucune </option>
                {categoryList.map((categ) => (
                    <option key={categ} value={categ}> {categ} </option>
                ))}
            </select>
            <button onClick={() => updateCategorySelected("")}>Réinitialiser</button>
        </div>
    )
}

export default Categories