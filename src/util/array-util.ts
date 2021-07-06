const SortByProperty = (property, order) => {
    const sortOrder = order || 1;

    return (a, b) => {
        let result = 0;
        if (a[property] < b[property]) {
            result = -1;
        } else if (a[property] > b[property]) {
            result = 1;
        } else {
            result = 0;
        }

        return result * sortOrder;
    };
};

export const ArrayUtil = {
    SortByProperty,
};
