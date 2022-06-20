async function getResource (url) {
    const result = await fetch(url);
    if (!result.ok) {
        throw new Error(`Could no Fetch ${url}, status ${result.status}`);
    }
    return await result.json();
}
async function postData (url, data)  {
    const result = await fetch(url, {
        method: 'POST',
        body: data,                 
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await result.json();
}
export {getResource, postData};