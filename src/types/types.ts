export interface ChipItem {
    label: string,
    id: number,
    disabled: boolean,
}

export interface CountryItem {
    name: string,
    flag: string,
    id: number,
    active: boolean,
    chips: Array<ChipItem>,
    selectedChips: Array<ChipItem>,
}

export interface BreadcrumbsItem {
    title: string,
    caption: string,
    active: boolean,
    id: number,
    loading: boolean,
}
