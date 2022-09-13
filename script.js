const { body } = document
console.log(body)
function changeBackground(number) {
  // Check if background is showing
  let previousBackground
  if (body.className) {
    previousBackground = body.className
  }
  // Reset css class
  body.className = ''
  console.log(number)
  switch (number) {
    case '1':
      return previousBackground === 'background-1'
        ? false
        : body.classList.add('background-1')
    case '2':
      return previousBackground === 'background-2'
        ? false
        : body.classList.add('background-2')
    case '3':
      return previousBackground === 'background-3'
        ? false
        : body.classList.add('background-3')

    default:
      break
  }
}
