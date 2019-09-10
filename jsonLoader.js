const fs= require('fs');

       
            const jsonStr =fs.readFileSync('./body_parts/abs/abs.json');
            const exerciseArr= JSON.parse(jsonStr);

            exerciseArr.abs.forEach(element => {
                console.log(element.Exercise);
            });
            


