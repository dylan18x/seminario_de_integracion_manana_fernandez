vacio   = {}
libro   = {"titulo": "Sapiens", "anio": 2011, "seccion": "Historia"}
config  = dict(nombre="Biblioteca Central", capacidad=5000, abierta=True)

print(libro["titulo"])
print(libro.get("autor"))
print(libro.get("autor", "N/A"))

libro["autor"]   = "Yuval Noah Harari"
libro["anio"]    = 2012
del libro["seccion"]
valor = libro.pop("autor")
print(libro)

print("titulo" in libro)
print("seccion" in libro)

print(libro.keys())
print(libro.values())
print(libro.items())

for clave, valor in libro.items():
    print(f"  {clave}: {valor}")

libro.update({"seccion": "Historia", "isbn": "978-0062316097"})
print(libro)

extra    = {"disponible": True, "ejemplares": 5}
completo = libro | extra
print(completo)

biblioteca = {
    "nombre": "Biblioteca Central",
    "socios": {
        1: {"nombre": "Ana", "seccion": "Historia"},
        2: {"nombre": "Luis", "seccion": "Novela"},
    },
    "sedes": ["Norte", "Sur"]
}

print(biblioteca["socios"][1]["nombre"])
biblioteca["socios"][3] = {"nombre": "Marta", "seccion": "Ciencia"}

libro.setdefault("pais", "Ecuador")
libro.setdefault("titulo", "Otro")