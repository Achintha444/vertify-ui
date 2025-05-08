/**
 * Flattens an object into a single-level object with prefixed keys
 * 
 * @param tokens The tokens object to flatten
 * @param prefix Optional prefix for the keys
 * 
 * @returns A flattened object with all values accessible at the top level
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flattenTokens = (tokens: Record<string, any>, prefix = ''): Record<string, string> => {
    return Object.entries(tokens).reduce((acc, [key, value]) => {
        const newKey = prefix ? `${prefix}-${key}` : key;

        if (typeof value === 'string' || typeof value === 'number') {
            acc[newKey] = String(value);
        } else if (value !== null && typeof value === 'object') {
            Object.assign(acc, flattenTokens(value, newKey));
        }

        return acc;
    }, {} as Record<string, string>);
};
