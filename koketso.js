function showMessage(rating) {
    const messageElement = document.getElementById('message');
    if (rating === 1) {
      messageElement.textContent = "Thank you for rating 1!";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }

  function showMessage(rating) {
    const messageElement = document.getElementById('message');
    if (rating === 1) {
      // Display the success message
      messageElement.textContent = "The truth always comes out!";
      messageElement.style.color = "green";
  
      // Trigger fireworks using Canvas Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      // Display the error message
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }

  function showMessage(rating) {
    const messageElement = document.getElementById('message');
    const ratingContainer = document.querySelector('.rating-container');
    const body = document.body;
  
    if (rating === 1) {
      // Hide all other elements
      ratingContainer.style.display = 'none';
      messageElement.style.display = 'none';
  
      // Create a new container for the "1" button
      const popupContainer = document.createElement('div');
      popupContainer.style.display = 'flex';
      popupContainer.style.flexDirection = 'column';
      popupContainer.style.justifyContent = 'center';
      popupContainer.style.alignItems = 'center';
      popupContainer.style.height = '100vh';
      popupContainer.style.backgroundColor = '#f3f4f6';
  
      // Create the "1" button
      const oneButton = document.createElement('button');
      oneButton.textContent = '1';
      oneButton.style.padding = '20px 40px';
      oneButton.style.fontSize = '3rem';
      oneButton.style.fontWeight = 'bold';
      oneButton.style.color = 'white';
      oneButton.style.backgroundColor = '#4caf50';
      oneButton.style.border = 'none';
      oneButton.style.borderRadius = '10px';
      oneButton.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
      oneButton.style.cursor = 'default';
  
      // Create the success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'The truth always comes out!';
      successMessage.style.marginTop = '20px';
      successMessage.style.fontSize = '2rem';
      successMessage.style.color = '#4caf50';
      successMessage.style.fontWeight = 'bold';
  
      // Append the button and message to the popup container
      popupContainer.appendChild(oneButton);
      popupContainer.appendChild(successMessage);
  
      // Append the popup container to the body
      body.appendChild(popupContainer);
  
      // Trigger fireworks using Canvas Confetti
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    } else {
      // Display the error message
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }

  function showMessage(rating) {
    const messageElement = document.getElementById('message');
    const ratingContainer = document.querySelector('.rating-container');
    const body = document.body;
  
    if (rating === 1) {
      messageElement.textContent = "The truth always comes out!";
      messageElement.style.color = "green";
  
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    } else {
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }
  
  function goHome() {
    const body = document.body;
  
    // Add the shredding effect
    body.classList.add('shred-effect');
  
    // Reload the page after the animation
    setTimeout(() => {
      location.reload();
    }, 1000); // Wait for the animation to complete
  }

  function showMessage(rating) {
    const messageElement = document.getElementById('message');
    const ratingContainer = document.querySelector('.rating-container');
    const body = document.body;
  
    if (rating === 1) {
      // Hide all other elements
      ratingContainer.style.display = 'none';
      messageElement.style.display = 'none';
  
      // Create a new container for the success message
      const successContainer = document.createElement('div');
      successContainer.style.display = 'flex';
      successContainer.style.flexDirection = 'column';
      successContainer.style.justifyContent = 'center';
      successContainer.style.alignItems = 'center';
      successContainer.style.height = '100vh';
      successContainer.style.backgroundColor = '#f3f4f6';
  
      // Create the success message
      const successMessage = document.createElement('h1');
      successMessage.textContent = 'The truth always comes out!';
      successMessage.style.fontSize = '3rem';
      successMessage.style.color = '#4caf50';
      successMessage.style.fontWeight = 'bold';
      successMessage.style.textAlign = 'center';
  
      // Append the success message to the container
      successContainer.appendChild(successMessage);
  
      // Append the container to the body
      body.appendChild(successContainer);
  
      // Trigger fireworks using Canvas Confetti
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    } else {
      // Display the error message
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }

  function showMessage(rating) {
    const messageElement = document.getElementById('message');
    const ratingContainer = document.querySelector('.rating-container');
    const body = document.body;
  
    if (rating === 1) {
      // Hide all other elements
      ratingContainer.style.display = 'none';
      messageElement.style.display = 'none';
  
      // Create a new container for the success message
      const successContainer = document.createElement('div');
      successContainer.style.display = 'flex';
      successContainer.style.flexDirection = 'column';
      successContainer.style.justifyContent = 'center';
      successContainer.style.alignItems = 'center';
      successContainer.style.height = '100vh';
      successContainer.style.backgroundColor = '#f3f4f6';
      successContainer.style.animation = 'fadeIn 1s ease-in-out';
  
      // Create the success message
      const successMessage = document.createElement('h1');
      successMessage.textContent = 'The truth always comes out!';
      successMessage.style.fontSize = '3rem';
      successMessage.style.color = '#4caf50';
      successMessage.style.fontWeight = 'bold';
      successMessage.style.textAlign = 'center';
      successMessage.style.animation = 'fadeIn 1s ease-in-out';
  
      // Append the success message to the container
      successContainer.appendChild(successMessage);
  
      // Append the container to the body
      body.appendChild(successContainer);
  
      // Trigger fireworks using Canvas Confetti
      confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.6 }
      });
    } else {
      // Display the error message
      messageElement.textContent = `Sorry, this person doesn't deserve this number (${rating}).`;
      messageElement.style.color = "red";
    }
  }