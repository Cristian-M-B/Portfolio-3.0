import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import projects from '../data/projects'
import languages from '../../public/locale/languages'
import { BiLink } from 'react-icons/bi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const book = {
    position: 'relative',
    borderRadius: '10px',
    transform: 'preserve-3d',
    perspective: '2000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const cover = {
    position: 'absolute',
    top: '12.5%',
    width: '100%',
    height: '75%',
    transformOrigin: '0',
    transition: 'all 0.5s'
}

export default function Projects() {
    const router = useRouter()
    const { locale } = router
    const [isHover, setIsHover] = useState(new Array(projects.length))

    useEffect(() => {
        Aos.init()
    }, [])

    const handleMouseEnter = (index) => {
        setIsHover([...isHover].map((item, i) => index === i ? true : item))
    }
    const handleMouseLeave = (index) => {
        setIsHover([...isHover].map((item, i) => index === i ? false : item))
    }

    return (
        <section id='projects' className='mb-20'>
            <h3 className='font-bold text-large underline text-center mb-10'>
                {languages[locale].titles.projects}
            </h3>
            <div className='flex flex-wrap justify-center gap-6'>
                {projects?.map((project, index) => (
                    <div
                        key={project.name}
                        data-aos='zoom-in'
                        style={book}
                        className='bg-white border border-inherit shadow-[0_0_30px_0_rgba(0,0,0,0.1)] 
                        dark:bg-[#18181b] dark:border-0 w-[340px] h-[260px] sm:w-[350px] sm:h-[250px]'
                    >
                        <h4 className='font-bold text-large text-center'>
                            {project.name}
                        </h4>
                        <div
                            className='h-[73%] overflow-x-hidden scrollbar scrollbar-thumb-gray-200 
                            dark:scrollbar-thumb-neutral-800'
                        >
                            <p className='ml-12 mr-2'>
                                {languages[locale].projects.text[index]}
                            </p>
                        </div>
                        <div className='flex justify-between px-2'>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noreferrer'
                                className='cursor-pointer flex gap-1.5'
                            >
                                <BiLink size={25} /> {languages[locale].projects.link}
                            </a>
                            {isHover[index]
                                ? <button className='flex gap-1.5' onClick={() => handleMouseLeave(index)}>
                                    <AiFillEyeInvisible size={25} /> {languages[locale].projects.hideDescription}
                                </button>
                                : <button className='flex gap-1.5' onClick={() => handleMouseEnter(index)}>
                                    <AiFillEye size={25} /> {languages[locale].projects.seeDescription}
                                </button>
                            }
                        </div>
                        <div style={{ ...cover, transform: isHover[index] && 'rotatey(-80deg)' }}>
                            <img
                                alt={project.name}
                                src={project.image}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}
