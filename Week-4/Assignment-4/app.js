function delayedResultPromise(n1, n2, delayTime) {
    const myPromise = new Promise( (resolve, reject) => {
        setTimeout( () => resolve(n1 + n2), delayTime);
    });
    return myPromise
}
delayedResultPromise(4, 5, 3000).then(console.log);
// // 9 (4+5) will be shown in the console after 3 seconds

async function main() {
    const result = await delayedResultPromise(7, 8, 1000);
    console.log(result);
}
    
main(); // result will be shown in the console after <delayTime> seconds
    