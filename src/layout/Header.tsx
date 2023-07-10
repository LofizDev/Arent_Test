import Logo from '../../public/assets/icons/logo.svg';

function Header() {
    return (<div className="h-[84px] w-full bg-dark-500 m-auto">
        <div className='container h-full m-auto'>
            <img className='h-[64px] w-[144px]' src={Logo}/>
            
        </div>
        </div>)
}

export default Header