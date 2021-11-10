function showVerticalMessage(str, maxlength) {
        
        let firstLetter;

        if(!str || !maxlength || str === "" || (typeof(maxlength) !== 'number') ) {
                firstLetter = 'please write your message and number';
        } else if (str.startsWith("m") || str.startsWith("м")){
               firstLetter = 'M';
        } else {
                firstLetter = str[0];
        }
        
        console.log(firstLetter);

        for (let i = 1; i < maxlength; i++) {
                console.log(str[i]);
        }
}

showVerticalMessage('rabbit', 5);
showVerticalMessage('mosquito', 5);
showVerticalMessage();
showVerticalMessage('turtle');
showVerticalMessage('марафон', 4);
