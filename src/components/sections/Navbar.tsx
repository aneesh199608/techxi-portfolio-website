import * as React from "react"
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Website Application",
//     href: "/services",
//     description:
//       "Custom Web App, E-Commerce, Domain, Hosting",
//   },
//   {
//     title: "Mobile Application",
//     href: "/services",
//     description:
//       "Android, iOS, Flutter, Hybrid/Cross Platform, Porting, Streaming",
//   },
//   {
//     title: "Custom Software",
//     href: "/services",
//     description:
//       "Blockchain, WinForm, Java, Windows Service/WPF/WCF So, Testing",
//   },
//   {
//     title: "IT Solutions",
//     href: "/services",
//     description: "GIS, Web Security, Business Intelligence, RPA, Voice Technology, Digital Marketing",
//   },
//   {
//     title: "Salesforce Solutions",
//     href: "/services",
//     description:
//       "Salesforce Development, Support, Customization, Consulting.",
//   },
//   {
//     title: "HR Hiring",
//     href: "/services",
//     description:
//       "Hiring for PHP, Java, .NET, Front-end, PMs, QAs",
//   },
// ]

export function Navbar() {

  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-4 right-4 sm:left-8 sm:right-8 z-50 justify-center pointer-events-none">
    <nav className="
        max-w-[1200px] w-full 
        mx-auto px-4
        backdrop-blur bg-black/80 border border-white/20
        rounded-2xl
        pointer-events-auto
        "
        >
      <div className="flex items-center justify-between p-2 sm:p-4">

        <div className="flex items-center space-x-2">
          <Logo className="w-4 h-auto sm:w-6" />
          <Link to="/" className="sm:text-xl text-lg font-semibold">
            TechXi
          </Link>
        </div>

        <nav className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/projects"
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md
                          bg-cover bg-center
                          bg-[url('../../src/assets/callbot.png')]"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Explore All Projects
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Projects across SaaS, Healthcare, eCommerce and more.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/projects/freezebooking" title="Freeze Booking">
                      Elevating Your Journey.
                    </ListItem>
                    <ListItem href="/projects/callbot" title="CallBot">
                      Automate Calls, WhatsApp Messages, and Emails Effortlessly..
                    </ListItem>
                    <ListItem href="/projects/cliniq" title="ClinIQ Healthcare">
                      Physician and Patient-centric Digital Health Platform
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#">Components</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">Documentation</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#">Blocks</a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleHelpIcon />
                          Backlog
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleIcon />
                          To Do
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="flex-row items-center gap-2">
                          <CircleCheckIcon />
                          Done
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-4 w-64">
                <nav className="flex flex-col space-y-2">
                  <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                  <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
                  <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                  <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                  <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </nav>
                <Button asChild>
                    <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link>
                  </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </div>
  </nav>
  </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
