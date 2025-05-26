# 항해 플러스 프론트엔드 9주차 과제

## 프론트엔드 배포 파이프라인
Next.js로 개발된 프로젝트를 GitHub Actions와 AWS S3 + CloudFront를 활용해 자동으로 배포하는 CI/CD 파이프라인을 구성합니다.
![배포_파이프라인](https://github.com/user-attachments/assets/57019217-7802-414d-9856-d5b376a50230)


## 배포 개요

GitHub Actions에 워크플로우를 작성해 다음과 같이 배포가 진행되도록 합니다.

(사전작업: Ubuntu 최신 버전 설치)

1. Checkout 액션을 사용해 코드 내려받기
> actions/checkout으로 GitHub 레포지토리의 코드를 runner에 내려받습니다.

2. `npm ci` 명령어로 프로젝트 의존성 설치
> npm ci 명령어를 통해 lockfile 기반으로 정확한 의존성을 설치합니다.

3. `npm run build` 명령어로 Next.js 프로젝트 빌드
> npm run build로 정적 파일을 생성합니다.


4. AWS 자격 증명 구성
> GitHub Secrets에 저장된 자격 증명을 사용해 AWS CLI를 인증합니다.


5. 빌드된 파일을 S3 버킷에 동기화
> aws s3 sync 명령어를 통해 빌드된 정적 파일을 S3 버킷에 업로드합니다.


6. CloudFront 캐시 무효화
> aws cloudfront create-invalidation으로 전 세계 엣지 서버의 캐시를 갱신합니다.



## 주요 링크

- S3 버킷 웹사이트 엔드포인트: http://hanghae-plus-front.s3-website.ap-northeast-2.amazonaws.com/
- CloudFrount 배포 도메인 이름: https://d2ivmov1mu450u.cloudfront.net/

## 주요 개념

### GitHub Actions과 CI/CD 도구
> GitHub Actions는 GitHub에서 제공하는 CI/CD 플랫폼으로, 워크플로우를 정의해 코드 린트, 빌드, 테스트, 배포를 자동화할 수 있습니다.
.github/workflows 디렉토리에 .yml 파일을 작성하여 설정합니다.
- CI(지속적 통합): 코드 변경 시 자동 테스트 및 빌드
- CD(지속적 배포): 성공한 빌드를 자동으로 배포

### S3와 정적 웹 호스팅
> AWS S3는 정적 파일(HTML, JS, CSS 등)을 저장하고 웹 서버 없이 제공할 수 있는 객체 스토리지 서비스입니다.
Next.js로 생성된 정적 파일을 업로드하면 웹사이트처럼 서비스할 수 있습니다.

### CloudFront와 CDN
> CloudFront는 AWS의 CDN 서비스로, 전 세계 엣지 로케이션에 콘텐츠를 캐싱합니다.
사용자와 가까운 위치에서 빠르게 콘텐츠를 제공하여 지연 시간을 줄입니다.

### 캐시 무효화 (Cache Invalidation)
> CloudFront는 기본적으로 파일을 캐싱하므로, 새로 배포된 콘텐츠가 즉시 반영되지 않을 수 있습니다.
`create-invalidation` 명령어로 캐시된 파일을 무효화하여 최신 상태를 유지합니다.

### Repository Secret과 환경 변수
> 민감한 정보(AWS 자격 증명 등)는 GitHub Repository의 Secrets에 저장합니다.
워크플로우 실행 시 환경 변수로 주입하여 안전하게 사용할 수 있습니다.


## 📊 성능 비교: S3 vs CloudFront

<table>
  <tr>
    <td align="center">
      <div>
        <img src="https://github.com/user-attachments/assets/d17f5cf0-de57-4f11-8cff-f47e9aab4c7b" alt="" />
      </div>
    </td>
    <td align="center">
      <div>
        <img src="https://github.com/user-attachments/assets/158fb200-3dc8-4eb3-a1ab-7e4d85957610" alt="" />
      </div>
    </td>
  </tr>
  <tr>
    <td align="center">
      S3 단독 (이미지 1)
    </td>
    <td align="center">
      CloudFront (이미지 2)
    </td>
  </tr>
</table>

| 측정 지표               | S3 단독 (이미지 1) | CDN (CloudFront, 이미지 2) | 개선율           |
|------------------------|---------------------|------------------------------|------------------|
| **총 완료 시간 (Finish)** | 7.35s              | 7.28s                        | ✅ **0.95% ⬇️**     |
| **DOMContentLoaded**   | 255ms               | 115ms                        | ✅ **54.9% ⬇️**     |
| **로드 (Load)**        | 990ms               | 364ms                        | ✅ **63.2% ⬇️**     |
| **전송 크기**           | 9.7 kB             | 15.6 kB                      | ❌ **60.8% ⬆️**   |
| **리소스 크기**         | 39.0 MB            | 19.8 MB                      | ✅ **49.2% ⬇️**  |

### 요약

- **DOMContentLoaded**가 절반 이하로 감소하여 초기 렌더링 속도 개선.
- **Load 이벤트** 시간도 약 **63%** 개선되어 전체 로딩 성능 향상.
- 총 완료 시간(Finish)은 큰 차이는 없지만, 전반적인 반응성 향상 확인됨.
- **리소스 크기**가 절반 수준으로 줄어든 반면, **전송 크기**는 약간 증가.

> 결과적으로 CDN 적용을 통해 **사용자 체감 성능은 확실히 향상**됨.
