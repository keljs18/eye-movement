const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 110) / window.innerWidth + '%'; // Calculate the x and y positions as a percentage of the window width and height
  const y = (event.clientY * 110) / window.innerHeight + '%';
    
    for (let i = 0; i < balls.length; i++) { // Loop the position and transform of each ball element
      balls[i].style.left = x // Set the left position of the ball element
      balls[i].style.top = y// Set the top position of the ball element
      balls[i].transform = 'translate(-' + x + ',-' + y + ')'; // Apply the CSS transform to translate the ball element
    } 
};