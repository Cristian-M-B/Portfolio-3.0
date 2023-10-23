import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'
import languages from '../../public/locale/languages'
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'


export default function NavBar() {
    const router = useRouter()
    const { locale } = router
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Navbar
            disableAnimation
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className='sm:hidden' justify='start'>
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent className='hidden sm:flex' justify='start'>
                {Object.keys(languages.en.nav).map(title => (
                    <NavbarItem key={title}>
                        <Link
                            to={title}
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                            className='cursor-pointer hover:font-bold'
                        >
                            {languages[locale].nav[title]}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </NavbarContent>
            <NavbarMenu>
                {Object.keys(languages.en.nav).map(title => (
                    <NavbarMenuItem key={title}>
                        <Link
                            to={title}
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                            onClick={() => setIsMenuOpen(false)}
                            className='cursor-pointer hover:font-bold'
                        >
                            {languages[locale].nav[title]}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
