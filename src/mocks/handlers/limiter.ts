export type QueryLimiterType = {
    start?: string;
    end?: string;
}

const DEFAULT_PAGE_SIZE = 12;

export function limit<T>(data: T[], limits: QueryLimiterType) {
    const { start = 0, end = DEFAULT_PAGE_SIZE } = limits;

    try {
        return data.slice(+start, +end);    
    } catch (e: any) {
        console.error(e.message ?? JSON.stringify(e));
        return [];
    }
}
