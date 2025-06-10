"use client";

import React from 'react';
import Link from 'next/link';

interface TrainerTextLinksProps {
  launchUrl: string;
}

export default function TrainerTextLinks({ launchUrl }: TrainerTextLinksProps) {
  return (
    <div className="flex gap-4 mt-8">
      <a 
        href={launchUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium underline"
      >
        Запустити тренажер
      </a>
      <Link 
        href="/" 
        className="text-blue-600 hover:text-blue-800 font-medium ml-4 underline"
      >
        Назад
      </Link>
    </div>
  );
}
