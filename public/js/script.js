

const monto = document.getElementById("input");
const precioPesos = document.getElementById('txtPrecio');
const impuestoPais = document.getElementById('txtImpuesto');
const retencion = document.getElementById('txtRetencion');
const total = document.getElementById('txtTotal');
const btnCalcular = document.getElementById('btnCalcular');


const api = 'https://api.bluelytics.com.ar/v2/latest'


async function getApi(){

    const response = await fetch(api);
    const data = await response.json();
    const dolarOficial =  data.oficial.value_sell
    const euroOficial = data.oficial_euro.value_sell
    console.log(euroOficial);
    var dolarChecked = true

    btnCalcular.onclick = function(){
        if(dolarChecked === true){
            var precioPesosNuevo = monto.value * dolarOficial
            precioPesos.innerText = "$" + precioPesosNuevo.toFixed(2)
            var impuestoPaisNuevo = precioPesosNuevo.toFixed(2) * 0.30
            impuestoPais.innerText = "$" + impuestoPaisNuevo.toFixed(2)
            var retencionNuevo = precioPesosNuevo.toFixed(2) * 0.35
            retencion.innerText = "$" + retencionNuevo.toFixed(2)
            total.innerText = "$" + (precioPesosNuevo + impuestoPaisNuevo + retencionNuevo).toFixed(2)
        }else{
            var precioPesosNuevo = numberWithCommas(monto.value * euroOficial)
            precioPesos.innerText = "$" + numberWithCommas(precioPesosNuevo.toFixed(2))
            var impuestoPaisNuevo = numberWithCommas(precioPesosNuevo.toFixed(2) * 0.30)
            impuestoPais.innerText = "$" + numberWithCommas(impuestoPaisNuevo.toFixed(2))
            var retencionNuevo = numberWithCommas(precioPesosNuevo.toFixed(2) * 0.35)
            retencion.innerText = "$" + numberWithCommas(retencionNuevo.toFixed(2))
            total.innerText = "$" + numberWithCommas((precioPesosNuevo + impuestoPaisNuevo + retencionNuevo))
        }
        
    }

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
        }    
    }
    
    var iconoMonedaEuro = document.getElementById('iconoMonedaEuro');
    var spanMoneda = document.getElementById('spanMoneda')
    var btnIconoMoneda = document.getElementById('btnIconoMoneda')
    var ingreseMonto = document.getElementById('ingreseMonto')

    btnIconoMoneda.onclick = function(){
        if (iconoMonedaEuro.style.display === 'none' ){
            monedaEuro()
        }else{
           monedaDolar()
        }
    }
    

}

function resetCalculo(){
    precioPesos.innerText = '$0.00'
    impuestoPais.innerText ='$0.00'
    retencion.innerText = '$0.00'
    total.innerText ='$0.00'
}

function monedaDolar(){
    iconoMonedaEuro.style.display = 'none';
    iconoMonedaDolar.style.display = '';
    spanMoneda.innerText = 'Dolar'
    ingreseMonto.innerText = 'Ingrese monto Dolar'
    dolarChecked = true
    resetCalculo()
}

function monedaEuro(){
    iconoMonedaDolar.style.display = 'none';
    iconoMonedaEuro.style.display = '';
    spanMoneda.innerText = 'Euro '
    ingreseMonto.innerText = 'Ingrese monto Euro'
    dolarChecked = false
    resetCalculo()
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

getApi(api);

