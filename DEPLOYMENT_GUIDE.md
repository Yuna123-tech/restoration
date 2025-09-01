
# React 앱 GitHub Pages 배포 가이드

이 가이드는 `create-react-app` 또는 `Vite`로 생성된 React 프로젝트를 GitHub Pages에 배포하는 방법을 안내합니다.

## 1. 프로젝트 생성 (이미 생성했다면 건너뛰기)

Vite를 사용하여 React + TypeScript 프로젝트를 생성합니다.

```bash
npm create vite@latest your-repo-name -- --template react-ts
cd your-repo-name
npm install
```

## 2. `gh-pages` 패키지 설치

배포를 도와주는 `gh-pages` 패키지를 개발 의존성(`-D`)으로 설치합니다.

```bash
npm install gh-pages -D
```

## 3. `package.json` 파일 설정

`package.json` 파일을 열고 다음 세 가지를 추가 또는 수정합니다.

### 3.1. `homepage` 필드 추가

파일의 최상단에 `homepage` 필드를 추가합니다. URL 형식은 다음과 같습니다.

`"https://{GitHub 사용자 이름}.github.io/{리포지토리 이름}"`

**예시:**

```json
{
  "name": "heritage-keeper",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://your-username.github.io/your-repo-name", // <-- 이 부분을 추가하세요!
  "type": "module",
  // ... 나머지 내용
}
```

### 3.2. `scripts`에 `deploy` 스크립트 추가

`scripts` 객체에 배포를 위한 두 개의 스크립트를 추가합니다.

- `predeploy`: `deploy` 스크립트 실행 전에 자동으로 실행되며, 프로젝트를 빌드합니다.
- `deploy`: 빌드된 결과물을 `gh-pages` 브랜치에 배포합니다.

```json
// package.json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build", // <-- 이 줄 추가
  "deploy": "gh-pages -d dist"  // <-- 이 줄 추가 (Vite의 빌드 폴더는 'dist'입니다)
},
```

**참고:** `create-react-app`을 사용했다면 `deploy` 스크립트는 `"gh-pages -d build"`가 됩니다.

## 4. `vite.config.ts` 파일 설정 (Vite 사용자만 해당)

GitHub Pages의 경로 문제를 해결하기 위해 `vite.config.ts` 파일에 `base` 설정을 추가해야 합니다.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // <-- 리포지토리 이름을 여기에 추가하세요!
})
```

## 5. GitHub 리포지토리 생성 및 코드 푸시

### 5.1. GitHub에 새 리포지토리 생성

GitHub 웹사이트에서 `your-repo-name`이라는 이름으로 새로운 리포지토리를 만듭니다. (Public으로 설정해야 GitHub Pages 무료 플랜을 사용할 수 있습니다.)

### 5.2. 로컬 프로젝트와 원격 리포지토리 연결

터미널에서 다음 명령어를 실행하여 로컬 프로젝트를 GitHub 리포지토리에 푸시합니다.

```bash
# Git 초기화 (아직 안 했다면)
git init

# 원격 리포지토리 추가
git remote add origin https://github.com/your-username/your-repo-name.git

# 모든 파일을 스테이징하고 커밋
git add .
git commit -m "Initial commit: Setup project for deployment"

# main 브랜치에 푸시
git push -u origin main
```

## 6. 배포 실행

이제 모든 설정이 완료되었습니다. 다음 명령어를 실행하여 프로젝트를 배포합니다.

```bash
npm run deploy
```

이 명령어를 실행하면 다음 과정이 자동으로 진행됩니다.
1. `predeploy` 스크립트가 실행되어 프로젝트가 `dist` 폴더에 빌드됩니다.
2. `deploy` 스크립트가 실행되어 `gh-pages`가 `dist` 폴더의 내용을 `gh-pages`라는 새 브랜치에 푸시합니다.

## 7. GitHub Pages 설정 확인

1. GitHub 리포지토리 페이지로 이동합니다.
2. **Settings** > **Pages** 탭으로 이동합니다.
3. **Branch** 섹션에서 소스가 `gh-pages` 브랜치로 설정되어 있는지 확인합니다. (보통 자동으로 설정됩니다.)
4. 상단에 "Your site is live at https://..." 와 같이 배포된 사이트의 주소가 표시됩니다. 주소를 클릭하여 확인하세요. (배포 후 사이트가 실제로 표시되기까지 몇 분 정도 걸릴 수 있습니다.)

## 문제 해결 팁

- **404 에러가 발생하는 경우:**
  - `package.json`의 `homepage` URL이 정확한지 확인하세요.
  - `vite.config.ts`의 `base` 설정이 리포지토리 이름과 일치하는지 확인하세요.
  - 이 프로젝트는 `HashRouter`를 사용하므로 라우팅 문제는 거의 없어야 하지만, 만약 `BrowserRouter`를 사용했다면 404 에러의 주된 원인이 될 수 있습니다.

- **CSS나 이미지가 깨지는 경우:**
  - `vite.config.ts`의 `base` 설정이 올바르게 되어 있는지 다시 확인하세요. GitHub Pages는 하위 디렉토리에서 프로젝트를 제공하기 때문에 이 설정이 매우 중요합니다.

- **배포 후 변경 사항이 보이지 않는 경우:**
  - 브라우저 캐시 문제일 수 있습니다. 강력 새로고침(Ctrl+Shift+R 또는 Cmd+Shift+R)을 시도해 보세요.
  - GitHub Pages가 업데이트되기까지 몇 분 정도 소요될 수 있습니다.
```