ventas = [120,80,200,50,300]
ventasContador = 0
totalBono = 0
for venta in ventas:
    if(venta > 100):
        if(venta > 250):
            print("Su bono es de $30")
            ventasContador += 1
            totalBono += 30
            
    else:
        print("Su bono es de $10")
        totalBono +=10
print(f"Ventas validadas {ventasContador}")
print(f"Total bono {totalBono}")

contra  = int(input("Ingrese contraseña: "))
while (contra != 1234):
    print("Contraseña incorrecta")
    contra  = int(input("Ingrese contraseña: "))
print("Acceso permitido")