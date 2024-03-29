let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longURL)}`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            if (data.shorturl) {
                shortURL.value = data.shorturl;
            } else {
                throw new Error('Shortened URL not found in response');
            }
        } else {
            throw new Error(`Failed to shorten URL: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}
