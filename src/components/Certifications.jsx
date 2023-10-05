import { useEffect } from 'react'
import { useRouter } from 'next/router'
import certifications from '../data/certifications'
import languages from '../../public/locale/languages'
import Carousel from 'react-material-ui-carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Certifications() {
    const router = useRouter()
    const { locale } = router

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section id='certifications' className='mb-20'>
            <h3 className='font-bold text-large underline text-center mb-10'>
                {languages[locale].titles.certifications}
            </h3>
            <div data-aos='zoom-out' className='flex justify-center'>
                <Carousel
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    className='w-[308px] h-[208px] sm:w-[608px] sm:h-[408px]
                    border-b-4 border-r-4 border-solid rounded-lg border-black dark:border-white'
                >
                    {certifications?.map(certification => (
                        <img
                            key={certification.name}
                            alt={certification.name}
                            src={certification.image}
                            className='w-[300px] h-[200px] sm:w-[600px] sm:h-[400px]'
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}
