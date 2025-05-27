'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { DOMAIN_STAGES } from '@/data/stages';
import { manufacturers, Manufacturer } from '../../data/manufacturers';

export default function SupplyChainBuilderPage() {
  const searchParams = useSearchParams();
  const selectedDomain = searchParams.get('domain') || 'Textiles';
  const selectedSubdomain = searchParams.get('subdomain') || '';

  // Map domain and subdomain to keys in DOMAIN_STAGES
  const domainKeyMap: Record<string, string> = {
    'Heavy Manufacturing Industries': 'Automotive', // Use 'Automotive' as representative key for stages
    'Light Manufacturing Industries': 'ConsumerElectronics',
    'Metal & Material-Based Manufacturing': 'SteelIron',
    'Chemical & Related Manufacturing': 'Petrochemicals',
    'Food, Beverage & Agriculture': 'FoodProcessing',
    'Textile & Apparel': 'Textiles',
    'Packaging & Paper': 'PaperPulp',
    'Electrical & Electronics': 'ConsumerElectronics',
    'Medical & Healthcare Devices': 'Medical',
    'Building Materials': 'LumberWoodProducts',
    'High-Tech & Emerging Industries': 'Robotics',
  };

  const subdomainKeyMap: Record<string, string> = {
    'Automotive Manufacturing': 'Automotive',
    'Aerospace & Defense': 'AerospaceDefense',
    'Shipbuilding': 'Shipbuilding',
    'Railway Equipment Manufacturing': 'RailwayEquipment',
    'Construction Equipment': 'ConstructionEquipment',
    'Industrial Machinery & Equipment': 'IndustrialMachinery',
    'Consumer Electronics': 'ConsumerElectronics',
    'Appliance Manufacturing': 'Appliances',
    'Furniture Manufacturing': 'Furniture',
    'Toys & Games': 'Toys',
    'Sporting Goods': 'SportingGoods',
    'Steel & Iron Products': 'SteelIron',
    'Aluminum & Non-Ferrous Metals': 'Aluminum',
    'Foundries (Casting & Forging)': 'Foundries',
    'Metal Fabrication': 'MetalFabrication',
    'Glass Manufacturing': 'Glass',
    'Ceramics': 'Ceramics',
    'Cement & Concrete Production': 'CementConcrete',
    'Plastic & Polymer Manufacturing': 'PlasticsPolymers',
    'Rubber Products': 'Rubber',
    'Petrochemicals': 'Petrochemicals',
    'Industrial Chemicals': 'IndustrialChemicals',
    'Paints & Coatings': 'PaintsCoatings',
    'Adhesives & Sealants': 'AdhesivesSealants',
    'Fertilizers': 'Fertilizers',
    'Pesticides': 'Pesticides',
    'Pharmaceuticals': 'Pharmaceutical',
    'Cosmetics & Personal Care Products': 'CosmeticsPersonalCare',
    'Soaps & Detergents': 'SoapsDetergents',
    'Food Processing': 'FoodProcessing',
    'Beverage Manufacturing (including alcohol)': 'BeverageManufacturing',
    'Dairy Products': 'DairyProducts',
    'Meat & Seafood Processing': 'MeatSeafoodProcessing',
    'Bakery & Confectionery': 'BakeryConfectionery',
    'Grain Milling': 'GrainMilling',
    'Animal Feed Manufacturing': 'AnimalFeed',
    'Agricultural Equipment': 'AgriculturalEquipment',
    'Textile Manufacturing': 'Textiles',
    'Apparel & Garment Manufacturing': 'ApparelGarments',
    'Leather Goods': 'LeatherGoods',
    'Footwear': 'Footwear',
    'Paper & Pulp Manufacturing': 'PaperPulp',
    'Corrugated Boxes': 'CorrugatedBoxes',
    'Flexible Packaging': 'FlexiblePackaging',
    'Plastic Packaging': 'PlasticPackaging',
    'Glass Bottle Manufacturing': 'GlassBottleManufacturing',
    'Semiconductor Manufacturing': 'SemiconductorManufacturing',
    'Battery Manufacturing': 'BatteryManufacturing',
    'Solar Panel Manufacturing': 'SolarPanelManufacturing',
    'Medical Equipment': 'Medical',
    'Diagnostic Devices': 'Medical',
    'Surgical Instruments': 'Medical',
    'Prosthetics & Orthotics': 'Medical',
    'Disposable Medical Supplies': 'Medical',
    'Lumber & Wood Products': 'BuildingMaterials',
    'Flooring & Tiles': 'BuildingMaterials',
    'Insulation Materials': 'BuildingMaterials',
    'Doors & Windows': 'BuildingMaterials',
    'Roofing Materials': 'BuildingMaterials',
    '3D Printing/Additive Manufacturing': 'HighTechEmergingIndustries',
    'Robotics': 'Robotics',
    'Nanotechnology Products': 'NanotechnologyProducts',
    'Biotechnology Products': 'BiotechnologyProducts',
    'EV Battery & Charging Systems': 'EVBatteryChargingSystems',
  };

  const domainKey = domainKeyMap[selectedDomain] || selectedDomain;
  const subdomainKey = subdomainKeyMap[selectedSubdomain] || selectedSubdomain;

  // Dynamically get stages for selected domain or subdomain
  const stages: string[] = DOMAIN_STAGES[subdomainKey as keyof typeof DOMAIN_STAGES] || DOMAIN_STAGES[domainKey as keyof typeof DOMAIN_STAGES] || [];

  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selected, setSelected] = useState<Record<string, Manufacturer | null>>({});

  const countries = Array.from(new Set(manufacturers.map(m => m.country)));

  // Filter manufacturers by stage, domain, subdomain, and country
  const getProvidersForStage = (stage: string) => {
    return manufacturers.filter(
      (m) =>
        m.stages.includes(stage) &&
        m.available &&
        (selectedCountry === 'All' || m.country === selectedCountry) &&
        m.domain.toLowerCase() === selectedDomain.toLowerCase() &&
        (selectedSubdomain === '' || (m.subdomain && m.subdomain.toLowerCase() === selectedSubdomain.toLowerCase()))
    );
  };

  const handleSelect = (stage: string, m: Manufacturer) => {
    setSelected((prev) => ({
      ...prev,
      [stage]: prev[stage]?.id === m.id ? null : m,
    }));
  };

  const totalLeadTime = Object.values(selected).reduce(
    (sum, m) => (m ? sum + m.leadTime : sum),
    0
  );

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Build Your {selectedDomain} Supply Chain</h1>

      <label className="block mb-4">
        <span className="mr-2 font-semibold">Filter by Country:</span>
        <select
          className="border rounded p-1"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="All">All</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <p className="text-gray-600">
        Select one unit per stage. Total Lead Time: <strong>{totalLeadTime} days</strong>
      </p>

      <div className="bg-white p-4 border rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Selected Supply Chain</h2>
        <ul className="list-disc pl-6">
          {stages.map((stage: string) => (
            <li key={stage}>
              <strong>{stage}:</strong>{' '}
              {selected[stage] ? (
                `${selected[stage]!.name} (${selected[stage]!.country})`
              ) : (
                <span className="text-gray-400">None selected</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {stages.map((stage: string) => (
        <div key={stage} className="mb-6">
          <h3 className="font-semibold mb-2">{stage}</h3>

          {getProvidersForStage(stage).length > 0 ? (
            getProvidersForStage(stage).map((m) => (
              <div
                key={m.id}
                className={`p-2 border rounded mb-1 cursor-pointer ${
                  selected[stage]?.id === m.id ? 'bg-blue-200' : ''
                }`}
                onClick={() => handleSelect(stage, m)}
              >
                <strong>{m.name}</strong> ({m.country}) — Lead time: {m.leadTime} days
                {selected[stage]?.id === m.id && <span className="ml-2 font-semibold">[Selected]</span>}
                {' '}
                <Link
                  href={`/manufacturer/${m.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="ml-4 text-blue-600 underline"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No providers found for this stage.</p>
          )}
        </div>
      ))}
    </main>
  );
}
