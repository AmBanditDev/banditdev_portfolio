import React from 'react'

type TitleProps = {
    title: string
}

const TitleComponent = ({ title }: TitleProps) => {
    return (
        <h2
            className='text-lg md:text-xl text-title font-semibold'
            data-aos="fade-up"
            data-aos-duration={1000}
        >
            {title}
        </h2>
    )
}

export default TitleComponent