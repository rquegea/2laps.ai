#!/bin/bash

# Script para aumentar el límite de archivos abiertos en macOS
# Esto soluciona el error "EMFILE: too many open files"

echo "🔧 Aumentando límite de archivos abiertos..."

# Aumentar el límite para la sesión actual
ulimit -n 10240

# Verificar el nuevo límite
NEW_LIMIT=$(ulimit -n)
echo "✅ Nuevo límite: $NEW_LIMIT archivos"

# Limpiar caché
echo "🧹 Limpiando cache..."
rm -rf .next node_modules/.cache

# Iniciar el servidor
echo "🚀 Iniciando servidor..."
pnpm dev
