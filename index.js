const receivesAFunction = (callback) => {
    callback();
}
const returnsANamedFunction = () => {
    function namedFunction() {

    }
    return namedFunction;
}
const returnsAnAnonymousFunction = () => {
    return function(){
        
    }
};