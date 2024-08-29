function outerf()
{
    const outervar = "I am from outer function";
    function innerf(){
        console.log(outervar)
    }
    return innerf;
}
const closure = outerf();
closure();