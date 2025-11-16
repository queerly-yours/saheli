/**
 * Filters an array of objects based on a list of IDs.
 * @param items The array of objects to filter.
 * @param ids The array of string IDs to filter by.
 * @param key The key in the objects that holds the ID.
 * @returns A new array containing only the filtered items.
 */
export function filterByIds<T>(items: T[], ids: string[], key: keyof T): T[] {
    const idSet = new Set(ids);
    return items.filter(item => idSet.has(String(item[key])));
}

/**
 * Filters an array of objects where a specified key (which is an array of strings) contains any of the given IDs.
 * @param items The array of objects to filter.
 * @param ids The array of string IDs to check for within the key's array.
 * @param key The key in the objects that holds the array of strings to check against.
 * @returns A new array containing only the filtered items.
 */
export function filterByArrayKeyAndIds<T>(items: T[], ids: string[], key: keyof T): T[] {
    const idSet = new Set(ids);
    const filteredItems = items.filter(item => {
        const arrayValue = item[key];
        if (Array.isArray(arrayValue)) {
            return arrayValue.some(val => idSet.has(String(val)));
        }
        return false;
    });

    return filteredItems;
}

export enum ParamType {
    Category = 'category',
    SubCategory = 'subcategory',
    Archive = 'archive'
}
