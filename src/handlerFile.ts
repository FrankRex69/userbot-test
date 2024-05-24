// import fs from 'fs';

// export const handlerfile = () => {
//     fs.readFileSync('/uploads/Linea_per_colloquio.txt', 'utf-8', function(err, result){ 
//         if(err){ 
//            return 'err';
//         }
//         return 'result';       
//     });    
// };


import fs from 'node:fs';
import path from 'node:path';
import { setDefaultHighWaterMark } from 'node:stream';

export const handlerfile = (file: string | undefined) => {

    const wordsLenght = (data: string) => {
        const array = data.trim().split(/\s+/);
        return array.length;
    }

    const numBlank = (data: string) =>{
        return data.split(" ").length - 1;
    }
    
    const repeatWords = (data: string) => {

        let responseArr: string[] = [];
        
        // Convert string in array
        const dataArray = data.split(" ")

        // Sort the array
        dataArray.sort();
        console.log(dataArray);

        // Extract single words
        const singleWords = new Set(dataArray);
        console.log(singleWords);

        // Words with number occurance
        singleWords.forEach((word) => {
            const start = dataArray.indexOf(word);
            const end = dataArray.lastIndexOf(word);
            const count = end - start + 1;
            if(count >= 2){
                const response = word + ':' + count;
                console.log(response);            
                responseArr.push(response);  
            }                      
        });
        console.log(responseArr);
        return responseArr;
    }

    try {
        const data = fs.readFileSync(path.join(__dirname, '../uploads/'+file), 'utf8');        
        const dataResp = {
            numberTotWords : wordsLenght(data),
            numberTotChar : data.length,
            numberBlanck : numBlank(data),
            repeatsWords: repeatWords(data)
        }
        return dataResp;
    } catch (err) {
        return err;
    }  
};
