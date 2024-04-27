// Defines the predicate to check if an object is a valid Event type.
export const predicate = (structure) => Boolean(structure) &&
    typeof structure === 'object' &&
    'name' in structure &&
    'execute' in structure &&
    typeof structure.name === 'string' &&
    typeof structure.execute === 'function';
