"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface AnalyticsCardProps {
    title: string
    value: string
}

const AnalyticsCard = ({
    title,
    value
}: AnalyticsCardProps) => {
    return (
        <Card className='shadow-md'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[16px] font-normal text-[#4D4D4D]">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-[32px] font-semibold">{value}</div>
            </CardContent>
        </Card>
    )
}

export { AnalyticsCard }