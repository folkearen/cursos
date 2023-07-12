for i in range(1,11):
    print(i)

my_iter = iter(range(1,11)) #Un iterador es un tipo de objeto que contine valores contables
print(my_iter)
print(next(my_iter)) #Se controla la iteracion paso a paso, elemento a elemnto, esto optimiza memoria ya que no crea el vector con todos los elemntos de una vez, si no que los va creando a emdida que se solicitan
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))

#!! Se debe tener claro la cantidad de elemntos a iterar, porque si se sobrepasa este limite lanzara una exepcion(error)