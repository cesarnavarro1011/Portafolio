'use client'
import Image from 'next/image';
import imgAvatar from '../images/cesarnavarro.png';
import imgAvatar2 from '../images/cesarnavarro2.png';
import imgAvatar3 from '../images/cesarnavarro4.png';
import greetingImg from '../images/270c-1f3fc.gif';
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import Link from 'next/link';
import ContactHero from '@/components/ContactHero';
import { BsSunglasses } from "react-icons/bs";
import { useEffect, useState } from 'react';


export default function Hero () {
  return (
  <div className=""> 
    <div className="mx-auto max-w-5xl flex items-center">
      <div className="pr-3 mt-20">
        <div className="flex w-60 items-end">
          <h1 className="w-full text-2xl">Hi there, I'm <b>César Navarro.</b></h1>
          <Image 
            id="animated-gif" 
            className=""
            width={50} 
            height={40} 
            src={greetingImg} 
            alt="GIF animado"/>
        </div>
        <p className="w-full py-5 text-base pr-0">Tiene 23 años, vive en colombia y Desarrolla proyectos web como de aplicaciones moviles, especialmente del lado Frontend.
          Tiene conocimientos en UI/UX y marketing Content, Le gusta aprender nuevas tecnologias, ya
          que su cualidad de ser curioso lo implusa a ello. A su vez ha trabajado con PHP con el CMS WordPress, 
          y actualmente es estudiante de la univeridad Pascual Bravo. 
        </p>
        <div className="">
          <span className="w-full text-lg"><b></b></span>
          <div className="max-w-32 flex items-center justify-between	">
            <ContactHero/>
          </div>
        </div>
      </div>
      <div className="flex mt-0">
        <div className="w-74 flex relative mt-20">
          <Image className="w-80 h-80 object-cover rounded-t-lg" src={imgAvatar2} alt="Developer" width={900} height={700}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
        </div>
        <div className="flex relative mx-2 mt-10">
          <Image className="w-80 h-80 object-cover rounded-t-lg" src={imgAvatar} alt="Developer" width={900} height={700}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
        </div>
        <div className="flex relative mt-0">
          <Image className="w-80 h-80 object-cover rounded-t-lg" src={imgAvatar3} alt="Developer" width={900} height={700}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-1"></div>
        </div>
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