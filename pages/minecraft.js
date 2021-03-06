import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Minecraft from './components/Minecraft'
import Image from 'next/image'
import { faMap, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/minecraft/ja.md'
import en from '../docs/minecraft/en.md'

export default function About(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("minecraft")
    const copyText = () => {
      navigator.clipboard.writeText("yude.jp");
    };

    return (
            <Layout title={t('title')}>
            <div>
                <p className="my-2 text-3xl text-center">{t('title')}</p>
                <div className="w-full">
                <Image
                    src         = "/static/images/dynmap.png"
                    alt         = "Dynmap Header"
                    unoptimized = {true}
                    width       = {1354}
                    height      = {619}
                />
                </div>
                <div className="text-center">
                <Minecraft />
                <p>
                  <span>{t('address')}: <code>yude.jp</code></span>
                  <button
                    className="bg-pink-600 text-white active:bg-pink-600 font-bold text-sm px-2 py-2 ml-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => copyText()}
                  >
                    <FontAwesomeIcon icon={faCopy} className="w-5 h-5 inline"/>
                  </button>
                </p>
                <p>{t('version')}: 1.17</p>
                <Link href="https://bluemap.yude.jp">
                <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 mt-3 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                type="button"
              >
                <FontAwesomeIcon icon={faMap} className="w-5 h-5 inline"/> BlueMap
              </button>
              </a>
              </Link>
              </div>
              
              {lang === 'ja' ? (
                <ReactMarkdown plugins={[gfm]} children={ja} />
              ) : (
                <ReactMarkdown plugins={[gfm]} children={en} />
              )}

            </div>
            </Layout>
        )
}