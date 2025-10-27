#!/bin/bash

echo "========================================"
echo "  DocNet 360 - Full Application Build  "
echo "========================================"

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Building React Frontend...${NC}"
cd frontend
npm install --legacy-peer-deps
npm run build:prod

echo -e "${GREEN}✓ Frontend build completed${NC}"

echo -e "${BLUE}Step 2: Building Spring Boot Backend...${NC}"
cd ../backend
mvn clean package -DskipTests

echo -e "${GREEN}✓ Backend build completed${NC}"

echo ""
echo -e "${GREEN}========================================"
echo "  Build Successful!                     "
echo "========================================${NC}"
echo ""
echo "JAR file location: backend/target/DocNet-360-0.0.1-SNAPSHOT.jar"
echo ""
echo "To run in production:"
echo "  cd backend"
echo "  java -jar -Dspring.profiles.active=prod target/DocNet-360-0.0.1-SNAPSHOT.jar"
echo ""