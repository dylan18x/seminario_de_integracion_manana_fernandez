class Socio:
    tipo = "Socio Biblioteca"

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad   = edad

    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."

    def cumplir_anios(self):
        self.edad += 1
        print(f"¡Feliz cumpleaños, {self.nombre}! Ahora tienes {self.edad}.")

    def __str__(self):
        return f"Socio({self.nombre}, {self.edad})"

    def __repr__(self):
        return f"Socio(nombre={self.nombre!r}, edad={self.edad!r})"

ana  = Socio("Ana García", 28)
luis = Socio("Luis Pérez", 31)

print(ana.saludar())
print(luis.saludar())
ana.cumplir_anios()
print(str(ana))
print(repr(ana))
print(Socio.tipo)