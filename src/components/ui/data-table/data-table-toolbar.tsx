"use client"

import { Table } from '@tanstack/react-table'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils'
import { Search } from '../search'
import { Icons } from '@/components/icons'

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    searchKey: string
}


export function DataTableToolbar<TData>({
    table,
    searchKey
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <div className="relative gap-[8px]">
                    <Icons.Search className="absolute w-[16px] h-[16px] text-[#808080] left-3 top-1/2 items-center transform -translate-y-1/2" />
                    <Input
                        type="search"
                        placeholder={`Filter ${searchKey} ...`}
                        value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn(searchKey)?.setFilterValue(event.target.value)
                        }
                        className="pl-10 md:w-[250px] lg:w-[400px] rounded-lg bg-[#F2F2F2]"  // Add padding for icon
                    />
                </div>
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Icons.Close className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto flex h-8 "
                >
                    <Icons.Sort className="mr-2 h-4 w-4" />
                    Sort
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto flex h-8 "
                >
                    <Icons.Download className=" h-4 w-4 " />
                </Button>
            </div>
        </div >
    )
}