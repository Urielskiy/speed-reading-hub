"use client";

import React from 'react';

interface TrainerButtonsProps {
  launchUrl: string;
}

export default function TrainerButtons({ launchUrl }: TrainerButtonsProps) {
  return (
    <div className="flex gap-4 mt-8">
      <a 
        href={launchUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-blue-600 text-white shadow hover:bg-blue-700 h-10 px-6 py-2 cursor-pointer"
        style={{ textDecoration: 'none' }}
      >
        Запустити тренажер
      </a>
      <a 
        href="/" 
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100 h-10 px-6 py-2 cursor-pointer"
        style={{ textDecoration: 'none' }}
      >
        Назад
      </a>
    </div>
  );
}
