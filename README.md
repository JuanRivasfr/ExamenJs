export const getAll = async() => {

    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        
        let { date_payment } = val
        let [year] = date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });

    dataUpdate.sort((a, b) => {

        let [, monthA] = a.date_payment.split("-")
        let [, monthB] = b.date_payment.split("-")

        return monthB - monthA

    })
    
    return dataUpdate;


}