import { notFound } from 'next/navigation';
import Image from 'next/image';
import { trainers } from '@/data/trainers';
import TrainerButtons from '@/components/TrainerButtons';
import TrainerTextLinks from '@/components/TrainerTextLinks';

interface TrainerPageProps {
  params: {
    id: string;
  };
}

export default function TrainerPage({ params }: TrainerPageProps) {
  const trainer = trainers.find((t) => t.id === params.id);

  if (!trainer) {
    notFound();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src={trainer.imageUrl}
            alt={trainer.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{trainer.title}</h1>
            <p className="text-lg mb-4">{trainer.description}</p>
            
            {/* Блок "Технології" видалено */}

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Функціональність</h2>
              <ul className="list-disc pl-5 space-y-1">
                {trainer.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <TrainerTextLinks launchUrl={trainer.launchUrl} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return trainers.map((trainer) => ({
    id: trainer.id,
  }));
}
