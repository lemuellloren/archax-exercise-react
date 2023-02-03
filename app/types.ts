
export type Applications = {
    id: string;
    name: string;
    spend: number;
    BCAP1: string;
    BCAP2: string;
    BCAP3: string;
};

export interface ApplicationData {
    data: Applications[];
}

export interface ApplicationNavProps {
    item: any;
    setItem: Function;
    data: Applications[];
}
