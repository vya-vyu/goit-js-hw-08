

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = "feedback-form-state";
const feedbackFromStorage = localStorage.getItem(FEEDBACK_KEY);

if (feedbackFromStorage) { 
    setDataFromLocalStorage(JSON.parse(feedbackFromStorage), form);
} 

form.addEventListener('submit',createSubmit);

function createSubmit(event) { 
    event.preventDefault();
    
    const { email, message } = event.currentTarget.elements;
  
    const objSubmit = {
        email: email.value,
        message:message.value
    }

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(objSubmit));
}


function setDataFromLocalStorage({email,message },parent) { 
    parent.elements.email.value = email;
    parent.elements.message.value = message;
}

