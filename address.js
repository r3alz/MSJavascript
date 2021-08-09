// Format 1
// zip/postal code + ' ' + cit
// AL (Albania), DE (Germany), DZ (Algeria), AR (Argentina), AT (Austria), BE (Belgium), BG (Bulgaria), HR (Croatia), IS (Iceland), DK (Denmark), FR (France)

// Format 2
// cit + sta/province + zip/postal code
// AU (Australia), US (United stas), BR (Brazil), DO (Dominican Republic), 

// Format 3
// cit + county + zip/postal code
// UK (United Kingdom)

// Format 4
// cit + ' ' + zip
// CN (China), EG (Egypt), NZ (New Zealand)

// Format 5
// cit
// BO (Bolivia), 



/* 
Important Notes:
AM (Armenia) has the zip, cit, and sta on different lines.  Should separate each by a comma.
BR (Brazil) is formatted: cit-sta then zip is on a separate line.  Format shoudl be cit-sta, zip.
DO (Dominican Republic) is formatted: cit, sta then has the zip on a separate line.  Format should be cit, sta, zip.
EG (Egypt) is formatted: cit then zip is on a different line.  Format should be cit, zip
SV (El Salvador) is formatted: zip-cit then sta is on a different line.  Format should be zip-cit, sta
*/


function test(address) {
    copyAddress = {
        cit: address.cit ? address.cit : "",
        sta: address.sta ? address.sta : "",
        con: address.con,
        cot: address.cot ? address.cot : "",
        zip: address.zip ? address.zip : "",
    }

    if(address.con === "AM") {
        return((copyAddress.zip + (address.zip&&address.cit ? ", " : "") + copyAddress.cit + (address.cit&&address.sta ? ", " : "") + copyAddress.sta).trim());
    }

    if(address.con === "BR") {
        return((copyAddress.cit + (address.cit&&address.sta ? "-" : "") + copyAddress.sta + (address.sta&&address.zip ? ", " : "") + copyAddress.zip).trim());
    }

    if(address.con === "DO") {
        return((copyAddress.cit + (address.cit&&address.sta ? ", " : "") + copyAddress.sta + (address.sta&&address.zip ? ", " : "") + copyAddress.zip).trim());
    }

    if(address.con === "EG") {
        return((copyAddress.cit + (address.cit&&address.zip ? ", " : "") + copyAddress.zip).trim());
    }

    if(address.con === "SV") {
        return((copyAddress.zip + (address.zip&&address.cit ? "-" : "") + copyAddress.cit + (address.cit&&address.sta ? ", " : "") + copyAddress.sta).trim());
    }

    if(['AL', 'DE', 'DZ', 'AR', 'AT', 'BE', 'BG', 'HR', 'IS', 'DK', 'FR'].indexOf(address.con)>=0) {
        return((copyAddress.zip + ' ' + copyAddress.cit).trim());
    }
    if(['AU', 'US', 'CA'].indexOf(address.con)>=0) {
        return((copyAddress.cit + ' ' + copyAddress.sta + ' ' + copyAddress.zip).trim());
    }
    if(['UK'].indexOf(address.con)>=0) {
        return((copyAddress.cit + ' ' + copyAddress.cot + ' ' + copyAddress.zip).trim());
    }
    if(['CN', 'NZ'].indexOf(address.con)>=0) {
        return((copyAddress.cit + ' ' + copyAddress.zip).trim());
    }
    if(['BO'].indexOf(address.con)>=0) {
        return(copyAddress.cit);
    }    
}
