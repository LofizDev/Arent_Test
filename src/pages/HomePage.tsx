import React, { useState } from 'react'
import FoodInfo from '../components/FoodInfo'
import Hexagon from '../components/Hexagon'
import { categories, meal } from '../../mock/foods'
import LinearButton from '../components/LinearButton'
import Chart from '../components/Chart'
import Layout from '../layout'
function HomePage() {
    const [expand, setExpand] = useState<boolean>(false)
    const [active, setActive] = useState<string>('all')
    return (
        <Layout>
            <div>
                <Chart />
                <div className='flex mx-auto cursor-pointer items-center w-[700px] justify-between mt-10'>
                    {categories.map(e => (
                        <Hexagon onClick={() => setActive(e.name)} key={e.name} type={e.type} name={e.name} />
                    ))}
                </div>
                <div className='lg:w-[960px] w-full mt-[50px] flex flex-col md:px-0 px-4 items-center mx-auto'>
                    <div className='gap-[6px] grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3'>
                        {meal.filter(el => active !== 'all' ? el.category == active : true).slice(0, expand ? meal.length : 8).map(e => (
                            <FoodInfo key={e.url} title={e.title} url={e.url} />
                        ))}
                    </div>
                    {!expand && (
                        <div onClick={() => setExpand(true)} className='mt-5 mx-auto'>
                            <LinearButton name="記録をもっと見る" />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default HomePage