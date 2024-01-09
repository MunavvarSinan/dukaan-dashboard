"use client"
import { AnalyticsCard } from '@/components/dashboard/analytics-card'
import { AnalyticsData } from '@/components/dashboard/analytics-data-table'
import { PageHeader } from '@/components/dashboard/page-header'
import { Header } from '@/components/ui/header'

export default function Home() {
  return (
    <>
      <Header />
      <div className='py-[32px] px-[32px] '>
        <div className='gap-[24px]'>
          <PageHeader pageTitle='Overview' switcherTitle='Last Month' />
          <div className="grid md:grid-cols-2 gap-[20px] pt-10">
            <AnalyticsCard title='Online orders' value='231' />
            <AnalyticsCard title='Amount received' value='₹23,92,312.19' />
          </div>
          <div className='pt-10'>
            <PageHeader pageTitle='Transactions | This Month' />
            <AnalyticsData  />
          </div>
        </div>
      </div>
    </>
  )
}
