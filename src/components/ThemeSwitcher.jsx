import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/react'
import { BsSun, BsMoonFill } from 'react-icons/bs'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            variant='bordered'
            onPress={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
        >
            {theme === 'dark'
                ? <BsSun size={25} />
                : <BsMoonFill size={25} />
            }
        </Button>
    )
}
