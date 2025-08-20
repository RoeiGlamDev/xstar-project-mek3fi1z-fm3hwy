import { useEffect, useState } from 'react';

export const useFetchProducts = (url: string) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [url]);

    return { products, loading, error };
};

export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format to currency
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const filterProductsByCategory = (products: any[], category: string) => {
    return products.filter(product => product.category === category);
};