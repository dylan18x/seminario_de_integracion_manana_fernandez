print("Calculo de bono:")
antiguedad = input("Ingrese años de antiguedad: ")
if(int(antiguedad) > 1):
    desempeño = input("Ingrese su calificacion de desempeño: ")
    if(int(desempeño)>= 8):
        salario=input("Ingrese su salario: ")
        if(int(salario) < 1000):
            print("Su bono es de $200")
            print(f"Su salario total es de: {int(salario)+200}")
            
        if(int(salario)>= 1000):
            print("Su bono es de $100")
            print(f"Su salario total es de: {int(salario)+100}")

    else:
        print("No recibe Bono")