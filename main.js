// create a var that will check to see if our keydown event has been initiated
let keydown = false;
let keyB = false;
console.log('hi')


// create a counter var
let counter = 0;
// create an array to keep track of our bookmarks
const bookmarkArray = [];
// create an inner function that sets the bookmark

function placeBm(x, y) {
    
        const image = document.createElement('img');
        // set the image attribute to bm+counter
        image.setAttribute('id', 'bm' + counter);
        bookmarkArray.push('bm' + counter);
        // set image's source
        image.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjd2YW9rOTZxY3Z6YW1qcGpkcWtobWRjc3cxYmJjdXFnaW1ta201NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rdod7XvXQjzCVpiDnR/source.gif';
        
        image.addEventListener('dblclick', () => {
            image.remove();
        })
        // style image and set to top of everything
        // set the width and height of the bookmark
        image.style.position = 'absolute';
        image.style.left = x - 30 + 'px';
        image.style.top = y - 45 + 'px';
        image.style.zIndex = '999999';
        image.style.width = '70px';
        image.style.height = '30px';
        // Append the image to the body
        document.body.appendChild(image);

        console.log('counter: ', counter)
        console.log('bookmark array: ', bookmarkArray)
        
        counter++;
    // create an image and set to img element
}



// event listener to initialize program
window.addEventListener("keydown", (event) => {
    
     if( event.code === "KeyB") { // 91 - Command, 66 - b
        keyB = true;
        console.log('key1');
     }
     else if (keyB && event.code === "KeyC") {
        keydown = true;
        console.log('key#2')
     }
})

// if statement to check if keydown is true
// if true, new event listenter to look for left click event
    // will place bookmark on clicked area
    // set keydown as false

window.addEventListener('click', (event) => {
    if (keydown && keyB) {
        console.log(event.pageX)
        console.log(event.pageY)
        placeBm(event.pageX, event.pageY)
       
        keydown = false;
        keyB = false;
    }
})

// window.addEventListener('dblclick', (event) => {
//     let image_id = document.getElementById()
// })

