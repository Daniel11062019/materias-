# Prompt: proyecto Venta de Frutas

Eres mi asistente en este proyecto universitario. Responde siempre en español, con palabras sencillas.
El profesor pregunta por cada comando: usa SOLO lo que aparece aquí y explícame lo que hagas.

## Proyecto
- `venta_frutas_backend`: Node, Express, TypeScript y PostgreSQL.
- `venta_frutas_frontend`: Angular 22, Angular Material y SweetAlert2.
- Base de datos: `venta_frutas`.
- Las tablas del negocio las da el profesor. No inventes tablas, columnas ni datos.

## Backend
```
database/auth.sql      roles y usuarios (login)
database/script.sql    tablas del profesor
src/config/database.ts     conexión (pool), esIdValido y construirSet
src/models/X.models.ts     interface + clase XModel con las consultas SQL
src/controller/X.controller.ts   recibe req y responde res
src/routes/X.routes.ts     get, post, put, delete
src/middleware/error.middleware.ts   errores
src/app.ts      express, cors, express.json y las rutas /api/v1/x
src/server.ts   prueba la base y enciende el servidor
```
Recorrido: server -> app -> routes -> controller -> models -> database.

Reglas:
- Modelo: métodos static async obtenerTodos, obtenerPorId, crear, actualizar, eliminar.
- Consultas con `pool.query` y parámetros `$1, $2`. Nunca pegar valores dentro del SQL.
- Columnas en snake_case en SQL y camelCase en el JSON: `id_fruta AS "idFruta"`.
- `actualizar` usa `construirSet`. Los ids se revisan con `esIdValido`.
- Controlador: 200 al consultar, 201 al crear, 204 al eliminar, 404 si no existe.
- Si al eliminar hay registros relacionados (CODIGO_PG.LLAVE_FORANEA), responder 409.
- Al insertar ids a mano en script.sql, ajustar la secuencia con `setval`.
- Librerías: express, cors, dotenv, pg, bcryptjs. No agregar otras sin preguntarme.

## Frontend
```
src/app/Models/XModels.ts      interface
src/app/services/x.ts          XService con HttpClient y Observable
src/app/views/x/               x.ts, x.html, x.css
src/app/componentes/table/     app-table (tabla genérica con paginador)
src/app/views/menu/            menú lateral
src/app/views/login, registro  formularios
src/app/guards/                auth.guard (sesión) y admin.guard (admin)
src/app/app.routes.ts          rutas
```
Reglas:
- PROHIBIDO `signal`, `toSignal`, `computed`, `effect`.
- Servicios por el constructor. `inject()` solo en los guards, porque son funciones.
- Datos en variables normales y `subscribe` en el constructor:
```ts
frutasData: any[] = [];

constructor(private frutasService: FrutasService) {
  this.frutasService.getFrutas().subscribe((data: any[]) => {
    this.frutasData = data;
  });
}
```
- Vista: `<app-table [data]="frutasData"></app-table>`. La tabla saca las columnas con Object.keys; no hacer otra tabla.
- Todo componente lleva `changeDetection: ChangeDetectionStrategy.Eager` (Angular 22 trae OnPush y sin esto no se actualiza la pantalla).
- No quitar `zone.js` ni `provideZoneChangeDetection()`.
- Formularios: FormBuilder, FormGroup, Validators, formControlName, mat-error con *ngIf, y Swal.fire para los avisos.
- En los formularios y la tabla usar *ngIf y *ngFor. El menú y el inicio ya usan @if; dejarlos así.

## Login (ya está hecho, no cambiarlo)
- Contraseña de mínimo 8 caracteres, cifrada con bcryptjs. La sesión va en sessionStorage.
- El registro crea usuarios con rol cliente, muestra "Usuario creado" y manda al login.
- admin ve todo. cliente ve inicio, frutas y contacto.

## Cuando te dé una tabla nueva
1. `database/script.sql`: CREATE TABLE.
2. Backend: model, controller, routes y registrar la ruta en app.ts.
3. Frontend: Model, service, view, ruta en app.routes.ts y opción en el menú.
4. Si reemplaza a una vista de ejemplo (frutas, clientes, ventas), usar esos archivos.
5. Preguntarme si la ve el cliente o solo el admin (admin.guard).
6. Compilar los dos con `npm run build` y decirme qué cambió en cada archivo.

## Comandos
- Backend: `npm install`, `npm run dev`, `npm run build`, `npm start` (http://localhost:3000)
- Frontend: `npm install`, `npm start`, `npm run build` (http://localhost:4200)

## Seguridad
- Nunca subir `.env` ni escribir contraseñas en el código.
- No subir a GitHub ni borrar datos sin que yo lo pida.
