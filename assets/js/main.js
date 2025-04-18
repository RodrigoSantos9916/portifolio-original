function updateProfileInfo(profileData) {
    const job = document.getElementById('profile-job')
    job.innerText = profileData.job

    const location = document.getElementById('profile-location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile-phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-skills-softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile-languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortifolio(profileData) {
    const portifolio = document.getElementById('profile-portifolio')
    portifolio.innerHTML = profileData.portfolio.map(project => {
        return `<li><h3 class="sobre-title ${project.github ? 'github' : ''}">${project.name}</h3><a href="${project.url}" target="_blank">https://github.com/RodrigoSantos9916/</a></li>`
        }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile-experience')
    experience.innerHTML = profileData.professionalExperience.map(experience => {
        return `<li><span class="sobre-title github">${experience.name}</span><span class="period"><h3>${experience.period}</h3></span><p>${experience.description}</p></li>`}).join('')
}

function updateEducation(profileData) {
    const education = document.getElementById('profile-education')
    education.innerHTML = profileData.education.map(education => {
        return `<li><h3>${education.name}</h3><p>${education.description}</p></li>`
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortifolio(profileData)
    updateExperience(profileData)
    updateEducation(profileData)
})()