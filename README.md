# ImplantDX MVP

Este es el prototipo funcional corregido, listo para subir a GitHub y conectar con Vercel.

## Despliegue en Vercel

### Opción 1: Deploy automático desde GitHub
1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Importa este repositorio: `CACO1972/implantdx`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"
6. Tu link de deploy estará disponible en: `https://[proyecto].vercel.app`

### Opción 2: Deploy con Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Scripts disponibles
- `npm run dev` - Servidor de desarrollo en http://localhost:3000
- `npm run build` - Compilar para producción
- `npm run start` - Iniciar servidor de producción