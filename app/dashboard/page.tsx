// React Server Components - Async Data Fetching

import { Suspense } from 'react'
import { fetchCardData, fetchLatestInvoices } from '../lib/data'
import LatestInvoices from '../ui/dashboard/latest-invoices'
import RevenueChart from '../ui/dashboard/revenue-chart'
import { lusitana } from '../ui/fonts'
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '../ui/skeletons'
import CardWrapper, { Card } from '../ui/dashboard/cards'

export default async function Page() {
  // esto funciona ya
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // console.log(json)
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData()
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* // streaming de html */}
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}
