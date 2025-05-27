'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Manufacturer,manufacturers } from '@/data/manufacturers';
interface Props {
  params: { id: string };
}

export default function ManufacturerDetailsPage({ params }: Props) {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null);

  useEffect(() => {
    const found = manufacturers.find((m) => m.id === Number(params.id));
    if (!found) {
      // redirect or show not found
      router.push('/supplychain-builder');
    } else {
      setManufacturer(found);
    }
  }, [params.id, router]);

  if (!manufacturer) return <p>Loading...</p>;

  return (
    <main className="p-8 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{manufacturer.name}</h1>
      <p><strong>Country:</strong> {manufacturer.country}</p>
      <p><strong>Phone:</strong> {manufacturer.phone || 'N/A'}</p>
      <p><strong>Email:</strong> {manufacturer.email || 'N/A'}</p>
      <p><strong>Leadership:</strong> {manufacturer.leadership || 'N/A'}</p>
      <p><strong>Certifications:</strong> {manufacturer.certs?.join(', ') || 'None'}</p>
      <p><strong>Capacity:</strong> {manufacturer.capacity || 'N/A'}</p>
      <p><strong>Location:</strong> {manufacturer.location || 'N/A'}</p>
      <p><strong>Exports To:</strong> {manufacturer.exportsTo?.join(', ') || 'N/A'}</p>
      <p><strong>Lead Time:</strong> {manufacturer.leadTime} days</p>
      <p><strong>website:</strong> {manufacturer.website || 'N/A'}</p>

      {manufacturer.photos?.length ? (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {manufacturer.photos.map((url, i) => (
            <img key={i} src={url} alt={`${manufacturer.name} photo ${i + 1}`} className="rounded" />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500 italic">No photos available.</p>
      )}
    </main>
  );
}
