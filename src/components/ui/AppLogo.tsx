'use client'

import React from 'react'
import Link from 'next/link'

interface AppLogoProps {
  size?: number;
  onClick?: () => void;
}

const AppLogo = ({ size = 32, onClick }: AppLogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center group cursor-none"
      data-cursor
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <div
        className="bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12"
        style={{ width: size, height: size }}
      >
        <span
          className="text-black font-black leading-none"
          style={{ fontSize: size * 0.55 }}
        >
          S
        </span>
      </div>
    </Link>
  )
}

export default AppLogo
