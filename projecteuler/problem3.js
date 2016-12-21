var oQ = 600851475143;
var fOne = 2, fTwo = 0, nQ = oQ;


//find the largest prime factor
while (fOne < nQ) {
    fTwo = nQ / fOne;
    if (fTwo % 1 === 0) {
        nQ = fTwo;
        fOne = 2;
        console.log(nQ);
    } else {
        fOne++;
    }
}