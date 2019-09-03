export declare const merge: {
    <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
    <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
    <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
    (object: any, ...otherArgs: any[]): any;
};
export declare const range: {
    (start: number, end?: number | undefined, step?: number | undefined): number[];
    (end: number, index: string | number, guard: object): number[];
};