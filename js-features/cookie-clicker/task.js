        const cookies = document.getElementById('cookie');
        const count = document.getElementById('clicker__counter');
        
        // Переменные
        let clicks = 0;
        let isBigest = true; 
        let Step = 14;

        // Обработчик клика
        cookies.onclick = function() {
            clicks++;
            count.textContent = clicks;
          
        let widthAtt = cookie.getAttribute('width');
        let currentWidth = parseInt(widthAtt);
          let newWidth;
            if (isBigest) {
                newWidth = currentWidth - Step; 
            } else {
                newWidth = currentWidth + Step;               
            }
            
            cookie.setAttribute('width', newWidth);
            cookie.setAttribute('height', newWidth);   
            isBigest = !isBigest; 
        }
            