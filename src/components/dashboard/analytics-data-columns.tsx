"use client"

import { data } from "@/constants"
import type { ColumnDef } from "@tanstack/react-table";
import { Icons } from "../icons";

// the data is a single object so create such 100 objects in an array called AnalyticsData


type AnalyticsDataInterface = {
    order_id: string;
    order_date: string;
    order_amount: string;
    transaction_fees: string;
}



export const columns: ColumnDef<AnalyticsDataInterface>[] = [
    {
        accessorKey: "order_id",
        header: ({ column }) => (
            <div className="space-x-4">
                <div className="flex justify-center gap-[6px]">
                    <p>Order ID</p>
                </div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex justify-center">
                <p>
                    <span className="text-[#4089c2]">{row.original.order_id}</span>
                </p>
            </div>
        ),
    },
    {
        accessorKey: "order_date",
        header: ({ column }) => (
            <div className="space-x-4">
                <div className="flex justify-center gap-[6px]">
                    <p>Order Date</p>
                    <Icons.Sort className="h-4 w-4" />
                </div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex justify-center">
                <p>
                    <span>{row.original.order_date}</span>
                </p>
            </div>
        ),
    },
    {
        accessorKey: "order_amount",
        header: ({ column }) => (
            <div className="space-x-4">
                <div className="flex justify-center gap-[6px]">
                    <p>Order Amount</p>
                </div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex justify-center">
                <p>
                    <span>{row.original.order_amount}</span>
                </p>
            </div>
        ),
    },
    {
        accessorKey: "transaction_fees",
        header: ({ column }) => (
            <div className="space-x-4">
                <div className="flex justify-center gap-[6px]">
                    <p>Transaction fees</p>
                    <Icons.AlertCircle className="h-4 w-4" />
                </div>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex justify-center">
                <p>
                    <span>{row.original.transaction_fees}</span>
                </p>
            </div>
        ),

    }
]
