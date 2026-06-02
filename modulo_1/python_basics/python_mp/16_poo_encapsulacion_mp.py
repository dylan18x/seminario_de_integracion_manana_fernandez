class TarjetaBiblioteca:
    def __init__(self, socio, saldo_inicial=0):
        self.socio        = socio
        self.__saldo      = saldo_inicial
        self.__historial  = []
        self.__activa     = True
        self.__registrar(f"Tarjeta creada con {saldo_inicial} créditos")

    @property
    def saldo(self):
        return self.__saldo

    @property
    def activa(self):
        return self.__activa

    @property
    def historial(self):
        return list(self.__historial)

    def recargar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__saldo += cantidad
        self.__registrar(f"Recarga: +{cantidad} créditos")
        return self

    def descontar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__saldo:
            raise ValueError(f"Saldo insuficiente (disponible: {self.__saldo} créditos)")
        self.__saldo -= cantidad
        self.__registrar(f"Descuento: -{cantidad} créditos")
        return self

    def transferir(self, destino, cantidad):
        self.descontar(cantidad)
        destino.recargar(cantidad)
        self.__registrar(f"Transferencia a {destino.socio}: -{cantidad} créditos")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Tarjeta({self.socio}: {self.__saldo} créditos)"

t1 = TarjetaBiblioteca("Ana García", 1000)
t2 = TarjetaBiblioteca("Luis Pérez", 500)

t1.recargar(500).descontar(200)
t1.transferir(t2, 300)

print(t1)
print(t2)
print(f"Saldo Ana: {t1.saldo} créditos")

for entrada in t1.historial:
    print(f"  {entrada}")