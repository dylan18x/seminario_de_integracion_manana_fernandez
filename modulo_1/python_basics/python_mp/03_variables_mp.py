titulo = 'Cien años de soledad'
ejemplares = 28
precio = 29.99
disponible = True
devuelto = None

print(type(titulo))
print(type(ejemplares))
print(type(precio))
print(type(disponible))
print(type(devuelto))

codigo, seccion, estante = 1001, 2, 5
print(codigo)
print(seccion)
print(estante)

codigo = seccion = estante = 0
print(codigo)
print(seccion)
print(estante)

prestamo1, prestamo2 = 10, 20
print(prestamo1, prestamo2)
prestamo1, prestamo2 = prestamo2, prestamo1
print(prestamo1, prestamo2)

titulo_completo = "Cien años de soledad"
TituloCompleto = "Cien años de soledad"
MAX_PRESTAMOS = 3
_codigo_interno = "privado"

ejemplares_pequeno = 42
ejemplares_negativo = -17
total_libros = 1_000_000_000_000
codigos_posibles = 2 ** 100
print(ejemplares_pequeno)
print(ejemplares_negativo)
print(total_libros)
print(codigos_posibles)

binario = 0b1010
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)

print(bin(255))
print(oct(255))
print(hex(255))