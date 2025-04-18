async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/RodrigoSantos9916/js-developer-portfolio/main/data/profile.json'
    const response = await fetch(url)
    return await response.json()
}