print("funciones en python")
print("funcion básica")
def saludar():
    print("Bienvenido a la Biblioteca UTE")

saludar()

print("funcion con parametro")
def saludarSocio(nombre):
    print(f"Hola: {nombre}, ¿en qué te ayudamos?")

saludarSocio("Dylan")
saludarSocio("Helen")

print("funcion que devuelve valor con return")
def sumarEjemplares(a, b):
    return a + b
print(sumarEjemplares(5, 6))

print("funcion con parametros por posición")
def registrarLibro(titulo, autor, seccion):
    print(f"{titulo}, {autor}, {seccion}")
registrarLibro("Sapiens", "Harari", "Historia")

registrarLibro("Kotlin", "Jemerov", "Tecnología")
registrarLibro(seccion="Novela", titulo="El Principito", autor="Saint-Exupéry")

print("funcion parametros por defecto")
def bienvenidaSocio(nombre, saludo="Bienvenido", puntuacion="!"):
    print(f"{saludo} {nombre} {puntuacion}")

bienvenidaSocio("Pedro", "Buenos días", "...")
bienvenidaSocio("Juan", puntuacion="...")
bienvenidaSocio("Carlos", "Buenas tardes")

print("funcion parametros posicionales")
def sumar_prestamos(*args):
    print(f"Argumentos recibidos {args}")
    return sum(args)

print(sumar_prestamos(1, 2, 3))
print(sumar_prestamos(1, 2, 3, 4, 5, 6, 7))
print(sumar_prestamos(10, 20, 22))

print("funcion parametros combinados por posicion")
def mostrar_catalogo(seccion, *libros):
    print(f"Argumentos recibidos {seccion} {libros}")
    print(seccion)
    for libro in libros:
        print(f"- {libro}")

mostrar_catalogo("Novela", "Sapiens", "El Principito", "Cien años de soledad")

print("funcion parametros clave valor variables")
def registrar_socio(**kwargs):
    print(f"Argumentos recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

registrar_socio(nombre="Ana", apellido="García", edad=26, ciudad="Quito")

print("funcion parametros combinacion de todos los tipos")
def configurar_biblioteca(nombre, *secciones, debug=False, **opciones):
    print(f"Biblioteca: {nombre}")
    print(f"Secciones: {secciones}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")

configurar_biblioteca("Biblioteca Central", "Novela", "Ciencia", "Historia", debug=True, horario="8-20", prestamos=True)

print("Devolver multiples valores")
def minmax_prestamos(numeros):
    return min(numeros), max(numeros)

minimo, maximo = minmax_prestamos([3, 5, 7, 2, 8, 9])
print(f"Mínimo {minimo}, Máximo {maximo}")

_, maximo = minmax_prestamos([12, 13, 16, 24, 100])
print(f"Solo maximo {maximo}")

print("Devolver diccionario en el caso de muchos valores")
def analizar_prestamos(numeros):
    total = sum(numeros)
    n = len(numeros)
    return {
        "total": total,
        "media": total / n if n > 0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n
    }

datos = [12, 88, 44, 55, 23, 45]
stats = analizar_prestamos(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:.2f}")
print(f"Rango: {stats['minimo']}-{stats['maximo']}")

print("funciones Lambdas")
def doble_ejemplares(x):
    return x * 2
doble_lambda = lambda x: x * 2
print(doble_ejemplares(2))
print(doble_lambda(2))
sumar_dias = lambda a, b: a + b
print(sumar_dias(5, 4))