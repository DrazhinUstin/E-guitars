const destruct = (data) => {
    return data.map((item) => {
        const {
            sys: { id },
            fields: {
                brand,
                caseIncluded,
                color,
                description,
                design,
                features,
                inFeatured,
                price,
                stock,
                title,
            },
        } = item;
        const images = item.fields.images.map((image) => image.fields.file.url);
        return {
            id,
            brand,
            caseIncluded,
            color,
            description,
            design,
            features,
            inFeatured,
            price,
            stock,
            title,
            images,
        };
    });
};

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100);
};

const getUniqueValues = (data, key) => {
    const values = data.map((item) => item[key]).sort();
    return ['all', ...new Set(values)];
};

const defineElemHeight = (elem) => {
    let elemHeight = 0;
    [...elem.children].forEach((child) => {
        elemHeight += child.offsetHeight;
    });
    return `${elemHeight}px`;
};

const getStorageItem = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

const setStorageItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export { destruct, formatPrice, getUniqueValues, defineElemHeight, getStorageItem, setStorageItem };
