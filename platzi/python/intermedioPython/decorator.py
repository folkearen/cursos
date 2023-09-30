def logger(func):
    def wrapper():
        print('oli')
        r = 1
        r += 1
        func(r)
        print('chauu') 
    return wrapper

@logger
def sample(num):
    print(num)


sample()





