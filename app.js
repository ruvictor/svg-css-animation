const smile = document.querySelectorAll("#smile path");

for(let i = 0; i<smile.length; i++){
    console.log(`Smile ${i} is ${smile[i].getTotalLength()}`);
}