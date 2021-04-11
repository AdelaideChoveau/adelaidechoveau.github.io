
function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }




function main () {

const image = document.createElement('img')
image.src = 'https://image.winudf.com/v2/image/Y29tLkhEV2FsbHBhcGVyLmN1dGVjYXRjX3NjcmVlbl8xXzE1MjQzNzk3MDBfMDM5/screen-1.jpg?fakeurl=1&type=.jpg'    
image.style.border = '10px solid blue'
document.querySelector('.tutor-profile').replaceWith(image)
   
    document.querySelectorAll('.head-line').forEach(x => x.style.color = 'green')
    document.querySelectorAll('.head-line').forEach(x => x.style.background = 'pink') 
}

main()