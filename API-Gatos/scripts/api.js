const options = {
    headers: {
        'x-api-key': 'live_qrmE3aEsUtIS7TIL0d1OH3kJJZlhP6UIyCtP2oOJR6ClAgtpYMufG9KsfgZij27s'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status);
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        }
    }catch(error) {
        console.error(error);
    }
}

export async function getBreedImage(imageId) {
    const apiImageUrl = `https://api.thecatapi.com/v1/images/${imageId}`;
    try {
        const response = await fetch(apiImageUrl); 
        if(!response.ok) {
            throw new Error("Error " + response.status);
        }
        return await response.json();
    }catch(error) {
        console.error(error);
    }
}