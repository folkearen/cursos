''' 
Divide y conquista
El problema se divide en dos en cada iteracion
Cual es el pero caso?

#!Si vas a buscar solo una vez, mejor utilizar la busqueda lineal
#! Cabe destacar que para aplicar este algoritmo la lista debe estar ordenada, si se va buscar muchas  veces en la lista vale la pena crear un algoritmo de ordenamiento
#! y trabajarlo en conjunto.
'''
import random
def busqueda_binaria(lista, comienzo, final, objetivo):
    print(f'Busqueda {objetivo} entre{lista[comienzo]} y {lista[final - 1]}')
    if comienzo > final:
        return False
    
    medio = (comienzo + final) // 2

    if lista[medio] == objetivo:
        return True
    elif lista[medio] < objetivo:
        return busqueda_binaria(lista, medio + 1, final, objetivo) 
    else:
        return busqueda_binaria(lista, comienzo, medio - 1, objetivo) 
    
    




if __name__=='__main__':
    tamano_de_lista = int(input('De que tamano sera la lista? '))
    objetivo = int(input('Que numero quieres encontrar. '))

    lista = sorted([random.randint(0,100) for i in range(tamano_de_lista)])

    encontrado = busqueda_binaria(lista,0, len(lista), objetivo)

    print(lista)
    print(f'El elemento {objetivo} {"esta" if encontrado else "no esta"} en la lista')