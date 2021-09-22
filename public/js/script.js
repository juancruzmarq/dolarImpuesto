

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
    btnCalcular.onclick = function(){
        const precioPesosNuevo = monto.value * dolarOficial
        precioPesos.innerText = "$" + precioPesosNuevo.toFixed(2)
        const impuestoPaisNuevo = precioPesosNuevo.toFixed(2) * 0.30
        impuestoPais.innerText = "$" + impuestoPaisNuevo.toFixed(2)
        const retencionNuevo = precioPesosNuevo.toFixed(2) * 0.35
        retencion.innerText = "$" + retencionNuevo.toFixed(2)
        total.innerText = "$" + (precioPesosNuevo + impuestoPaisNuevo + retencionNuevo) 
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

}

getApi(api);

