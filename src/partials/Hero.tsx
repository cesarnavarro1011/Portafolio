'use client'
import Image from 'next/image';
import imgAvatar from '../images/cesarnavarro.png';
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { PiArrowSquareDownRight } from "react-icons/pi";
import Link from 'next/link';


export default function Hero () {
  
  return (
  <div className="example2"> 
    <div className="mx-auto max-w-7xl flex items-center">
      <div className="px-3 mt-20">
        <h1 className="w-full text-2xl">Hi there, I'm <b>César Navarro.</b></h1>
        <p className="w-full py-5 text-base pr-5">Tiene 23 años, vive en colombia y Desarrolla proyectos web como de aplicaciones moviles, especialmente del lado Frontend.
          Tiene conocimientos en UI/UX y marketing Content, Le gusta aprender nuevas tecnologias, ya
          que su cualidad de ser curioso lo implusa a ello. A su vez ha trabajado con PHP con el CMS WordPress, 
          y actualmente es estudiante de la univeridad Pascual Bravo. 
        </p>
        <div className="">
          <span className="w-full py-5 text-lg"><b><PiArrowSquareDownRight fontSize={32}/></b></span>
          <div className="max-w-32 py-3 flex items-center justify-between	">
            {/* <Link href="https://www.linkedin.com/in/dev-cesarnavarro/">
              <SiGithub fontSize={32}/>
            </Link> 
            <Link href="https://www.linkedin.com/in/dev-cesarnavarro/">
              <SiLinkedin fontSize={30}/>
            </Link>
            <Link href="https://www.linkedin.com/in/dev-cesarnavarro/">
              <HiOutlineMail fontSize={40}/>
            </Link>  */}
            {/* <ContactHero/> */}
          </div>
        </div>
      </div>
      <div className="relative w-700 h-700">
        <Image className="w-50 h-50 object-cover rounded-full" src={imgAvatar} alt="Developer" width={900} height={700}/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
      </div>
    </div>
  </div>
  )
};



      //  <a href="/">
      //       <HeroSocial
      //         src="/public/images/twitter-icon.png"
      //         alt="Twitter icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/facebook-icon.png"
      //         alt="Facebook icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/linkedin-icon.png"
      //         alt="Linkedin icon"
      //       />
      //     </a>
      //     <a href="/">
      //       <HeroSocial
      //         src="/assets/images/youtube-icon.png"
      //         alt="Youtube icon"
      //       />
      //     </a>