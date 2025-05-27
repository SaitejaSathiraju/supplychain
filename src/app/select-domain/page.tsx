'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { DOMAINS_WITH_SUBDOMAINS } from '@/data/domainsWithSubdomains';


export default function SelectDomainPage() {
  const router = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleSelectDomain = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleSelectSubdomain = (subdomain: string) => {
    router.push(
      `/supplychain-builder?domain=${encodeURIComponent(selectedDomain ?? '')}&subdomain=${encodeURIComponent(subdomain)}`
    );
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Select a Domain</h1>
      {!selectedDomain ? (
        <div className="space-y-4">
         {DOMAINS_WITH_SUBDOMAINS?.map(({ domain }) => (
  <button
    key={domain}
    onClick={() => handleSelectDomain(domain)}
    className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    type="button"
  >
    {domain}
  </button>
)) || <p>No domains available.</p>}

        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Select a Subdomain for {selectedDomain}</h2>
          <div className="space-y-4">
            {DOMAINS_WITH_SUBDOMAINS.find(({ domain }) => domain === selectedDomain)?.subdomains.map((subdomain) => (
              <button
                key={subdomain}
                onClick={() => handleSelectSubdomain(subdomain)}
                className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {subdomain}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSelectedDomain(null)}
            className="mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back to Domains
          </button>
        </>
      )}
    </main>
  );
}
