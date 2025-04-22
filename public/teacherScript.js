const createForm = document.querySelector("form")

createForm.addEventListener("submit", async(e)=> {
    e.preventDefault()
    const newTeacher = new FormData(createForm)
    const reqBody = Object.fromEntries(newTeacher)

    const response = await fetch("/add/teacher", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody)
    })

    window.location.href = '/'
})
