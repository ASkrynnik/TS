const container = document.querySelector('.container');

interface responce {
    userId: number, 
    id: number, 
    title: string
}

const getItems = async (url: string): Promise<responce[]> => {
    const data = await fetch(url).then(data => data.json());
    return data;
}

getItems('https://jsonplaceholder.typicode.com/posts').then(res => {
    res.forEach(post => {
        container?.insertAdjacentHTML('beforeend', `<p>${post.title}</p>`);
    })
});
