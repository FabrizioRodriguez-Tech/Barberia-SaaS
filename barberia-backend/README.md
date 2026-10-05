# barberia-backend

API del proyecto **Barbería SaaS** (NestJS + TypeScript + Prisma + PostgreSQL).
La descripción general del proyecto, el alcance del MVP y el roadmap están en el [README principal](../README.md).

## Puesta en marcha

```bash
npm install
cp .env.example .env      # en Windows: copy .env.example .env
# edita .env y completa DATABASE_URL
npx prisma generate
npx prisma migrate deploy
npm run start:dev
```

La API queda en `http://localhost:3000`.

## Estructura

```
prisma/              schema.prisma y migraciones (no editar las migraciones ya aplicadas)
src/
  prisma/            PrismaService y PrismaModule (acceso a la base de datos)
  empresa/           módulo Empresa
  sucursal/          módulo Sucursal
  servicio/          módulo Servicio
  app.module.ts      registro de módulos
  main.ts            arranque y ValidationPipe global
```

Cada módulo sigue el mismo patrón: `controller` (rutas) → `service` (lógica) → Prisma (datos), con un `dto/` para validar la entrada.

## Comandos útiles

| Comando | Para qué |
|---|---|
| `npm run start:dev` | Servidor con recarga automática |
| `npm run build` | Compilar |
| `npm test` | Pruebas |
| `npx prisma migrate dev --name <nombre>` | Crear y aplicar una migración tras cambiar `schema.prisma` |
| `npx prisma validate` | Revisar que el schema sea válido |

## Notas importantes

- Prisma está fijado en la versión **6.x**. No actualizar a 7+ sin revisar el cambio de configuración (`prisma.config.ts`).
- Todo registro pertenece a una `Empresa`; cada consulta debe filtrar por ella.
- Las rutas llevan el prefijo `/api/v1`.
