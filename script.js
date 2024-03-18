let currentRotationX = 15;
let currentRotationY = 15;

function rotateCube(direction) {
  const cube = document.querySelector('.cube');
  switch (direction) {
    case 'left':
      currentRotationY -= 90;
      break;
    case 'right':
      currentRotationY += 90;
      break;
    case 'up':
      currentRotationX -= 90;
      break;
    case 'down':
      currentRotationX += 90;
      break;
    default:
      break;
  }
  cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
}
