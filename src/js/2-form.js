
const form = document.querySelector(".feedback-form");
let formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";


const storedData = localStorage.getItem(localStorageKey);
if (storedData) {
    formData = JSON.parse(storedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
    if (evt.target.name === "email") {
        formData.email = evt.target.value.trim();
    } else if (evt.target.name === "message") {
        formData.message = evt.target.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Please fill in all field");
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});

const labels = form.querySelectorAll("label");
const emailInput = form.elements['email'];
const messageTextarea = form.elements['message'];
const submitButton = form.querySelector('button[type="submit"]')

form.style.display = "inline-flex";
form.style.width = "408px";
form.style.height = "296px";
form.style.backgroundColor = "#fff";
form.style.padding = "24px";
form.style.flexDirection = "column";
form.style.alignItems = "flex-start";
form.style.gap = "16px";
form.style.fontFamily = "Montserrat";
form.style.fontSize = "16px";
form.style.color = "#2E2F42";
form.style.lineHeight = "1.5";
form.style.letterSpacing = "0.64px";

labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.alignItems = 'flex-start';
    label.style.gap = '8px';
});

const inputs = [emailInput, messageTextarea];
inputs.forEach((input) => {
    input.style.width = "360px";
    input.style.height = input === emailInput ? "40px" : "80px";
    input.style.padding = "8px";
    input.style.borderRadius = "4px";
    input.style.border = "1px solid #808080";
    input.style.transition = "border-color 0.3s ease";

    input.addEventListener('mouseover', () => {
        input.style.border = "1px solid #000";
    });
    input.addEventListener('mouseout', () => {
        input.style.border = "1px solid #808080";
    });
});

submitButton.style.display = "flex";
submitButton.style.width = "95px";
submitButton.style.height = "40px";
submitButton.style.padding = "8px 16px";
submitButton.style.alignItems = "center";
submitButton.style.justifyContent = "center";
submitButton.style.borderRadius = "8px";
submitButton.style.border = "none";
submitButton.style.color = "#fff";
submitButton.style.fontWeight = "500";
submitButton.style.backgroundColor = "#4E75FF";
submitButton.style.transition = "backgroundColor 0.3s ease"; // 

submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = "#6C8CFF";
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = "#4E75FF";
});