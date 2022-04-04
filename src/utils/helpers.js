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

export { destruct };
