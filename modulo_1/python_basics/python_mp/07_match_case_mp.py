print("match-case")
accion = input("Acción (registrar/devolver/renovar): ")
match accion:
    case "registrar":
        print("Registrando préstamo")
    case "devolver":
        print("Procesando devolución")
    case "renovar":
        print("Renovando préstamo")
    case _:
        print(f"Acción '{accion}' no encontrada")

print("match condiciones")
dias_retraso = 7
match dias_retraso:
    case n if n < 0:
        print(f"{n} días no válido")
    case 0:
        print("Sin retraso")
    case n if n % 2 == 0:
        print(f"{n} días de retraso (par)")
    case n:
        print(f"{n} días de retraso (impar)")