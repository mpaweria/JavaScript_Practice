const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value === null )
    {
        messages.push("No name entered")
    }

    if(password.value.length < 6)
        messages.push("Password too small")
    else if(password.value.length > 12)
        messages.push("Password too large")

    if(password.value === 'password')
        messages.push("Password can't be set to password")

    if(messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(' , ')
    }
})