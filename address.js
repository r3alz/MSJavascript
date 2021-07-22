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

function escapeRegExp(strToEscape) {
    // Escape special characters for use in a regular expression
    return strToEscape.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

function trimChar(origString, charToTrim) {
    charToTrim = escapeRegExp(charToTrim);
    var regEx = new RegExp("^[" + charToTrim + "]+|[" + charToTrim + "]+$", "g");
    return origString.replace(regEx, "");
}

function test(address) {
    for(const component in address) {
        if (typeof(address[component]) === "undefined") {
            address[component] = "";
        }
    }

    if(address.con === "AM") {
        let format = address.zip + ', ' + address.cit + ', ' + address.sta;
        format = trimChar(format, ", ");
        return(format);
    }

    if(address.con === "BA") {
        let format = address.cit + '-' + address.sta + ', ' + address.zip;
        format = trimChar(format, ", ");
        format = trimChar(format, "-");
        format = format.replace("-,", ",");
        return(format);
    }

    if(address.con === "DO") {
        let format = address.cit + ', ' + address.sta + ', ' + address.zip;
        format = trimChar(format, ", ");
        return(format);
    }

    if(address.con === "EG") {
        let format = address.cit + ', ' + address.zip;
        format = trimChar(format, ", ");
        return(format);
    }

    if(address.con === "SV") {
        let format = address.zip + '-' + address.cit + ', ' + address.sta;
        format = trimChar(format, ", ");
        format = trimChar(format, "-");
        format = format.replace("-,", ",");
        return(format);
    }

    if(['AL', 'DE', 'DZ', 'AR', 'AT', 'BE', 'BG', 'HR', 'IS', 'DK', 'FR'].indexOf(address.con)>=0) {
        let format = address.zip + ' ' + address.cit;
        return(format.trim());
    }
    if(['AU', 'US', 'CA'].indexOf(address.con)>=0) {
        let format = address.cit + ' ' + address.sta + ' ' + address.zip;
        return(format.trim());
    }
    if(['UK'].indexOf(address.con)>=0) {
        let format = address.cit + ' ' + address.cot + ' ' + address.zip;
        return(format.trim());
    }
    if(['CN', 'NZ'].indexOf(address.con)>=0) {
        let format = address.cit + ' ' + address.zip;
        return(format.trim());
    }
    if(['BO'].indexOf(address.con)>=0) {
        let format = address.cit;
        return(format.trim());
    }    
}


