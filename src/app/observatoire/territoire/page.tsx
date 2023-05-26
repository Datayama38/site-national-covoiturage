'use client'
import dynamic from 'next/dynamic';
import PageTitle from "@/components/common/PageTitle";

const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});

export default function Page() {
  const title = 'Observer un territoire';
  return (
    <article id='content'>
      <PageTitle title={title} />
      <FluxMap />
    </article>
  )
}
