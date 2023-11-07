import React from 'react'
import Image from 'next/image'

interface IconProps {
  alt: string
  imagePath: string
}

const Icon: React.FC<IconProps> = ({ alt, imagePath }) => {
  return (
    <Image
      src={imagePath}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      priority
    />
  );
}

export default Icon
