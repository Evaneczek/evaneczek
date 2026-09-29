# Liczę na Setkę na Railway: serwer Node (bez zewnętrznych bibliotek) + strona z katalogu public/
FROM node:22-alpine
WORKDIR /app
COPY . .
ENV NODE_ENV=production
# baza SQLite na wolumenie Railway (podłączonym pod /data)
ENV DB_PATH=/data/dane.db
CMD ["node", "--no-warnings", "server.js"]
