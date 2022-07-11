

 
    export const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=QOOOk5M6e4xXS5jjVnYU74I30N6c4U3p`
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img =>  {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })

        return gifs;
    
    }