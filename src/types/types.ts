export interface ChipItem {
    label: string,
    caption: string,
    id: number,
    disabled: boolean,
    active: boolean,
}

export interface CountryItem {
    name: string,
    flag: string,
    id: number,
    active: boolean,
    chips: Array<ChipItem>,
    selectedChips: Array<ChipItem>,
    tips: Array<tipItem>,
}

export interface tipItem {
    title: string,
    color: string,
    progressColor: string,
    progressBar: string,
    active: boolean,
    checked: boolean,
    progress: number,
    childTips: Array<ChildTip>,
}

export interface ChildTip {
    title: string,
    checked: boolean,
    userTips: Array<UserTip>
}

export interface UserTip {
    ava: string,
    name: string,
    caption: string,
    date: string,
}

export interface BreadcrumbsItem {
    title: string,
    caption: string,
    active: boolean,
    id: number,
    loading: boolean,
}

export enum tipColors {
    RENTAPPARTMENTbackground ='#F9F5F2',
    RENTAPPARTMENTprogress ='#EFE4DC',
    RENTAPPARTMENTbar ='#C6A083',
    RESIDENCEPERMITbackgound = '#F2F6F7',
    RESIDENCEPERMITprogress = '#DBE6E7',
    RESIDENCEPERMITbar = '#81A8AD',
    SCHOOLbackground = '#F6F3F9',
    SCHOOLprogress = '#EBE9F0',
    SCHOOLbar = '#A78FC5FF',
}
