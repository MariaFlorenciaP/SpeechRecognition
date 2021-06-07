const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result',(e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.innerText = text;
        texts.appendChild(p);
        if(e.results[0].isFinal){
            if(text.includes('hello') || text.includes('hi')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        if(text.includes('what is your name') || text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Maria and yours?';
            texts.appendChild(p);
        }

        if(text.includes('open my YouTube channel')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening your channel';
            texts.appendChild(p);
            window.open('https://youtube.com');
        }
        
        p = document.createElement('p');
    }

        console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})
recognition.start();