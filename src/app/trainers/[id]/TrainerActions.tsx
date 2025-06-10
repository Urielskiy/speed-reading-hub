"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TrainerActionsProps {
  launchUrl: string;
}

export default function TrainerActions({ launchUrl }: TrainerActionsProps) {
  return (
    <div className="flex gap-4 mt-4">
      <Button asChild>
        <a href={launchUrl} target="_blank" rel="noopener noreferrer">
          Запустити тренажер
        </a>
      </Button>
      <Button asChild variant="outline">
        <Link href="/">
          Назад
        </Link>
      </Button>
    </div>
  );
}
