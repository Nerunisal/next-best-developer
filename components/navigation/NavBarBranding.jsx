import {LogoSvg} from './../icons'
import Link from 'next/link'
function NavBarBranding({className, ...props}) {
    return (
        <Link href="/">
            <figure className='flex items-center gap-1'>
            <LogoSvg className="fill-teal-500 w-6"/>
            <figcaption>
                    <h1>Next Best Dev</h1>
                </figcaption>
            </figure>
        </Link>
      );
}

export default NavBarBranding;