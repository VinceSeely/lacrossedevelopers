// Defines the predicate to check if an object is a valid Command type
export const predicate = (structure) => Boolean(structure) &&
    typeof structure === 'object' &&
    'data' in structure &&
    'execute' in structure &&
    typeof structure.data === 'object' &&
    typeof structure.execute === 'function';
