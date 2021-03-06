const insertPageBody = (SNIPPET) =>
{
    return new Promise((resolve, reject) =>
    {
        let client = new XMLHttpRequest();
        client.onload = (e) => 
        {
            document.getElementById('page-content').innerHTML = client.responseText;
            console.log('page body inserted');
            resolve();
        }
        client.open('GET', SNIPPET);
        client.send();
    })
}