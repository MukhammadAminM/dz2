let user = 'Alex'
let account = 7777
let money = 10000

let name = prompt('user')
if(name == user){
    let password = prompt('account')
    if(password == account){
        let cash = confirm('Снять наличные?')
        if(cash){
            let how_much = +prompt('Сколько')
            if(money - how_much >= 0){
                alert(`Деньги сняты, остаток: ${money - how_much}`)
            }else{
                alert('недостаточно средств')
            }
        }else{
            alert('Хорошо')
        }
    }else{
        alert('неправильно')
    }
}else{
    alert('нет такого пользователя')
}

