print("Listas")
print("Crear Listas")
vacia = []
print(vacia)
codigos = [1001, 1002, 1003, 1004, 1005, 1006, 1007]
print(codigos)
socios = ["Juan", "Pedro", "Carlos", "María", "Petra", "Juana"]
print(socios)
mixta = [1001, "Sapiens", "García", True, None, 29.99]
print(mixta)
anidada = [1001, [1002, 1003, [1004, 1005, 1006]], 1007, 1008]
print(anidada)

print("Acceso a los elementos de una lista")
print(socios[0])
print(socios[-1])
print(socios[1:3])
print(socios[::-1])

print("CRUD de una lista")
libros = ["Sapiens", "Kotlin", "El Principito", "Cien años de soledad"]
print(libros)
libros.append("Clean Code")
print(libros)
libros.insert(1, "Harry Potter")
print(libros)
libros.extend(["Dune", "1984"])
print(libros)
libros[0] = "Atomic Habits"
print(libros)
libros.remove("Cien años de soledad")
print(libros)
eliminado = libros.pop()
print(libros)
eliminado = libros.pop(0)
print(libros)
del libros[0]
print(libros)

print("Buscar valores en los elementos de una Lista")
print("Dune" in libros)
print(libros.index("Dune"))
print(libros.count("Dune"))

print("Ordenar una lista")
codigos_desordenados = [1003, 1002, 1006, 1034, 1009, 1000, 1001, 1002]
print(codigos_desordenados)
codigos_desordenados.sort()
print(codigos_desordenados)
codigos_desordenados.sort(reverse=True)
print(codigos_desordenados)
ordenada = sorted(codigos_desordenados)
print(codigos_desordenados)
print(ordenada)

libros_catalogo = [
    {"titulo": "Sapiens",        "precio": 29.99, "ejemplares": 5,  "categoria": "historia"},
    {"titulo": "El Principito",  "precio": 15.00, "ejemplares": 20, "categoria": "novela"},
    {"titulo": "Kotlin",         "precio": 49.50, "ejemplares": 3,  "categoria": "tecnologia"},
    {"titulo": "Clean Code",     "precio": 39.00, "ejemplares": 8,  "categoria": "tecnologia"},
    {"titulo": "Cien años",      "precio": 25.00, "ejemplares": 0,  "categoria": "novela"},
]
print("------------------------------------")
precios  = list(map(lambda l: l["precio"], libros_catalogo))
titulos  = list(map(lambda l: l["titulo"].upper(), libros_catalogo))
print(precios)

con_ejemplares = list(filter(lambda l: l["ejemplares"] > 0, libros_catalogo))
tecnologia     = list(filter(lambda l: l["categoria"] == "tecnologia", libros_catalogo))
print([l["titulo"] for l in con_ejemplares])

por_precio  = sorted(libros_catalogo, key=lambda l: l["precio"])
mas_caro    = sorted(libros_catalogo, key=lambda l: l["precio"], reverse=True)[0]
print(f"Más caro: {mas_caro['titulo']} ({mas_caro['precio']}€)")

total       = sum(l["precio"] * l["ejemplares"] for l in libros_catalogo)
mas_barato  = min(libros_catalogo, key=lambda l: l["precio"])
print(f"Total inventario: {total}€")
print(f"Más barato: {mas_barato['titulo']}")

hay_sin_ejemplares = any(l["ejemplares"] == 0 for l in libros_catalogo)
todos_tecnologia   = all(l["categoria"] == "tecnologia" for l in libros_catalogo)
print(f"¿Hay sin ejemplares? {hay_sin_ejemplares}")
print(f"¿Todos son tecnología? {todos_tecnologia}")