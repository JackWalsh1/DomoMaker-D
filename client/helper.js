const handleError = (message) => {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('domoMessage').classList.remove('hidden');
  };
  
  // sends post and then reacts accordingly based on response
  const sendPost = async (url, data, handler) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    document.getElementById('domoMessage').classList.add('hidden');
  
    if(result.redirect) {
      window.location = result.redirect;
    }
  
    if(result.error) {
      handleError(result.error);
    }

    if (handler) {
        handler(result);
    }
  };

  const hideError = () => {
    document.querySelector("#domoMessage").classList.add('hidden');
  }

  module.exports = {
    handleError,
    sendPost,
    hideError
  }