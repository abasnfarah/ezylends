'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <NavigationMenu className="sticky inset-x-0 top-0 z-30 mx-auto h-14 w-full max-w-screen-2xl border-b px-2.5 backdrop-blur-lg transition-all md:px-20">
      <div className="flex w-full items-center justify-between">
        <Link href="/" passHref>
          <div
            className={buttonVariants({
              size: 'lg',
              variant: 'ghost',
              className: 'text-2xl'
            })}
          >
            EzyLends
          </div>
        </Link>

        <NavigationMenuList className="flex items-center justify-between space-x-4">
          <ModeToggle className="hidden sm:flex" />
          <NavigationMenuItem>
            <Link
              href="https://www.linkedin.com/company/ezylendz/about/"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}

export default Navbar
