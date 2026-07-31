<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Colaboración: repo compartido (VARIAS personas trabajan la landing)

Este repo lo edita más de una persona desde sitios distintos. Para no pisar el trabajo ajeno ni generar conflictos, es OBLIGATORIO sincronizar con git al empezar y al terminar:

- **Al EMPEZAR a trabajar la landing:** ejecutar `git pull` (o `git fetch` + revisar) ANTES de tocar cualquier archivo. Comprobar si hay cambios remotos pendientes de sincronizar y traerlos.
- **Al ACABAR:** hacer `commit` + `git push` para que el resto tenga los cambios. No dejar trabajo sin subir.
- **Si el pull trae conflictos:** resolverlos antes de continuar; nunca forzar un push por encima del trabajo de otro.
- Ante la duda de si hay cambios remotos, comprobar SIEMPRE (`git status` / `git fetch`) en lugar de asumir que la copia local está al día.
