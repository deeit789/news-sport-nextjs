export const convertTotalFootball = (t1,t2) => {
    if(!t1 && !t2) return "";
    if(t1 === t2) {
        return "Draw"
    }
    if(t1 > t2) {
        return "Victory"
    }
    return "";
}