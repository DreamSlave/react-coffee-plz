# Build stage
FROM node:20

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트의 모든 파일 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# 3000 포트 노출
EXPOSE 5173

# 개발 서버 실행
CMD ["npm", "run", "serve"]