var response = document.getElementById('response');

function nPrime() {
    var nP = document.getElementsByName('nP')[0].value;

    response.innerHTML = ''

    if (nP == 1) {
        response.innerHTML = ''
        response.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    It is not number prime!
                </div>
            `
    } else if (nP == '') {
        response.innerHTML = ''
        response.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Enter a number!
                </div>
            `
    } else if (nP <= 0) {
        response.innerHTML = ''
        response.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Number not valid!
                </div>
            `
    } else {

        for (let i = 2; i <= nP; i++) {

            if (nP % 2 != 0 || nP == 2) {
                response.innerHTML = ''
                response.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Its number prime!
                </div>
            `
            } else if (nP % i == 0) {
                response.innerHTML = ''
                response.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    It is not number prime!
                </div>
            `
            }
        }
    }

}

function totalF(S) {
    var total = 0;
    for (var i = 0; i <= S; i++) {
        total += i;
    }
    return total;
}

function cNumber() {
    var cN = document.getElementsByName('cN')[0].value;
    var responseCN = document.getElementById('responseCN');
    responseCN.innerHTML = ''

    if (cN == '' || cN <= 0) {
        responseCN.innerHTML = ''
        responseCN.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Number not valid!
            </div>
        `
    } else {
        responseCN.innerHTML = ''
        responseCN.innerHTML = `
            <div class="alert alert-success" role="alert">
                Total: ${totalF(cN)}
            </div>
        `
    }
}