import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    number: number,
}

function NoticeNumber({ children, number }: Props) {
    return (<div className="relative">
        {children}
        <div className="absolute bg-primary-500 h-[16px] w-[16px] rounded-full flex justify-center items-center text-[10px] top-0 -right-1/4">
                {number}
            </div>
    </div>)
}

export default NoticeNumber;