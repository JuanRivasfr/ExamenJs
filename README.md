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

${listaProductos.map(valproduct => html`
                <div class="der__cont__cont">
                    <div class="der__contimg">
                        <img src="${valproduct.imagen}" alt="">
                    </div>
                    <div class="der__inf">
                        <p>${valproduct.titulo}</p>
                        <div class="inf__precios">
                            <p>$${valproduct.precio}</p>
                            <button id="${valproduct.id}" @click=${
                                () => this.addCart(valproduct, valproduct.id, valproduct.precio)
                            }>Agregar</button>
                        </div>
                    </div>
                </div>
                `)}