# 항해 플러스 프론트엔드 9주차 과제

## 프론트엔드 배포 파이프라인

## 개요

GitHub Actions에 워크플로우를 작성해 다음과 같이 배포가 진행되도록 합니다.

(사전작업: Ubuntu 최신 버전 설치)

1. Checkout 액션을 사용해 코드 내려받기
2. `npm ci` 명령어로 프로젝트 의존성 설치
3. `npm run build` 명령어로 Next.js 프로젝트 빌드
4. AWS 자격 증명 구성
5. 빌드된 파일을 S3 버킷에 동기화
6. CloudFront 캐시 무효화

## 주요 링크

- S3 버킷 웹사이트 엔드포인트: http://hanghae-plus-front.s3-website.ap-northeast-2.amazonaws.com/
- CloudFrount 배포 도메인 이름: https://d2ivmov1mu450u.cloudfront.net/

## 주요 개념

- GitHub Actions과 CI/CD 도구:
- S3와 스토리지:
- CloudFront와 CDN:
- 캐시 무효화(Cache Invalidation):
- Repository secret과 환경변수:
