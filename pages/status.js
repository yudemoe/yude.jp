import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import useTranslation from 'next-translate/useTranslation'
import { faDiscord, faTwitter, faGithub, faKeybase, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBirthdayCake, faMapPin, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

export default function About(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("status")
  const status = t('status')
  const location = t('location')
  const tottori = t('tottori')
  const hiroshima = t('hiroshima')
  const model = t('model')

  return (

    <Layout title={status}>
      <Navbar />
        <div className="my-9 mx-9">
        {
         // Heading
        }
        <div className="mb-5">
          <p className="text-left text-4xl">{status} <p className="md:inline font-mono text-base sm:">Powered / Generated by Mackerel.</p></p>
        </div>
        {
            // cherry Datadog
        }
        <h2 className="text-2xl text-left font-bold leading-7 sm:text-3xl sm:truncate">cherry</h2>
        <div className="flex xl:w-2/3 text-center">
        <div className="flex-1"><p className="font-bold">CPU </p>i7-2600</div>
        <div className="flex-1"><p className="font-bold">RAM </p>DDR3 24GB</div>
        <div className="flex-1"><p className="font-bold">OS </p>Arch Linux</div>
        <div className="flex-1"><p className="font-bold">{location} </p>{hiroshima}</div>
        </div>
        <iframe src="https://mackerel.io/embed/public/embed/heHnGhDanoIDlf7jjxUe9yPVrsG3deeH5ptD8suErrq5w46crWEIYdLfzLoukzfF?period=24h" height="400" className="w-2/3" frameborder="0"></iframe>
        
        {
            // raspberry Datadog
        }
        <h2 className="text-2xl text-left font-bold leading-7 sm:text-3xl sm:truncate">raspberry</h2>
        <div className="flex xl:w-2/3 text-center">
        <div className="flex-1"><p className="font-bold">{model} </p>Raspberry Pi 4 Model B Rev 1.2</div>
        <div className="flex-1"><p className="font-bold">RAM </p>4GB</div>
        <div className="flex-1"><p className="font-bold">OS </p>Raspbian GNU/Linux 10 (buster)</div>
        <div className="flex-1"><p className="font-bold">{location} </p>{tottori}</div>
        </div>
        <iframe src="https://mackerel.io/embed/public/embed/5HVbQiwuxrMithyrGjmmQCCOVgJ6Ptf94SDA2qWSTsh2rtz7pjePihYzaW5QEml4?period=24h" height="400" className="w-2/3" frameborder="0"></iframe>
        
        </div>

    </Layout>
  )
}