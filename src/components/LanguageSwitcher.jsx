import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Select, SelectItem } from '@nextui-org/react'
import { ES } from 'country-flag-icons/react/3x2'
import { GB } from 'country-flag-icons/react/3x2'

export default function LanguageSwitcher() {
    const router = useRouter()
    const { locale } = router
    const [value, setValue] = useState(new Set([locale]))

    const options = [
        {
            locale: 'es',
            language: 'ES',
            flag: <ES title='Spain' className='w-6 h-4' />
        },
        {
            locale: 'en',
            language: 'EN',
            flag: <GB title='Great Britain' className='w-6 h-4' />
        }
    ]

    return (
        <Select
            size='xs'
            aria-label='Idiomas'
            selectedKeys={value}
            onSelectionChange={setValue}
            disallowEmptySelection={true}
            variant='bordered'
            className='w-24'
            items={options}
            renderValue={(items) => {
                return items.map((item) => (
                    <div key={item.key} className='flex items-center gap-1'>
                        {item.data.flag}
                        <p>{item.data.language}</p>
                    </div>
                ))
            }}
        >
            {(option) => (
                <SelectItem
                    key={option.locale}
                    value={option.locale}
                    textValue={option.language}
                    as={Link}
                    href='/'
                    locale={option.locale}
                    onChange={() => router.refresh()}
                >
                    <div className='flex items-center gap-1'>
                        {option.flag}
                        <p>{option.language}</p>
                    </div>
                </SelectItem>
            )}
        </Select>
    )
}
