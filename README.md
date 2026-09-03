# galapagos

외부와 단절된 상황에서 사용할 수 있는 component 기반 UI 라이브러리 및 템플릿
 - 기본적인 사이트 On-Premise 환경에서 F/E 개발에 필요한 component를 제공한다.
 - 제공된 component를 기반으로 템플릿을 구성한다.
 - On-Premise의 특성상 추가적인 빌드가 없이 바로 개발, 적용 가능하도록 한다.
 - B/E 기능 구현은 없다.
 - F/E 기능과 B/E 통신 부분은 interface만 제공한다.

# 사용 기술 spec
preact + javasript, lodash, bootstrap

# 요구사항
폐쇄망에서 수행할 CMS 기능을 구현해야한다.
- 로그인, 로그아웃
- 사용자 권한 관리 기능
- 메뉴 추가 삭제 기능
- 콘텐츠 편집 기능
