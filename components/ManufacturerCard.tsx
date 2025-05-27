import React from 'react';
import type { Manufacturer } from '@/data/manufacturers';

interface Props {
  data: Manufacturer;
  onSelect: () => void;
  isSelected: boolean;
}

export default function ManufacturerCard({ data, onSelect, isSelected }: Props) {
  return (
    <div
      onClick={onSelect}
      className={`border rounded p-3 mb-2 cursor-pointer ${isSelected ? 'bg-blue-100' : ''}`}
    >
      <h4 className="font-bold">{data.name}</h4>
      <p className="text-sm text-gray-600">Country: {data.country}</p>
      <p className="text-sm text-gray-600">Lead Time: {data.leadTime} days</p>
      <p className="text-sm text-gray-600">Certificates: {data.certs?.join(', ') || 'None'}</p>
      <p className="text-sm text-gray-600">Capacity: {data.capacity || 'N/A'}</p>
      <p className="text-sm text-gray-600">Location: {data.location || 'N/A'}</p>
      {isSelected && <p className="text-blue-700 font-medium mt-1">[Selected]</p>}
    </div>
  );
}
