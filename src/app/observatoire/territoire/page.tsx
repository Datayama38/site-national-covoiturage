'use client'
import dynamic from "next/dynamic";
import PageTitle from "@/components/common/PageTitle";
import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});

export default async function Page({searchParams}: {searchParams:SearchParamsInterface}) {
  const title = 'Observer un territoire';
  const fluxMapTitle = 'Flux de trajets';
  return (
    <article id='content'>
      <PageTitle title={title} />
      <FluxMap title={fluxMapTitle} params={searchParams}/>
    </article>
  )
}
