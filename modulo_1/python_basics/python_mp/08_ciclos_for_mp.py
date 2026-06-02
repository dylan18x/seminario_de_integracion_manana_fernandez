print("Ciclo for")
libros = ["Sapiens", "Kotlin", "El Principito"]
for libro in libros:
    print(libro)

print("Recorrer palabras")
for letra in "biblioteca":
    print(letra)

print("Recorrer rango")
for i in range(3, 6):
    print(i)

print("Recorrer rango configurar paso")
for i in range(1, 10, 2):
    print(i)

print("Enumerar listas")
for i, libro in enumerate(libros):
    print(i, libro)

print("Dos listas a la vez")
socios = ["Ana", "Luis"]
prestamos = [3, 5]
for socio, prestamo in zip(socios, prestamos):
    print(socio, prestamo)

print("Control del ciclo")
print("Break")
for i in range(10):
    if i == 6:
        break
    print(i)

print("Continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("For anidado")
for i in range(3):
    for j in range(2):
        print(i, j)

print("Lista comprension forma corta")
codigos = [x**2 for x in range(5)]
print(codigos)