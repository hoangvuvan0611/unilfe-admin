import {useTheme} from "@mui/material/styles";
import {useState} from "react";
import { CiFilter } from "react-icons/ci";
import SortSelector from "./SortSelector.tsx";
import CategoryFilter from "./CategoryFilter.tsx";
import PriceRange from "./PriceRange.tsx";
import StatusFilter from "./StatusFilter.tsx";

export interface FilterState {
    categories: string[];
    price: [number, number];
    statuses: string[];
}

export default function FilterBox() {

    const theme = useTheme();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [activeFilters, setActiveFilters] = useState<FilterState>({
        categories: [],
        price: [25000, 980000],
        statuses: [],
    });

    const getActiveFilterCount = () => {
        let count = 0;
        if (activeFilters.categories.length > 0) count += 1;
        if (activeFilters.price[0] !== 25000 || activeFilters.price[1] !== 980000) count += 1;
        if (activeFilters.statuses.length > 0) count += 1;
        return count;
    };

    const handleFilterChange = (filters: FilterState) => {
        setActiveFilters(filters);
        // onFilterChange?.(filters);
    };

    return (
        <div
            style={{backgroundColor: theme.palette.background.container}}
            className={'filter-box mt-2 rounded-md flex flex-col'}
        >
            {/* Header: thong tin header */}
            <div className="flex items-center justify-between py-1 px-4">
                {/* Left side - Filter button */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`
                            flex items-center gap-2 rounded-md border 
                            transition-all duration-300 ease-in-out
                            font-bold
                            ${isExpanded
                                ? 'border-gray-900 bg-gray-50'
                                : 'hover:border-gray-400'
                            }
                        `}
                    >
                        <CiFilter size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        <text className={'text-xs'}>Bộ lọc</text>
                        {getActiveFilterCount() > 0 && (
                            <text className="ml-1 px-1 py-0.5 bg-gray-900 text-white text-xs rounded-full">
                                {getActiveFilterCount()}
                            </text>
                        )}
                    </button>
                </div>

                {/* Right side - View type and Sort */}
                <div className="flex items-center gap-4">
                    {/*<ViewTypeSelector onChange={onViewChange} />*/}
                    <SortSelector onChange={() => {}} />
                </div>
            </div>
            <div
                className={`
                    grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out px-4
                    ${isExpanded ? 'grid-rows-[1fr]' : ''}
                `}
            >
                <div className="overflow-hidden">
                    <div
                        className={`
                            py-6 space-y-6 border-t
                            transition-all duration-300 ease-in-out
                            ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                        `}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <CategoryFilter
                                onChange={(categories: string[]) =>
                                    handleFilterChange({ ...activeFilters, categories })}
                            />
                            <PriceRange
                                value={activeFilters.price}
                                onChange={(price: [number, number]) =>
                                    handleFilterChange({ ...activeFilters, price })}
                            />
                            <StatusFilter
                                onChange={(statuses: string[]) =>
                                    handleFilterChange({ ...activeFilters, statuses })}
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setActiveFilters({
                                        categories: [],
                                        price: [25000, 980000],
                                        statuses: [],
                                    });
                                    setIsExpanded(false);
                                }}
                                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                Đặt lại
                            </button>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="bg-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                Xong
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}