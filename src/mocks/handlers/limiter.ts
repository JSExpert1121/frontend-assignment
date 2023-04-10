export type QueryLimiterType = {
    start?: string;
    size?: string;
}

const DEFAULT_PAGE_SIZE = 12;

export function limit<T>(data: T[], limits: QueryLimiterType) {
    const { start = 0, size = DEFAULT_PAGE_SIZE } = limits;

    try {
        return data.slice(+start, +start + +size);
    } catch (e: any) {
        console.error(e.message ?? JSON.stringify(e));
        return [];
    }
}
