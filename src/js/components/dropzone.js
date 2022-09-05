const dragArea = document.querySelector('.preview-image-container')
const file = document.querySelector('#file')
const text = document.querySelector('.motionText')
const brouseBtn = document.querySelector('#dropA')
let myFiles


brouseBtn.addEventListener('click', () => {
    file.click()
})
file.addEventListener('change', function () {
    console.log("aa")
    myFiles = this.files[0]
    dragArea.classList.add('dropped')
    showfile();
})
dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragArea.classList.add('dropped')
    text.innerHTML = 'ჩააგდე ან ატვირთე ლეპტოპის ფოტო'
})
dragArea.addEventListener('dragleave', () => {
    dragArea.classList.remove('dropped')
    text.innerHTML = 'ჩააგდე და ატვირთე ლეპტოპის ფოტო'
})

dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    myFiles = e.dataTransfer.files[0]
    showfile()
})

function showfile() {
    const fileType = myFiles.type
    const arr = ['image/png', 'image/jpeg', 'image/jpg']

    if (arr.includes(fileType)) {
        let filereader = new FileReader()
        filereader.onload = () => {
            let imgUrl = filereader.result;
            let img = `<img src="${imgUrl}" alt="">`
            dragArea.innerHTML = img
        }
        filereader.readAsDataURL(myFiles)
    } else {
        alert('format doesnt match')
    }

}