$("#btnLogin").click(
    function(){

        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users',
            success:function(data){
                console.log(data)

            },
            error:function(data){

            }
            
        })
    }
)





























    
//login = 
//{
    //'usuario' :  document.getElementById('inputEmail').value, 
    //'senha' :  document.getElementById('inputPass').value,
    //'tipo_login': 'site'
//};
//if (login.senha == '1234') {
    //document.getElementById('resultado').innerHTML = '<b style=color:blue>Bem vindo</b>'
//} else {
        //document.getElementById('resultado').innerHTML = '<b style=color:red>Usuario ou senha errados</b>'
    //}
    
 //}
//)




//alert("Senha correta");
//alert("Usuario ou senha errados")