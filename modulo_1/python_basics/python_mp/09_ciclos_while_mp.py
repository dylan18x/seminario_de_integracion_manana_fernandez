diasPrestamo = 1
while (diasPrestamo <= 5):
    print(f"Día de préstamo: {diasPrestamo}")
    diasPrestamo += 3

print("Control del ciclo")
print("continue")
i = 1
while(i <= 5):
    i += 1
    if i == 3:
        continue
    print(f"día: {i}")

print("break")
i = 1
while(i <= 5):
    i += 1
    if i == 3:
        break
    print(f"día: {i}")

codigo = int(input("Ingrese código de libro: "))
while codigo != 0:
    print("Código ingresado: ", codigo)
    codigo = int(input("Ingrese código de libro: "))

contador = 1
while(contador <= 5):
    print(f"ejemplar: {contador}")
    contador += 1
else:
    print("fin del ciclo")