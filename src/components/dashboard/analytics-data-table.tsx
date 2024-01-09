"use client"

import { useState } from "react"
import { DataTable } from "../ui/data-table/data-table"
import { columns } from "./analytics-data-columns"
import { data } from "@/constants"

const AnalyticsData = () => {
    const AnalyticsData = Array(100).fill(data)

    return (
        <div className="pt-3">
            <DataTable
                columns={columns}
                data={AnalyticsData}
                searchKey="order_id"
            />
        </div>
    )
}

export { AnalyticsData }