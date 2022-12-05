import {LogoSvg} from './../icons'

function NavBarBranding({className, ...props}) {
    return (
        <figure className='flex items-center gap-1'>
        <LogoSvg className="fill-teal-500 w-6"/>
        <figcaption>
            <h1>Next Best Dev</h1>
        </figcaption>
    </figure>
      );
}

export default NavBarBranding;