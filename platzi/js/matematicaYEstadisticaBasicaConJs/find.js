const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function solution(users, id) {
    // Tu código aquí 👈
    let user = users.find(function(dato)  {return dato.id == id})
    if (user) {
        return user.name
    }else {
        return false
    }
  }

  //forma abreviada
  function solution2(users, id) {
    const user = users.find(user => user.id == id)
    return user ? user.name : false
    //Condicional ternario condicion, salida 1 salida 2, ? representa if y : else
    //Se puede abreviar aun mas user?.name || false, aca los : no siver ya que contraigo la variable user a una sola representacion
    //se oucpa or para decir si es cierto devuelbvme esto sino lo otro.
  }


console.log(solution(users, 456));
console.log(solution(users, 999));
console.log(solution2(users, 456));
console.log(solution2(users, 999));
