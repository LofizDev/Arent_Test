import React from 'react'
interface IProps {
    title: string,
    url: string
}
function FoodInfo(props: IProps) {
    const { title, url } = props
    return (
        <div className='w-full relative h-full'>
            <img src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg" alt="food" />

        </div>
    )
}

export default FoodInfo