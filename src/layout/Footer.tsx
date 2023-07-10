import React from 'react';

const FOOTER_DATA = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ'];

function Footer() {
    return (
        <div className='h-[128px] bg-dark-600'>
            <div className='w-3/4 h-full text-light m-auto flex items-center'>
                {
                    FOOTER_DATA.map((item, index) => {
                        return <a key={index} href='#' className='mr-10'>
                            {item}
                        </a>
                    })
                }
            </div>
        </div>
    )
}

export default Footer