import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = "feedback-form-state";
const feedbackFromStorage = localStorage.getItem(FEEDBACK_KEY);
const objFeedbackStorage = {};

form.addEventListener('input', throttle(createFeedbackStorage, 500));


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

    console.log(objSubmit);
    localStorage.clear();
    email.value = '';
    message.value = '';
    
    
}

function createFeedbackStorage(event) { 
    
    objFeedbackStorage[event.target.name] = event.target.value; 
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(objFeedbackStorage));
}


function setDataFromLocalStorage(obj, parent) {   

    if (obj.email) {
        parent.elements.email.value=obj.email;
        objFeedbackStorage.email = obj.email;
        localStorage.setItem(FEEDBACK_KEY, JSON.stringify(objFeedbackStorage));
    } else { 
        parent.elements.email.value = '';
    }

    if (obj.message) {
        parent.elements.message.value = obj.message;
        objFeedbackStorage.message = obj.message;
        localStorage.setItem(FEEDBACK_KEY, JSON.stringify(objFeedbackStorage));
    } else { 
        parent.elements.message.value = '';
    }
}

