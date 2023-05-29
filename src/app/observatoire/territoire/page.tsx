'use client'
import dynamic from "next/dynamic";
import PageTitle from "@/components/common/PageTitle";
const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});

export default async function Page({searchParams}: {searchParams: {code: string, type: string, observe: string, year: number, month: number}}) {
  const title = 'Observer un territoire';
  return (
    <article id='content'>
      <PageTitle title={title} />
      <FluxMap props={searchParams}/>
    </article>
  )
}
