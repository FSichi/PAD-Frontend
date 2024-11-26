export interface SelectOption {
    label: string;
    value: string | number | boolean | null;
}

export interface FilterConfig {
    key: string;
    type: FilterType;
    label: string;
    selectProperties?: {
        options: SelectOption[];
        defaultValue: SelectOption;
        placeholder?: string;
        menuSize?: number;
        isSerchable?: boolean;
    };
    containerStyles?: string;
}

export interface FilterComponentProps {
    filter: FilterConfig;
    handleSetFilter: HandleSetFilterType;
}

export interface IFilterComponents {
    [key: string]: (props: FilterComponentProps) => JSX.Element;
}

export type HandleSetFilterType = (filter: FilterConfig, value: SetFilterValueType) => void;
export type FilterType = 'text' | 'select' | 'multiSelect' | 'date' | 'rangeDate';
export type SetFilterValueType = string | RangeDateValue;
export type RangeDateValue = { start: string; end: string };
