
const useChangeCase = (str) => {
    let firstChar = str.charAt(0);
    let restChar = str.substring(1);
    let sentence = firstChar.toUpperCase() + restChar.toLowerCase();
    return sentence;

}

export default useChangeCase