vacia      = ()
unitaria   = (1001,)
ubicacion  = (3, 4)
rgb        = (255, 128, 0)
libro      = ("Sapiens", 2011, "Historia")

registro = 10, 20
print(type(registro))

print(libro[0])
print(libro[-1])
print(libro[1:])

titulo, anio, categoria = libro
print(titulo, anio, categoria)

primero, *resto = (1001, 1002, 1003, 1004, 1005)
print(primero)
print(resto)

*inicio, ultimo = (1001, 1002, 1003, 1004, 1005)
print(inicio)
print(ultimo)

def dividir_ejemplares(total, divisor):
    if divisor == 0:
        return None, "División por cero"
    return total / divisor, None

resultado, error = dividir_ejemplares(10, 3)
if error:
    print(f"Error: {error}")
else:
    print(f"Resultado: {resultado:.4f}")

ubicaciones = {(0, 0): "entrada", (1, 0): "seccion A", (0, 1): "seccion B"}
print(ubicaciones[(0, 0)])