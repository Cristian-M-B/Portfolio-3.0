import { useEffect } from 'react'
import { useRouter } from 'next/router'
import technologies from '../data/technologies'
import languages from '../../public/locale/languages'
import Aos from 'aos'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import 'aos/dist/aos.css'

export default function Technologies() {
    const router = useRouter()
    const { locale } = router

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section id='technologies' className='mb-20'>
            <h3 className='font-bold text-large underline text-center mb-10'>
                {languages[locale].titles.technologies}
            </h3>
            <div className='flex flex-wrap justify-center gap-4'>
                {technologies?.map(technology => (
                    <Card key={technology.name} data-aos='zoom-in' className='py-2'>
                        <CardHeader className='flex justify-center'>
                            <h4 className='font-bold text-large'>
                                {technology.name}
                            </h4>
                        </CardHeader>
                        <CardBody className='py-2'>
                            <Image
                                alt={technology.name}
                                src={technology.image}
                                width={120}
                                className='hover:scale-110'
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}
