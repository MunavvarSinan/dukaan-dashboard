import { Input } from "@/components/ui/input"
import { Icons } from "../icons"

const Search = () => {
    return (
        <div className="relative gap-[8px]">
            <Icons.Search className="absolute w-[16px] h-[16px] text-[#808080] left-3 top-1/2 items-center transform -translate-y-1/2" /> 
            <Input
                type="search"
                placeholder="Search features, tutorials, etc."
                className="pl-10 md:w-[250px] lg:w-[400px] rounded-lg bg-[#F2F2F2]"  // Add padding for icon
            />
        </div>
    )
}
export { Search }