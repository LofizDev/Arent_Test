import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import RecordCategory from '../components/RecordCategory'
import Chart from '../components/Chart'
import MyDiary from '../components/MyDiary'
import { diaries } from '../../mock/diaries'
import LinearButton from '../components/LinearButton'
function Records() {
    const [lastPage, setLastPage] = useState<number>(8)
    const dateType = ['日', '週', '月', '年']
    const [type, setType] = useState<string>('日')

    const [data, setData] = useState<{ data1: number[], data2: number[] }>({ data1: [], data2: [] })
    useEffect(() => {

        switch (type) {
            case '日':
                setData({ data1: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6], data2: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8] })
                break;
            case '週':
                setData({ data1: [2.0, 5.9, 2.5, 14.5, 48.4, 11.5, 25.2, 26.5, 43.3, 18.3, 13.9, 4.6], data2: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6] })
                break;
            case '月':
                setData({ data1: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6], data2: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8] })
                break;
            case '年':
                setData({ data1: [2.0, 5.9, 2.5, 54.5, 18.4, 11.5, 25.2, 26.5, 13.3, 18.3, 13.9, 12.6], data2: [12.0, 6.9, 9.5, 14.5, 38.4, 21.5, 25.2, 26.5, 12.3, 18.3, 13.9, 9.6] })
                break
            default:
                break;
        }
    }, [type])

    return (
        <Layout>
            <div className="flex my-[50px] lg:w-[960px] lg:px-0 px-3 w-full justify-between mx-auto">
                <div className='grid lg:grid-cols-3 gap-2 grid-cols-2'>
                    <RecordCategory
                        name="BODY RECORD"
                        description="自分のカラダの記録"
                        type="1"
                    />
                    <RecordCategory
                        name="MY EXERCISE"
                        description="自分の運動の記録"
                        type="2"
                    />
                    <RecordCategory name="MY DIARY" description="自分の日記" type="3" />
                </div>
            </div>
            <div className='lg:w-[960px] w-full lg:px-0 px-3 bg-[#2E2E2E] mx-auto '>
                <div className='px-5 flex items-center gap-1 py-3'>
                    <span className='font-inter text-[15px] text-white '>BODY <br /> RECORD</span>
                    <p className='text-white font-inter text-[15px] ml-2'>2021.05.21</p>
                </div>
                <Chart data={data} />
                <div className='flex p-5 gap-5'>
                    {dateType.map((date: string) => (
                        <span onClick={() => setType(date)}
                            className={`${type == date ? 'bg-primary-300 text-white' : 'bg-white text-primary-300'} w-[56px] cursor-pointer h-[24px] rounded-[50px] flex items-center justify-center`}>
                            {date}
                        </span>
                    ))}
                </div>
            </div>
            <div className='lg:w-[960px] w-full mt-[50px] mx-auto'>
                <h1 className='uppercase text-dark-500 text-[23px] '>my diary</h1>
                <div className='lg:grid-cols-4 grid md:px-0 px-3 mx-auto gap-4 grid-cols-2 md:grid-cols-3'>
                    {diaries.slice(0, lastPage).map(e => (
                        <MyDiary
                            date={e.date}
                            time={e.time}
                            content={e.content}
                        />
                    ))}
                </div>
                <div className='mx-auto mt-5 w-full  flex justify-center' onClick={() => setLastPage(lastPage + 8)}>
                    <LinearButton name='自分の日記をもっと見る' />
                </div>
            </div>
        </Layout>
    )
}

export default Records