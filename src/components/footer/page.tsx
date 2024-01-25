import React from 'react'
import CardLink from './cardLink'
import { linkedinUrl, siteUrl } from '@/site'

export default function Footer() {
  return (
    <div className=" bg-primary-light p-16 grid gap-8 bottom-0 ">
      <div className=" grid lg:grid-cols-2 gap-8">
        <div className="grid gap-6">
          <div className="flex gap-2 ">
            <span className="font-bold text-lg text-white self-center">
              Moui
            </span>
          </div>
          <div className=" grid md:flex gap-2">
            <span>Contato:</span>
            <span>contato@apperize@gmail.com</span>
          </div>
        </div>

        <div className=" flex-row">
          <div className="pb-6">
            <span className="font-bold text-lg ">Veja mais sobre a gente:</span>
          </div>
          <div className="grid gap-4">
            <CardLink name="Site" url={siteUrl} />
            <CardLink name="linkedin" url={linkedinUrl} />
          </div>
        </div>
      </div>

      <div className="h-1 bg-secondary-main"></div>

      <div className=" flex justify-center">
        © Copyright 2023, Moui. Todos direitos reservados.
      </div>
    </div>
  )
}
