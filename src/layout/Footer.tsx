
const FOOTER_DATA = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ'];

function Footer() {
    return (
        <div className='h-[128px] bg-dark-600 mt-10'>
            <div className=' md:w-11/12 w-3/4 h-full text-light m-auto flex items-center flex-wrap'>
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