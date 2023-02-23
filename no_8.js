let num = 15

const eduwork = value => {
    for (i=1; i <= value; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('Eduwork');
        } else if (i % 3 == 0) {
            console.log('Edu');
        } else if (i % 5 == 0) {
            console.log('Work');
        } else {
            console.log(i);
        }
    }
}

eduwork(num);