import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/object/components/image-item.module.css'

interface ImageProps {
  imagePath: string
  alt: string
  multiplier: string
  objectWidth: number
}

const HeroImage: React.FC<ImageProps> = ({ imagePath, alt, multiplier, objectWidth }) => {
  return (
    <div className={styles.hero} style={{ width: `calc(${objectWidth}px * ${multiplier})` }}>
      <Image
        src={imagePath}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
};

export default HeroImage;
