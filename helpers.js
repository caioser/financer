exports.today = {
    value: () => {
        let today = new Date();
        let value = [];
        value[0] = today.getFullYear();
        if ( today.getMonth()+1 < 10) {
            value[1] = "0"+(today.getMonth()+1);
        } else {
            value[1] = today.getMonth()+1;
        }
        value[2] = today.getDate();

        return `${value[0]}-${value[1]}-${value[2]}`;
    }
    
}
