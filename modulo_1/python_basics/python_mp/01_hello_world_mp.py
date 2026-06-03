print("Sistema de Control de Biblioteca")

ejemplares  = 25
titulo = "Cien años de soledad"

print(f"El libro '{titulo}' tiene {ejemplares} ejemplares.")
print("Título", titulo, "Ejemplares", ejemplares)
codigo = 100123456
print("El libro '{}' tiene {} ejemplares.".format(titulo, ejemplares))
print(titulo, ejemplares, codigo, sep=" - ")
print(titulo, end= " | ")
print(ejemplares, end= " | ")
print(codigo, end= " | ")

print(f"{29.999:.2f}")
print(f"{100123456:,}")