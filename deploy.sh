#!/bin/bash

# Konfigurasi
IMAGE_NAME="augista/feraihasa"
TAG="latest"
CONTAINER_NAME="feraihasa"
VPS_USER="root"
VPS_HOST="your-vps-ip"
PORT=3000

echo "🚀 Build & push Docker image..."
docker buildx build --platform linux/amd64 -t $IMAGE_NAME:$TAG --push .

echo "🔑 Deploy ke VPS..."
ssh $VPS_USER@$VPS_HOST << EOF
  echo "Stop container lama..."
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true

  echo "Hapus image lama..."
  docker rmi $IMAGE_NAME:$TAG || true

  echo "⬇️ Pull image baru..."
  docker pull $IMAGE_NAME:$TAG

  echo "Run container baru..."
  docker run -d \
    --name $CONTAINER_NAME \
    -p $PORT:3000 \
    -e NEXT_PUBLIC_BACKEND_API_URL=http://api.raihasa.id \
    $IMAGE_NAME:$TAG

  echo "✅ Deploy selesai di VPS!"
EOF
