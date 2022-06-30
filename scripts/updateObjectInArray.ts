function updateObjectInArray<ObjectShape> (initialArray: ObjectShape[], key: keyof ObjectShape, value: string, patch: Partial<ObjectShape>): ObjectShape[]  {
    const arrCopy = initialArray.slice(0);
    const res = arrCopy.map(obj => {
        if (key in obj && obj[key] === value as any) {
            return {...obj, ...patch};
        }
        return obj;
    })
    return res;
}

console.log(updateObjectInArray<{id: number, text: string}>([{id: 2, text: 'second'}, {id: 3, text: 'third'}, {id: 4, text: 'fourth'}, {id: 5, text: 'fifth'}], 'text', 'fourth', {text: 'updated'}))