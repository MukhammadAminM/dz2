let max = 10
let busy = 7



let name = prompt('Name').toLowerCase().trim()
if(name[0] !== 'a'){
    let age = +prompt('your age')
    if(age >= 20 && age <= 40){
        let money = +prompt('money')
        if(money >= 100){
            let company = +prompt('how many you are')
            if(company + busy < 10){
                alert('welcome')
            }else{
                alert('Вас мног мест не хватит')
            }
        }else{
            alert('денег не хватает')
        }
    } else{
        alert('возраст не подходит')
    }
}else{
    alert(`${name} именно тебе нельзя`)
}

