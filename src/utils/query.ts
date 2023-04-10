/**
 * @param params query parameters
 * @returns query string to be used as URL segment
 */
export const queryString = (params: { [key: string]: string | number | undefined }): string => {
    // remove empty parameters
    const query: Array<{ key: string, value: string | number }> = [];
    for (const [key, value] of Object.entries(params)) {
        if (!value) continue;
        query.push({ key, value });
    }

    // make query string
    if (query.length > 0) {
        return `?${query.map(({ key, value }) => `${key}=${value}`).join('&')}`;
    }

    return '';
}
