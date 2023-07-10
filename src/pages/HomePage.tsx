import React, { useState } from 'react'
import FoodInfo from '../components/FoodInfo'
import Hexagon from '../components/Hexagon'
import { categories, meal } from '../../mock/foods'
function HomePage() {
    const [active, setActive] = useState<string>('all')
    return (
        <div>
            <div className='flex items-center w-[700px] justify-between'>
                {categories.map(e => (
                    <Hexagon onClick={() => setActive(e.name)} key={e.name} type={e.type} name={e.name} />
                ))}
            </div>
            <div className='w-[960px] mx-auto gap-[6px] grid grid-cols-4'>
                {meal.filter(el => active !== 'all' ? el.category == active : true).map(e => (
                    <FoodInfo title={e.title} url={e.url} />
                ))}

            </div>
        </div>
    )
}

export default HomePage