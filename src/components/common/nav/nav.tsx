/*
|-----------------------------------------
| setting up NavComponent for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import TabletNav from './tablet-nav'
import MobileNav from './mobile-nav'

const NavComponent = () => {
  return (
    <div className="w-full bg-white bg-opacity-60 md:bg-opacity-40 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl flex flex-col px-4">
        <TabletNav />
        <MobileNav />
      </div>
    </div>
  )
}
export default NavComponent
