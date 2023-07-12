import random

option = ('piedra', 'papel', 'tijera')

def cachipun(user_option, machine_option):
    if  user_option == machine_option:
        return 'Es un empate'
    elif (user_option == 'piedra' and machine_option == 'tijera') or  (user_option == 'papel' and machine_option == 'piedra') or  (user_option == 'tijera' and machine_option == 'papel'):
        return 'Haz ganado'
    else:
        return 'Haz Perdido'

while(True):
    user = input('Ingresa tu opcion, piedra, papel o tijera: ').lower()
    if user in option:
        break
    print('Opcion incorrecta, intentalo nuevamente')


machine = random.choice(option)
print(user + '-' + machine)
print(cachipun(user, machine))


