// Format 1
// zip/postal code + ' ' + cit
// AL (Albania), DE (Germany), DZ (Algeria), AR (Argentina), AT (Austria), BE (Belgium), BG (Bulgaria), HR (Croatia), IS (Iceland), DK (Denmark), FR (France)

// Format 2
// cit + sta/province + zip/postal code
// AU (Australia), US (United stas), BA (Brazil), DO (Dominican Republic), 

// Format 3
// cit + county + zip/postal code
// UK (United Kingdom)

// Format 4
// cit + ' ' + zip
// CN (China), EG (Egypt), NZ (New Zealand)

// Format 5
// zip/postal code + cit + sta/province code
// AM (Armenia), SV (El Salvador)

// Format 6
// cit
// BO (Bolivia), 



/* 
Important Notes:
AM (Armenia) has the zip, cit, and sta on different lines.  Should separate each by a comma.
BA (Brazil) is formatted: cit-sta then zip is on a separate line.  Format shoudl be cit-sta, zip.
DO (Dominican Republic) is formatted: cit, sta then has the zip on a separate line.  Format should be cit, sta, zip.
EG (Egypt) is formatted: cit then zip is on a different line.  Format should be cit, zip
SV (El Salvador) is formatted: zip-cit then sta is on a different line.  Format should be zip-cit, sta
*/

let addressFormats = {
    format1: ['AL', 'DE', 'DZ', 'AR', 'AT', 'BE', 'BG', 'HR', 'IS', 'DK', 'FR'],
    format2: ['AU', 'US', 'CA', 'BA', 'DO'],
    format3: ['UK'],
    format4: ['CN', 'EG', 'NZ'],
    format5: ['AM', 'SV'],
    format6: ['BO']
};

// let address1 = "2320 free st."
// let address2 = "Mesquite, TX, 75150";
// let country = "Belgium";
// address2 = address2.split(',').map(item=>item.trim());
// console.log(address2);

fulladdress = {
    cit: "Auckland",
    sta: "",
    zip: "1024",
    cot: "",
    con: "NZ"
};


function test(address) {
    addressFormats.format1.forEach(element => {
        if(element === address.con) {
            console.log(fulladdress.zip + ' ' + fulladdress.cit);
            console.log("format 1");
        }
     })
    addressFormats.format2.forEach(element => {
        if(element === address.con && element === "BA") {
            console.log(fulladdress.cit + '-' + fulladdress.sta + ', ' + fulladdress.zip);
            console.log("format 2");
        }
        else if(element === address.con && element === "DO") {
            console.log(fulladdress.cit + ', ' + fulladdress.sta + ', ' + fulladdress.zip);
            console.log("format 2");
        }
        else if(element === address.con) {
            console.log(fulladdress.cit + ' ' + fulladdress.sta + ' ' + fulladdress.zip);
            console.log("format 2");
        }
    })  
    addressFormats.format3.forEach(element => {
        if(element === address.con) {
            console.log(fulladdress.cit + ' ' + fulladdress.cot + ' ' + fulladdress.zip);
            console.log("format 3");
        }
    })  
    addressFormats.format4.forEach(element => {
        if(element === address.con && element === "EG") {
            console.log(fulladdress.cit + ', ' + fulladdress.zip);
            console.log("format 4");
        }
        else if(element === address.con) {
            console.log(fulladdress.cit + ' ' + fulladdress.zip);
            console.log("format 4");
        }
    })  

    addressFormats.format5.forEach(element => {
        if(element === address.con && element === "AM") {
            console.log(fulladdress.zip + ', ' + fulladdress.cit + ', ' + fulladdress.sta);
            console.log("format5");
        }
        else if(element === address.con && element === "SV") {
            console.log(fulladdress.zip + '-', fulladdress.cit + ', ' + fulladdress.sta);
            console.log("format5");
        }
        else if(element === address.con) {
            console.log(fulladdress.zip + ' ' + fulladdress.cit + ' ' + fulladdress.sta);
            console.log("format 5");
        }
    })   

    addressFormats.format6.forEach(element => {
        if(element === address.con) {
            console.log(fulladdress.cit);
            console.log("format 6");
        }
    })        
}

test(fulladdress);