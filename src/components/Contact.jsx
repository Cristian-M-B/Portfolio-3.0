import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser'
import languages from '../../public/locale/languages'
import { Input, Textarea, Button } from '@nextui-org/react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
    const router = useRouter()
    const { locale } = router
    const form = useRef()
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    useEffect(() => {
        Aos.init()
    }, [])

    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_rvoh1zs', 'template_jg6hj1a', form.current, 'user_WxPNda96LxtOcDZvrzf5E')
        setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <section id='contact' className='mb-20'>
            <h3 className='font-bold text-large underline text-center mb-10'>
                {languages[locale].titles.contact}
            </h3>
            <div data-aos='zoom-in' className='flex justify-center'>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className='w-[340px] flex flex-col items-center gap-2 py-8 rounded-md 
                    border border-inherit shadow-[0_0_30px_0_rgba(0,0,0,0.1)] 
                    dark:bg-[#18181b] dark:border-0'
                >
                    <Input
                        type='text'
                        size='sm'
                        name='name'
                        value={inputs.name}
                        onChange={handleInputs}
                        label={languages[locale].contact.name}
                        className='w-4/5'
                    />
                    <Input
                        type='email'
                        size='sm'
                        name='email'
                        value={inputs.email}
                        onChange={handleInputs}
                        label={languages[locale].contact.email}
                        className='w-4/5'
                    />
                    <Input
                        type='text'
                        size='sm'
                        name='subject'
                        value={inputs.subject}
                        onChange={handleInputs}
                        label={languages[locale].contact.subject}
                        className='w-4/5'
                    />
                    <Textarea
                        maxRows={2}
                        name='message'
                        value={inputs.message}
                        onChange={handleInputs}
                        label={languages[locale].contact.message}
                        className='w-4/5'
                    />
                    <Button
                        type='submit'
                        size='lg'
                        radius='sm'
                        className='bg-gradient-to-tr from-green-500 to-blue-500 
                        dark:from-yellow-500 dark:to-red-500 w-4/5'
                    >
                        {languages[locale].contact.send}
                    </Button>
                </form>
            </div>
        </section>
    )
}
