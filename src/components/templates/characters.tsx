'use client'
import { Characters } from '@/types/response';
import React, { useEffect, useState } from 'react'

const CharactersTemplate: React.FC<{ characters: Array<Characters> }> = ({
  characters,
}) => {
  console.log(characters, 'props');
  return <div></div>;
};

export default CharactersTemplate
