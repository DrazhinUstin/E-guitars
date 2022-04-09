import { useState, useEffect } from 'react';
import { destruct } from '../utils/helpers';

const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const useContentful = (entryID) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                if (entryID) {
                    const response = await client.getEntry(entryID);
                    setData(...destruct([response]));
                } else {
                    const response = await client.getEntries({
                        content_type: 'eCommerceReact',
                    });
                    setData(destruct(response.items));
                }
                setIsError(false);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        getData();
    }, [entryID]);

    return { isLoading, isError, data };
};

export default useContentful;
