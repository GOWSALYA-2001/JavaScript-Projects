document.addEventListener('DOMContentLoaded',function(){
    const imageElement = document.getElementById('one');
    const messageElement = document.getElementById('message');
    imageElement.addEventListener('click',function(){
        if (messageElement.style.display === 'none' || messageElement.style.display === '') {
            // Show the message
            messageElement.textContent = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
            messageElement.style.display = 'block';
        } else {
            // Hide the message
            messageElement.style.display = 'none';
        }
    })
    const imageEle = document.getElementById('two');
    const messageEle = document.getElementById('messages');
    imageEle.addEventListener('click',function(){
        if(messageEle.style.display === 'none'|| messageEle.style.display===''){
            messageEle.textContent=" Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
            messageEle.style.display = 'block';
        }
        else{
            messageEle.style.display = 'none';
        }
        
    })
        const imagelement = document.getElementById('three')
        const messagelement = document.getElementById('messag')
        imagelement.addEventListener('click',function(){
            if(messagelement.style.display === 'none' || messagelement.style.display === ''){
                messagelement.textContent="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
                messagelement.style.display= 'block';
            }
            else{
                messagelement.style.display = 'none';
            }
        })

        const imgele = document.getElementById('four');
        const msgele = document.getElementById('messa');
        imgele.addEventListener('click',function(){
            if(msgele.style.display==='none'||msgele.style.display===''){
                msgele.textContent="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
                msgele.style.display="block";
            }
            else{
                msgele.style.display = 'none';
            }
        })
    })
  

