type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [p in T[number]]: p;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = TupleToObject<typeof tuple>;