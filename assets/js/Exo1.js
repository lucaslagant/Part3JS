let year= 2020;
while (year <= 2030) {
    if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
        document.write("<FONT COLOR='red'>" +year+" "+"</FONT>");
    } else { document.write(year + " "); }
    year++;
}
