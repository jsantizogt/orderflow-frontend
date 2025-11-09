# =====================================================
# DOCKERFILE PARA EASYPANEL
# =====================================================

# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Build de producción
RUN npm run build

# =====================================================
# Etapa 2: Producción con servidor
# =====================================================

FROM node:18-alpine

WORKDIR /app

# Instalar 'serve' para servir archivos estáticos
RUN npm install -g serve

# Copiar el build
COPY --from=builder /app/dist ./dist

# Exponer puerto (Easypanel usa $PORT)
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Comando de inicio
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]
