'use client'

import * as React from "react"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, ChevronDown, Play, Pause, SkipForward, SkipBack, Volume2, PinIcon, Send, Music2, Phone, Mail, ExternalLink, ThumbsUp } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const carouselImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-mLQ5FNh5HS1VYghnGaMKLmn7OskiUz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Dmsq2F8i7IPMbL463iKQPOch1KTZ27.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-EQbYnwh4jZOhSu9MuEn2sy5cXNrbtD.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-n9oT9UX9mkdqPXohCS62Kw2eW6Ms7I.png"
]

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#biography", label: "Biography" },
  { href: "#videos", label: "Videos" },
  { href: "#music", label: "Music" },
  { href: "#press", label: "Press" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { Icon: Youtube, href: "https://youtube.com/c/ArunGaikwad", label: "YouTube" },
  { Icon: Facebook, href: "https://www.facebook.com/arungaikwadofficial/", label: "Facebook" },
  { Icon: Twitter, href: "https://x.com/arungaikwad09", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com/arungaikwadofficial/", label: "Instagram" },
  { Icon: PinIcon, href: "https://www.pinterest.com/arungaikwad34/", label: "Pinterest" },
  { Icon: Send, href: "https://t.me/arungaikwadofficial", label: "Telegram" },
  { Icon: Music2, href: "https://open.spotify.com/artist/5Dr1aEabRUVz9Yt7QbMx5f", label: "Spotify" },
]

const platforms = [
  {
    name: "Spotify",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spotify_logo_without_text.svg-z7Zp4d10JrBu3Txm8gwhIfbDqQFCmq.png",
    href: "https://open.spotify.com/artist/5Dr1aEabRUVz9Yt7QbMx5f",
    color: "bg-[#1DB954]"
  },
  {
    name: "YouTube Music",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Youtube_Music_icon.svg-6iR6pEJGTusBZzPwXNpkRWWmFuSzcZ.png",
    href: "https://youtube.com/c/ArunGaikwad",
    color: "bg-red-600"
  },
  {
    name: "Apple Music",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple_Music_logo-Brj125pGJoF7mJCdQIDSz4mXUtewVX.png",
    href: "#",
    color: "bg-black"
  },
  {
    name: "JioSaavn",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jiosaavn_logo-Uy37bXDbpuC1rvHmwncXFoNcp1yZEK.png",
    href: "#",
    color: "bg-[#2BC5B4]"
  },
  {
    name: "Gaana",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-vvw81D8x1zB0Yj4XEOnEtHOcv1uBF6.png",
    href: "#",
    color: "bg-[#E72C30]"
  },
  {
    name: "Wynk Music",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-384x384.522e458f-eA0LFSvmlFthm19RH7pTw5vXPZ45lH.png",
    href: "#",
    color: "bg-gradient-to-r from-[#FF4B6E] to-[#FF8C69]"
  },
]

const topTracks = [
  { title: "Tabla Benjo Solo", duration: "5:30" },
  { title: "Samarpan In TriTaal", duration: "7:15" },
  { title: "Tabla Arun Gaikwad - Part 1", duration: "6:45" },
  { title: "Sadguru Tame Mara Tara", duration: "4:20" },
  { title: "Rukhad Bava Tu", duration: "5:55" },
]

const youtubeVideos = [
  { id: "02QelxyeBmw", title: "Bhai Bandhi Mari Bhul Ma | Lalita Godadhra | Arun Gaikwad" },
  { id: "y_RRraoQOm0", title: "Jitugiri Bapu Live Bhajan | Kandas Bapu Ashram | Dwarka" },
  { id: "EAbY4x1pk1Y", title: "Tabla Solo in Teentaal by Arun Gaikwad" },
  { id: "GomNOCZ1NT8", title: "Tabla Solo in Jhaptaal by Arun Gaikwad" },
  { id: "YrxUgAuUpXM", title: "Tabla Solo in Ektaal by Arun Gaikwad" },
  { id: "Jv_bvXKhUMY", title: "Tabla Solo in Rupak Taal by Arun Gaikwad" },
  { id: "e3C4GKctl3c", title: "Tabla Solo in Dadra Taal by Arun Gaikwad" },
  { id: "FTmFG7R48xQ", title: "Tabla Solo in Keherwa Taal by Arun Gaikwad" },
  { id: "3KOJr77CZXE", title: "Tabla Solo in Teentaal (Different Composition) by Arun Gaikwad" },
]

const pressReleases = [
  {
    title: "Arun Gaikwad to release his classical piece 'Samarpan' in Tritaal-Exclusive!",
    source: "Economic Times",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1f39c_001db47b600047b7b5d114b9cd56aba5~mv2-9ZqPNwjK64gq1zeUERDsAHn9mX2bAZ.webp",
    link: "https://timesofindia.indiatimes.com/entertainment/gujarati/music/arun-gaikwad-to-release-his-classical-piece-samarpan-in-tritaal-exclusive/articleshow/89321304.cms"
  },
  {
    title: "Meet Arun Gaikwad, a tabla expert making people groove on his beats",
    source: "The India Saga",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1f39c_2b133f0cc0ff415da49bd59d045f3bd6~mv2-d1gZVbMoOP5xGCAr8mAOOcRT2A8Csl.webp",
    link: "https://theindiasaga.com/saga-corner/meet-arun-gaikwad-a-tabla-expert-making-people-groove-on-his-beats/"
  },
  {
    title: "Arun Gaikwad Met Saint Shree Morari Bapu",
    source: "Hindu Wire",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1f39c_fc84eed61c114009be70c9768dadf517~mv2-GFg9JOlkjpBMrCUQ09b6rnL8ItPl22.webp",
    link: "https://hinduwire.com/arun-gaikwad-met-saint-shree-morari-bapu/"
  },
  {
    title: "સંગીત સફર : તબલાંવાદનમાં ભજનથી ફિલ્મી ગીતો સુધી",
    source: "Gujarat Samachar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1f39c_47cc4ba27c674f6daebb3439f76feddd~mv2-3XxI1K8Zzi3uR1ebfNtYvYdsj7ImhG.webp",
    link: "#"
  }
]

const FacebookPreview = () => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg w-64"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a href="https://www.facebook.com/arungaikwadofficial" target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-24">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facebook-cover-Ue0Hy5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5Ue5.jpg"
            alt="Arun Gaikwad Facebook Cover"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center mb-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ag%20logo%20(1)-D5lsWa8nAem5EskQ2XExyxoobQFNwE.png"
              alt="Arun Gaikwad Profile Picture"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <div>
              <h3 className="text-sm font-semibold text-white">Arun Gaikwad</h3>
              <p className="text-zinc-400 text-xs">Musician/Band</p>
            </div>
          </div>
          <p className="text-zinc-300 text-xs mb-2 line-clamp-2">
            Official Facebook page of Arun Gaikwad - Tabla Vadak & Musician Percussionist
          </p>
          <div className="flex items-center text-zinc-400 text-xs">
            <ThumbsUp className="w-3 h-3 mr-1" />
            <span>5.2K likes</span>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export function BlockPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [bioRef, bioInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [videosRef, videosInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [musicRef, musicInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [pressRef, pressInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTrack, setCurrentTrack] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto flex h-24 items-center justify-between px-8"
        >
          <div className="flex items-center gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ag%20logo%20(1)-D5lsWa8nAem5EskQ2XExyxoobQFNwE.png"
              alt="Arun Gaikwad Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex flex-1 px-8">
            <ul className="flex justify-center space-x-12 text-sm uppercase tracking-wider">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button 
                    onClick={() =>scrollToSection(item.href.slice(1))} 
                    className="hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            {socialLinks.slice(0, 4).map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </header>

      <main>
        <section id="home" className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={carouselImages[currentSlide]}
                alt={`Arun Gaikwad performance ${currentSlide + 1}`}
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center z-20 ${currentSlide % 2 === 0 ? 'md:items-start md:pl-16' : 'md:items-end md:pr-16'}`}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Arun Gaikwad
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl text-center text-amber-500 font-semibold px-4 py-2 bg-black/50 rounded"
              >
                TABLA VADAK & MUSICIAN PERCUSSIONIST
              </motion.h2>
            </motion.div>
          </AnimatePresence>
          
          <motion.button
            onClick={() => scrollToSection('biography')}
            className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="block text-sm uppercase tracking-wider mb-2">Slide Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </section>

        <section id="biography" className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-24">
          <motion.div 
            ref={bioRef}
            className="container mx-auto px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-center mb-16">Biography</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
              <div className="md:col-span-2 space-y-6 text-lg text-zinc-300">
                <p>
                  Arun Gaikwad, born on 12th August 1982 in a Maharashtrian family in Mumbai, India, is a renowned semi-classical musician percussionist. His journey in music began amidst personal hardships, including the loss of his father at a young age, which forced him to leave his studies and start working to support his family.
                </p>
                <p>
                  At the age of 13, Arun's life took a transformative turn when a neighbor introduced him to the tabla. Despite financial constraints, his mother and aunt managed to save enough to buy him his first tabla set. This marked the beginning of Arun's passionate pursuit of music.
                </p>
                <p>
                  Dedicating 8-12 hours daily to rigorous practice, Arun honed his skills and officially launched his career. He started performing bhajans, santwani, and dairo shows across India, quickly gaining recognition in Gujarat and Mumbai. His talent caught the attention of well-known artists and organizers, including Bhajanik Laxman Barot, Kirtidaan Gadhvi, Osman Mir, and Tejdaan Gadhvi.
                </p>
                <p>
                  Arun's international debut came in 2008 with a performance in Malaysia, marking the beginning of his global recognition. His expertise extends beyond the tabla to include dholak, dhol, and various other percussion instruments. His unique style, blending traditional techniques with contemporary flair, has earned him acclaim in both classical and modern music circles.
                </p>
                <p>
                  In 2011, Arun made his first trip to the United States, performing at Navratri and Diwali shows. His captivating performances led to repeat invitations in 2012, 2015, 2017, and 2018. Arun has also expanded his repertoire to include Bollywood nights, showcasing his versatility as a performer.
                </p>
                <p>
                  Looking to the future, Arun aspires to make his mark in Bollywood, believing he can contribute memorable music and beats to the industry. He is currently working on semi-classical music with tabla cover songs, promising exciting new content for his fans.
                </p>
                <p>
                  Arun Gaikwad's journey from humble beginnings to international acclaim is a testament to his talent, perseverance, and dedication to his craft. He remains grateful for the opportunities that have allowed him to support his family and pursue his passion for music.
                </p>
              </div>
              <div className="relative w-full max-w-md mx-auto">
                <div 
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-amber-500/20 to-amber-700/20 opacity-50 blur-3xl transform scale-110"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ag%20website%202-QoT6og9vebRpuzXOyElTi2RefFPOch.png"
                    alt="Arun Gaikwad"
                    fill
                    className="object-cover object-center rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">Arun Gaikwad</h3>
                  <p className="text-amber-500">Tabla Vadak & Musician Percussionist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="videos" className="relative bg-gradient-to-b from-zinc-900 to-black py-24">
          <motion.div
            ref={videosRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={videosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-center mb-16">Popular Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {youtubeVideos.map((video, index) => (
                <motion.a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={videosInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-100 group-hover:text-amber-500 transition-colors duration-300">{video.title}</h3>
                </motion.a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://www.youtube.com/@ArunGaikwad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
              >
                Explore More Videos
                <ExternalLink className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="music" className="relative bg-gradient-to-b from-zinc-900 to-black py-24">
          <motion.div
            ref={musicRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={musicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-24">
              <h2 className="text-4xl font-serif text-center mb-16">Listen On</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {platforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={musicInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`relative w-16 h-16 rounded-full ${platform.color} p-2 shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center`}>
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-zinc-300 text-center">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif text-center mb-16">Top Tracks</h2>
              <Card className="bg-zinc-900/50 border-zinc-800 shadow-xl">
                <CardContent className="p-6">
                  {topTracks.map((track, index) => (
                    <motion.div
                      key={track.title}
                      className={`flex items-center justify-between p-4 rounded-lg mb-2 ${
                        currentTrack === index ? 'bg-amber-500/10' : 'hover:bg-zinc-800/50'
                      } transition-colors cursor-pointer`}
                      onClick={() => {
                        setCurrentTrack(index)
                        setIsPlaying(true)
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={musicInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-zinc-400 w-6">{index + 1}</span>
                        <span className={currentTrack === index ? 'text-amber-500' : 'text-white'}>
                          {track.title}
                        </span>
                      </div>
                      <span className="text-zinc-400">{track.duration}</span>
                    </motion.div>
                  ))}
                </CardContent>

                <div className="border-t border-zinc-800 p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">
                        {topTracks[currentTrack].title}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {topTracks[currentTrack].duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setCurrentTrack((prev) => (prev - 1 + topTracks.length) % topTracks.length)}
                      >
                        <SkipBack className="h-5 w-5" />
                        <span className="sr-only">Previous</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setCurrentTrack((prev) => (prev + 1) % topTracks.length)}
                      >
                        <SkipForward className="h-5 w-5" />
                        <span className="sr-only">Next</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Slider
                        defaultValue={[0]}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">0:00</span>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-zinc-400" />
                        <Slider
                          defaultValue={[100]}
                          max={100}
                          step={1}
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="press" className="relative bg-gradient-to-b from-zinc-900 to-black py-24">
          <motion.div
            ref={pressRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={pressInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-center mb-16">Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pressReleases.map((release, index) => (
                <motion.a
                  key={release.title}
                  href={release.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={pressInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <div className="relative aspect-video">
                      <Image
                        src={release.image}
                        alt={release.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors duration-300">{release.title}</h3>
                      <p className="text-sm text-zinc-400">{release.source}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="relative bg-gradient-to-b from-black to-zinc-900 py-24">
          <motion.div
            ref={contactRef}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-center mb-8">JOIN MY MAILING LIST</h2>
            <h3 className="text-2xl font-serif text-center mb-16">BOOKING & CONTACT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="mb-6">Get in touch for bookings, interviews & more!</p>
                <p className="mb-6">Please send a detailed email with the nature of your inquiry, as well as any dates and locations associated.</p>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:arungaikwad34@gmail.com" className="hover:text-amber-500 transition-colors">arungaikwad34@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+919967497492" className="hover:text-amber-500 transition-colors">+91 9967497492</a>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+919821375215" className="hover:text-amber-500 transition-colors">+91 9821375215</a>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=919967497492&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Enquiry on WhatsApp
                </a>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input type="text" placeholder="First Name" className="bg-zinc-800 border-zinc-700" />
                  <Input type="text" placeholder="Last Name" className="bg-zinc-800 border-zinc-700" />
                </div>
                <Input type="email" placeholder="Email" className="bg-zinc-800 border-zinc-700" />
                <Input type="tel" placeholder="Phone" className="bg-zinc-800 border-zinc-700" />
                <Textarea placeholder="Message" className="bg-zinc-800 border-zinc-700" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <FacebookPreview />
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ag%20logo%20(1)-D5lsWa8nAem5EskQ2XExyxoobQFNwE.png"
                alt="Arun Gaikwad Logo"
                width={100}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-amber-500 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              
              <nav>
                <ul className="flex flex-wrap justify-center gap-6">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <button 
                        onClick={() => scrollToSection(item.href.slice(1))}
                        className="text-sm hover:text-amber-500 transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="text-center lg:text-right">
                <p className="text-sm text-zinc-400">
                  © {new Date().getFullYear()} Arun Gaikwad. All rights reserved.
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Professional Tabla Player & Music Producer
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  )
}