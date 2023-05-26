'use client'
import dynamic from 'next/dynamic';

const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});

export default function Page() {
  return (
    <div className="fr-container">
      <FluxMap />
    </div>
  )
}
