function formatar(typeDado, input){
    //Formata o campo telefone
    if(typeDado === "telefone"){
        let tel = input.value.replace(/[()]/g, '')
        if((tel.replace(/D/g, '')).length === 2){
            input.value = "(" + tel + ")"        
        }
        if (tel.length === 6){                
            input.value = null
            var corrig = tel.replace(/[()]/g, '')
            corrig = corrig.replace(/\s/g, '');
            input.value = "(" + corrig.slice(0,2) + ") " + corrig.slice(2,) + "-"
        }
        if(tel.length > 6)
        {
            corrig = tel.replace(/[()-]/g, '')
            corrig = corrig.replace(/\s/g, '');
            console.log(corrig)
            input.value = "(" + corrig.slice(0,2) + ") " + corrig.slice(2,7).replace(/\s/g, '') + "-" + corrig.slice(7,11).replace(/\s/g, '')
        }
    }

    //Formata o campo CEP
    if(typeDado === "cep"){
        let numCep = input.value.replace(/[-]/, '')
        console.log(numCep)
        if((numCep.replace(/D/g, '')).length >= 6){
            input.value = numCep + "-"
        }
        if(numCep.replace(/[-]/, '').length > 6){
            console.log(numCep)
            input.value = numCep.slice(0,5) + "-" + numCep.slice(5,8)
        }
    }

    //Formata o campo CPF/CNPJ
    if(typeDado === "cpf"){
        let numCpf = input.value.replace(/[.-/]/, '')
        
        if(numCpf.replace(/D/g, '').length >= 3 && numCpf.replace(/D/g, '').length <= 6){ 
            numCpf = numCpf.replace(/D/g, '')
            numCpf = numCpf.replace(/\s/g, '');           
            input.value = /(\d{3})(\d{3})(\d{3})(\d{2})/ //.format(numCpf.slice(0,3).toString, numCpf.slice(3,7).toString)
        }
        else if (numCpf.replace(/D/g, '') >= 6 && numCpf.replace(/D/g, '') <= 9){
            numCpf = numCpf.replace(/D/g, '')
            numCpf = numCpf.replace(/\s/g, '');
            console.log(numCpf)
            input.value = numCpf.slice(0,3) + "." + numCpf.slice(3,7) + "." + numCpf.slice(7,10)
        }
    }
}