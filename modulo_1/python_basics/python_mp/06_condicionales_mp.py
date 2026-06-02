print("condicionales simples")
dias_prestamo = input("¿Días de préstamo?: ")
if(int(dias_prestamo) > 14):
    print("Préstamo extendido")

print("Condicionales dos caminos")
ejemplares = input("¿Cantidad de ejemplares?: ")
if(int(ejemplares) >= 5):
    print("Stock suficiente")
else:
    print("Stock bajo")

print("Condiciones multiples")
calificacion = input("Calificación del libro (0-100)?: ")
if(int(calificacion) >= 90):
    print("Excelente")
elif(int(calificacion) >= 80):
    print("Bueno")
elif(int(calificacion) >= 70):
    print("Aceptable")
else:
    print("Sin recomendación")

print("Condiciones if anidados")
tiene_reserva = True
saldo = 25
categoria = "novela"
if(tiene_reserva):
    if(saldo >= 20):
        if categoria == "novela":
            print("Tu préstamo de novela cuesta $20. Confirmado")
        else:
            print("Categoría disponible")
    else:
        print("Saldo insuficiente")
else:
    print("No tiene reserva")