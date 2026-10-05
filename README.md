# Barbería SaaS

Sistema web de reservas y gestión para barberías con varias sucursales, pensado como SaaS multi-negocio (multi-tenant): cada barbería usa la misma plataforma con sus datos completamente separados de las demás.

> **Estado:** en desarrollo (MVP). Este repositorio contiene por ahora el backend.

## ¿Qué problema resuelve?
Muchas barberías agendan citas por WhatsApp, lo que provoca empalmes, mensajes sin responder y poca visibilidad del negocio. Este sistema permite reservar en línea y administrar sucursales, barberos y servicios desde un solo lugar.

## Alcance del MVP
- Empresas (negocios) y sus sucursales
- Servicios, barberos y clientes
- Reserva de citas: sucursal → servicio → barbero → fecha y hora
- Atención presencial (walk-in) registrada en la misma agenda, para que los horarios en línea reflejen la realidad del local

Fuera del MVP por ahora: programa de fidelización, control financiero y roles avanzados.

## Stack
- **Lenguaje:** TypeScript
- **Backend:** NestJS (Node.js)
- **Base de datos:** PostgreSQL
- **ORM y migraciones:** Prisma
- **Validación:** class-validator
- **Pruebas:** Vitest

## Arquitectura
Monolito modular: cada funcionalidad es un módulo de NestJS (controller → service → Prisma). El aislamiento entre negocios se logra con una sola base de datos donde cada registro pertenece a una `Empresa`, y toda consulta filtra por ella.

## Requisitos
- Node.js 22 o superior
- PostgreSQL

## Puesta en marcha
```bash
cd barberia-backend
npm install
# copia .env.example a .env y completa DATABASE_URL
npx prisma generate
npx prisma migrate deploy
npm run start:dev
```
La API queda en `http://localhost:3000`.

## Endpoints actuales
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/v1/empresas` | Lista las empresas |
| POST | `/api/v1/empresas` | Crea una empresa |
| GET | `/api/v1/sucursales` | Lista las sucursales |
| POST | `/api/v1/sucursales` | Crea una sucursal (valida que la empresa exista) |
| GET | `/api/v1/servicios` | Lista los servicios |
| POST | `/api/v1/servicios` | Crea un servicio (nombre, duración en minutos, precio) |

Las entradas se validan con `class-validator`: datos mal formados responden 400 y referencias a empresas inexistentes responden 404.

## Reglas de negocio del flujo híbrido (diseño)
Las reservas en línea y los clientes presenciales comparten los mismos barberos y el mismo tiempo. Decisiones de diseño para el módulo de citas:

- **Una sola agenda.** El cliente presencial se registra en el sistema (lo hace recepción) con su nombre y servicio. La disponibilidad en línea se calcula restando todo el tiempo ocupado, sin importar el origen (`WEB` o `PRESENCIAL`).
- **Prioridad.** La reserva web tiene prioridad en su hora; el cliente presencial solo entra en los huecos que el sistema calcula.
- **Inicio y término del corte.** Recepción marca cuándo empieza y termina cada corte. Se guardan las horas reales para comparar contra la duración estimada del servicio.
- **Recordatorio de término.** Si pasa el tiempo estimado sin que se marque el término, el panel avisa a recepción, que puede terminar el corte o extenderlo en bloques de 10 minutos. El sistema solo avisa si la extensión choca con la siguiente cita; no mueve citas por su cuenta.
- **Parámetros configurables** (con valores por defecto, a ajustar con el primer cliente real): tolerancia de llegada tarde (10 min), margen entre citas (5 min), anticipación mínima para reservar en línea (60 min) y tamaño de la extensión (10 min).

## Scripts
`npm run start:dev` (desarrollo) · `npm run build` · `npm test` · `npm run lint`

## Roadmap
- [x] Modelo de datos: Empresa, Sucursal y Servicio
- [x] Crear y listar empresas, sucursales y servicios (con validación)
- [ ] Barberos
- [ ] Horarios de los barberos
- [ ] Clientes
- [ ] Citas: disponibilidad, reserva web y atención presencial (ver reglas de arriba)
- [ ] Autenticación
- [ ] Frontend en React
- [ ] Despliegue

## Autor
Fabrizio, estudiante de Software en Mérida, Yucatán. Proyecto de aprendizaje con un caso real.
