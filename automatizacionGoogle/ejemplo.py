import shutil
import psutil

def check_disk_usage(disk):
    du = shutil.disk_usage(disk) # Funcion para trabajar el espacio de una unidad de almacenamiento.
    free = du.free / du.total * 100
    return f'Espacio libre {du.free/ (1024 ** 3):.2f}gb,espacio total {du.total/ (1024 ** 3):.2f}gb espacio usado {du.used/ (1024 ** 3):.2f}gb, {free:.2f}% de espacio libre'

def check_cpu_usage():
    usage = psutil.cpu_percent(25) #Persent recibe como parametros intervalos de tiempo en segundo
    return f'El uso es de {usage} es un uso adecuado {usage < 75}'

print(check_disk_usage('c://'))
print(check_cpu_usage())

#! Un ejemplo de uso real 
def check_disk_usage2(disk):
    du = shutil.disk_usage(disk) # Funcion para trabajar el espacio de una unidad de almacenamiento.
    free = du.free / du.total * 100
    return free > 20

def check_cpu_usage2():
    usage = psutil.cpu_percent(1) #Persent recibe como parametros intervalos de tiempo en segundo
    return usage < 75

if not check_disk_usage2('c://') or not check_cpu_usage2():
    print('Error!')
else:
    print('Everything is OK!')