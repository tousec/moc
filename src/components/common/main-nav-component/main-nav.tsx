/*
|-----------------------------------------
| setting up Header for the App
| @author: AI Assistant & Toufiquer Rahman
| @copyright: moc, June, 2025
|-----------------------------------------
*/

'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils' // Make sure you have this utility from shadcn/ui

// UI Components from shadcn/ui
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

// Icons
import { Menu } from 'lucide-react'
import navData from '../nav/nav-data'

// Your NavImage component - slightly modified for flexibility
const NavImage = ({
  width = 120,
  height = 120,
  className = '',
}: {
  className?: string
  width?: number
  height?: number
}) => {
  return (
    <Image
      src="/black-red-logo.png"
      alt="Stars' English Centre Logo"
      width={width}
      height={height}
      className={cn('h-auto dark:invert', className)} // `dark:invert` can make it visible in dark mode
      priority // Add priority to the logo as it's LCP (Largest Contentful Paint)
    />
  )
}



// The main Header Component
export function HeaderMainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        {/* ======== Logo ======== */}
        <Link href="/" className="mr-4 flex items-center">
          <NavImage />
          <span className="sr-only">Stars English Centre</span>
        </Link>

        {/* ======== Desktop Navigation (Mega Menu) ======== */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* --- About Mega Menu --- */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{navData.about.groupTitle}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <NavImage width={80} height={80} />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {navData.about.fullName}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {navData.about.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {navData.about.links.map((link) => (
                    <ListItem key={link.id} href={link.url} title={link.title}>
                      {link.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* --- Services Mega Menu --- */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{navData.services.groupTitle}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navData.services.data.map((service) => (
                    <ListItem key={service.title} href={service.href} title={service.title}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* --- Other Simple Links --- */}
            {navData.othersLink.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ======== Mobile Navigation (Sheet/Drawer) ======== */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavImage />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col space-y-2">
                {/* --- Accordion for complex items --- */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="about">
                    <AccordionTrigger>{navData.about.groupTitle}</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {navData.about.links.map((link) => (
                        <MobileLink
                          key={link.id}
                          href={link.url}
                          onOpenChange={setIsMobileMenuOpen}
                        >
                          {link.title}
                        </MobileLink>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="services">
                    <AccordionTrigger>{navData.services.groupTitle}</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {navData.services.data.map((service) => (
                        <MobileLink
                          key={service.title}
                          href={service.href}
                          onOpenChange={setIsMobileMenuOpen}
                        >
                          {service.title}
                        </MobileLink>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* --- Other simple links --- */}
                {navData.othersLink.map((link) => (
                  <MobileLink
                    key={link.id}
                    href={link.url}
                    onOpenChange={setIsMobileMenuOpen}
                    className="py-2 text-base"
                  >
                    {link.title}
                  </MobileLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// Reusable component for list items in the mega menu
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

// Reusable component for mobile links to close the sheet on click
interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange: (open: boolean) => void
  className?: string
}

function MobileLink({ href, onOpenChange, className, children }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange(false)}
      className={cn('text-muted-foreground transition-colors hover:text-foreground', className)}
    >
      {children}
    </Link>
  )
}