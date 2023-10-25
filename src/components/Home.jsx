import { useRouter } from 'next/router'
import languages from '../../public/locale/languages'
import { Button } from '@nextui-org/react'
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'

export default function Home() {
    const router = useRouter()
    const { locale } = router

    return (
        <section id='home' className='flex justify-center items-center h-[calc(100vh-64px)]'>
            <div className='flex flex-col'>
                <div className='flex justify-center mb-4'>
                    <img
                        src='/images/photo.png'
                        className='w-48 h-48 rounded-full object-cover bg-[#e4e4e7] dark:bg-[#18181b]'
                    />
                </div>
                <h2
                    className='text-center text-4xl sm:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 
                dark:from-yellow-500 dark:to-red-500 bg-clip-text text-transparent'
                >
                    Cristian Baronetto
                </h2>
                <h2
                    className='text-center text-4xl sm:text-5xl font-bold bg-gradient-to-b from-green-500 to-blue-500 
                dark:from-yellow-500 dark:to-red-500 bg-clip-text text-transparent'
                >
                    {languages[locale].home.title}
                </h2>
                <div className='flex justify-center items-center mt-4 gap-8'>
                    <a href='/documents/resume.pdf' download='Cristian Baronetto - Full Stack Developer - Resume'>
                        <Button
                            variant='bordered'
                            className='hover:scale-125'
                        >
                            Resume
                        </Button>
                    </a>
                    <div className='flex gap-4'>
                        <a
                            href='https://www.linkedin.com/in/cristian-baronetto'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:scale-125'
                        >
                            <BsLinkedin size={25} />
                        </a>
                        <a
                            href='https://github.com/Cristian-M-B'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:scale-125'
                        >
                            <BsGithub size={25} />
                        </a>
                        <a
                            href='https://api.whatsapp.com/send?phone=5491168071990'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:scale-125'
                        >
                            <BsWhatsapp size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}
