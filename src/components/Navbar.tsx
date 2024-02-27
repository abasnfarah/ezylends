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
    <NavigationMenu className="sticky h-14 inset-x-0 top-0 z-30 border-b backdrop-blur-lg transition-all mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="flex justify-between items-center w-full">
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

        <NavigationMenuList className="items-center space-x-4 flex justify-between">
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
