import LoginButton from './LoginButton';
import GithubButton from './GithubButton';
import MobileMenuButton from './MobileMenuButton';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';
import {LogoSvg} from "./../icons";

function NavBar(){
    return(
        <nav className='p-2 shadow relative flex justify-between'>
            <NavBarBranding/>
            <NavBarLinks/>
            <div className='flex justify-end'>
             <LoginButton className='md:block text-right'/>
             <GithubButton className='md:block text-right'/>
            </div>
       
            <MobileMenuButton className="md:hidden"/>
        </nav>
    );

}

export default NavBar;



