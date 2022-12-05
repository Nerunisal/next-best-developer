import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-4 text-indigo-800 font-bold ">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/frontend">FRONT END</Link>
        </li>
        <li>
          <Link href="/uiux">UI/UX</Link> 
        </li>
        <li>
          <Link href="/fullstack">FULL STACK</Link> 
        </li>
        <li>
          <Link href="/backend">BACK END</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;