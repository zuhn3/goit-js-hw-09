let formData = {
    email: '',
    message: '',
  };
  
  const STORAGE_KEY = 'feedback-form-state';
  
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input');
  const textArea = form.querySelector('textarea');
  form.addEventListener('input', handleInput);
  form.addEventListener('submit', handleSubmit);
  
  function handleInput(event) {
    if (event.target.name === 'email') {
      formData.email = event.target.value.trim();
    }
  
    if (event.target.name === 'message') {
      formData.message = event.target.value.trim();
    }
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  populateForm();
  function populateForm() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
      formData = { ...JSON.parse(savedForm) };
      textArea.value = formData.message;
      emailInput.value = formData.email;
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
      alert('«Fill please all fields»');
    } else {
      console.log(formData);
      formData.email = '';
      formData.message = '';
      localStorage.removeItem(STORAGE_KEY);
      event.currentTarget.reset();
    }
  }