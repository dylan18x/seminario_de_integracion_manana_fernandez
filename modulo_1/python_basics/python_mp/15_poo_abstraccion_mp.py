from abc import ABC, abstractmethod

class SeccionBiblioteca(ABC):
    def __init__(self, color="gris"):
        self.color = color

    @abstractmethod
    def capacidad(self) -> float:
        pass

    @abstractmethod
    def metros(self) -> float:
        pass

    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.color}: "
                f"capacidad={self.capacidad():.2f}, metros={self.metros():.2f}")

class SalaLectura(SeccionBiblioteca):
    def __init__(self, puestos, color="gris"):
        super().__init__(color)
        self.puestos = puestos

    def capacidad(self):
        import math
        return math.pi * self.puestos ** 2

    def metros(self):
        import math
        return 2 * math.pi * self.puestos

class Estanteria(SeccionBiblioteca):
    def __init__(self, ancho, alto, color="gris"):
        super().__init__(color)
        self.ancho = ancho
        self.alto  = alto

    def capacidad(self):
        return self.ancho * self.alto

    def metros(self):
        return 2 * (self.ancho + self.alto)

class DepositoArchivo(SeccionBiblioteca):
    def __init__(self, a, b, c, color="gris"):
        super().__init__(color)
        self.a, self.b, self.c = a, b, c

    def metros(self):
        return self.a + self.b + self.c

    def capacidad(self):
        s = self.metros() / 2
        return (s * (s - self.a) * (s - self.b) * (s - self.c)) ** 0.5

secciones = [SalaLectura(5, "azul"), Estanteria(4, 6, "verde"), DepositoArchivo(3, 4, 5, "rojo")]

for seccion in secciones:
    print(seccion.describir())

capacidad_total = sum(s.capacidad() for s in secciones)
print(f"Capacidad total: {capacidad_total:.2f}")