function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.querySelector("#url").value

    if(Client.checkForURL(formText)) {
    console.log("::: Form Submitted :::")

    postData("http://localhost:8081/api", {url: formText})

    .then((res) => {
        document.querySelector("#results").innerHTML = 
        `Agreement:     ${res.agreement} <br />
        Confidence:     ${res.confidence} <br />
        Subjectivity:   ${res.subjectivity} <br />
        Irony:          ${res.irony}`;
    })
    } else {
        alert("Please try with a valid URL.");
    }
}

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("something went wrong!", error);
    }
};

export { handleSubmit }