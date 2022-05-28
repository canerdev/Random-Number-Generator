// css 

const lower = document.querySelector('#lower')
const upper = document.querySelector('#upper')
const time = document.querySelector('#numbers')
const generateBtn = document.querySelector('#generateBtn')
const resetBtn = document.querySelector('#resetBtn')
const result = document.querySelector('#result')

const generate = () => {
    event.preventDefault()

    // check the numbers 
    if (Number(lower.value) >= Number(upper.value)) {
        result.innerHTML = "the lower number must be lower than the upper number"
        result.classList.add('bg-danger')
    } else if (Number(time.value) <= 0) {
        result.innerHTML = 'please enter a positive number'
        result.classList.add('bg-danger')
    } else if (Number(time.value) > (Number(upper.value) - Number(lower.   value) + 1)) {
        result.innerHTML = "i cannot pick that many numbers" 
        result.classList.add('bg-danger')
    } else if (lower.value && upper.value) {
        picker()
    }

    function picker() {
        const numbers = []
        for(let i = Number(lower.value); i <= Number(upper.value); i++) {
            numbers.push(i)
        }
        console.log(numbers)
        
        const pickedNumbers = []
        for (let i = 0; i < Number(time.value); i++) {
            let randomNumber = Math.floor(Math.random() * numbers.length)
            pickedNumbers.push(numbers[randomNumber])
            numbers.splice(randomNumber, 1)
            result.innerHTML = pickedNumbers.join(' - ') 
            result.classList.add('bg-dark')
        }
    }
}

generateBtn.addEventListener('click', generate)
resetBtn.addEventListener('click', () => {
    result.innerHTML = ''
    result.classList.remove('bg-dark')
    result.classList.remove('bg-danger') 
})

