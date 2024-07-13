
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];
        let passwordLength = 15;
        let passwordElOne = document.querySelector('.password-el-one');
        let passwordElTwo = document.querySelector('.password-el-two');
        function randomPassword() {
            let randomIndex = Math.floor(Math.random() * characters.length);
            return characters[randomIndex];
        }
        function passwordGenerator() {
             let passwordString = "";
            for (i = 0; i <= passwordLength; i++) {
                passwordString += randomPassword()
             }
              return passwordString;
            }
        function renderPassword() {
            passwordElOne.textContent = ''
            passwordElTwo.textContent = ''
            passwordElOne.textContent += passwordGenerator();
            passwordElTwo.textContent += passwordGenerator();
        }