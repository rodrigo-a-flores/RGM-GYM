export const APIAllProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all products:', error);
    }
};

export const APIProductById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching product by ID (${id}):`, error);
    }
};