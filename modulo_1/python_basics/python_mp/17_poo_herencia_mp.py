class Publicacion:
    def __init__(self, titulo, autor, anio):
        self.titulo  = titulo
        self.autor   = autor
        self.anio    = anio
        self._prestamos = 0

    def prestar(self):
        self._prestamos += 1
        return self

    def devolver(self):
        self._prestamos = max(0, self._prestamos - 1)
        return self

    def __str__(self):
        return f"{self.titulo} — {self.autor} ({self.anio}) | Préstamos: {self._prestamos}"

class Libro(Publicacion):
    def __init__(self, titulo, autor, anio, paginas=200):
        super().__init__(titulo, autor, anio)
        self.paginas = paginas

    def resumen(self):
        return f"{self.titulo} tiene {self.paginas} páginas"

    def __str__(self):
        return f"{super().__str__()} ({self.paginas} págs.)"

class Revista(Publicacion):
    def __init__(self, titulo, autor, anio, edicion):
        super().__init__(titulo, autor, anio)
        self.edicion = edicion

    def archivar(self):
        return f"📂 Revista {self.titulo} edición {self.edicion} archivada"

    def __str__(self):
        return f"{super().__str__()} (Ed. {self.edicion})"

class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, url):
        super().__init__(titulo, autor, anio)
        self.__url      = url
        self.__descargas = 0

    def descargar(self, cantidad=1):
        self.__descargas += cantidad
        return self

    @property
    def descargas_realizadas(self):
        return self.__descargas

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Descargas: {self.__descargas} | "
                f"URL: {self.__url}")

digital = LibroDigital("Kotlin en acción", "Jemerov", 2017, "https://biblioteca.ec/kotlin")
digital.prestar()
print(digital)

print(isinstance(digital, LibroDigital))
print(isinstance(digital, Libro))
print(isinstance(digital, Publicacion))
print(isinstance(digital, Revista))

print(LibroDigital.__mro__)