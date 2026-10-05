# Barbería SaaS

Sistema web de reservas y gestión para barberías con varias sucursales, pensado como SaaS multi-negocio (multi-tenant): cada barbería usa la misma plataforma con sus datos completamente separados de las demás.

> **Estado:** en desarrollo (MVP). Este repositorio contiene por ahora el backend.

## ¿Qué problema resuelve?
Muchas barberías agendan citas por WhatsApp, lo que provoca empalmes, mensajes sin responder y poca visibilidad del negocio. Este sistema permite reservar en línea y administrar sucursales, barberos y servicios desde un solo lugar.

## Alcance del MVP
- Empresas (negocios) y sus sucursales
- Servicios, barberos y clientes
- Reserva de citas: sucursal → servicio → barbero → fecha y hora

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

## Scripts
`npm run start:dev` (desarrollo) · `npm run build` · `npm test` · `npm run lint`

## Roadmap
- [x] Modelo de datos: Empresa y Sucursal
- [ ] Crear empresas y sucursales (POST con validación)
- [ ] Servicios, barberos y clientes
- [ ] Citas y flujo de reserva
- [ ] Autenticación
- [ ] Frontend en React
- [ ] Despliegue

## Autor
Fabrizio, estudiante de Software en Mérida, Yucatán. Proyecto de aprendizaje con un caso real.
