import React, { useState } from 'react'
import FoodInfo from '../components/FoodInfo'
import Hexagon from '../components/Hexagon'
import { categories, meal } from '../../mock/foods'
import LinearButton from '../components/LinearButton'
function HomePage() {
    const [expand, setExpand] = useState<boolean>(false)
    const [active, setActive] = useState<string>('all')
    return (
        <div>
            <div className='flex mx-auto cursor-pointer items-center w-[700px] justify-between'>
                {categories.map(e => (
                    <Hexagon onClick={() => setActive(e.name)} key={e.name} type={e.type} name={e.name} />
                ))}
            </div>
            <div className='w-[960px] mt-[50px] flex flex-col items-center mx-auto'>
                <div className='gap-[6px] grid grid-cols-4'>
                    {meal.filter(el => active !== 'all' ? el.category == active : true).slice(0, expand ? meal.length : 8).map(e => (
                        <FoodInfo title={e.title} url={e.url} />
                    ))}
                </div>
                {!expand && (
                    <div onClick={() => setExpand(true)} className='mt-5 mx-auto'>
                        <LinearButton name="記録をもっと見る" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage