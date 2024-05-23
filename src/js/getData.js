export async function getData(){
    try {
        const response = await fetch("https://search.imdbot.workers.dev/?q=starwars");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Productos obtenidos:', data.description);
        return data.description;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}

export async function getDataDetails(id){
    try {
        const response = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Productos obtenidos:', data);
        return data.description;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}