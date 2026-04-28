const form = document.getElementById('contact-form')
const successMsg = document.getElementById('form-success')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const data = new FormData(form)

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })

    if (res.ok) {
      form.style.display = 'none'
      successMsg.style.display = 'block'
    } else {
      alert('Something went wrong. Please try again.')
    }
  } catch (err) {
    alert('Could not send message. Check your connection.')
  }
})