"use client";

import Image from 'next/image';
import { useState } from 'react';
import { getAssetPath } from '@/utils/pathUtils';

interface TrainerCardProps {
  title: string;
  description: string;
  imageUrl: string;
  launchUrl: string;
  features: string[];
}

export default function TrainerCard({
  title,
  description,
  imageUrl,
  launchUrl,
  features
}: TrainerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        backgroundColor: 'var(--card)',
        color: 'var(--card-foreground)',
        boxShadow: isHovered 
          ? '0 22px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08)' 
          : '0 4px 6px rgba(0, 0, 0, 0.05)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}>
      <div style={{ 
        position: 'relative', 
        height: '12rem', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        padding: '1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 25%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 25%)',
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }} />
        <Image
          src={getAssetPath(imageUrl)}
          alt={title}
          width={120}
          height={120}
          style={{ 
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
          priority
        />
      </div>
      <div style={{ padding: '2rem 1.5rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{title}</h3>
        <p style={{ 
          fontSize: '1rem', 
          lineHeight: '1.6',
          color: 'var(--muted-foreground)',
          marginBottom: '1rem'
        }}>{description}</p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Функціональність:
          </h4>
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem',
            fontSize: '0.95rem',
            lineHeight: '1.5',
            color: 'var(--muted-foreground)'
          }}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '0.75rem 1.5rem 1.5rem'
      }}>
        <a href={launchUrl} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          height: '3rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          boxShadow: isHovered ? '0 4px 12px rgba(99, 102, 241, 0.4)' : '0 2px 5px rgba(99, 102, 241, 0.2)',
          width: '100%',
          maxWidth: '200px'
        }}>Запустити</a>
      </div>
    </div>
  );
}
