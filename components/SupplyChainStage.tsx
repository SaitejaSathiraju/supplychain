import React from 'react';
import ManufacturerCard from './ManufacturerCard';
import { Manufacturer } from '@/data/manufacturers';

type Props = {
  stage: string;
  candidates: Manufacturer[];
  selected?: Manufacturer | null;
  onSelect: (stage: string, m: Manufacturer) => void;
};

export default function SupplyChainStage({ stage, candidates, selected, onSelect }: Props) {
  return (
    <div className="p-4 bg-gray-50 rounded border mb-4">
      <h3 className="text-lg font-semibold mb-2">{stage}</h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {candidates.length > 0 ? (
          candidates.map((m: Manufacturer) => (
            <ManufacturerCard
              key={m.id}
              data={m}
              onSelect={() => onSelect(stage, m)}
              isSelected={selected?.id === m.id}
            />
          ))
        ) : (
          <p className="text-red-500">No providers found for this stage.</p>
        )}
      </div>
    </div>
  );
}
