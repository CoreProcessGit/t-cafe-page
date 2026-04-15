import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: '일반',
    items: [
      {
        q: 'T-CAFE는 어떤 앱인가요?',
        a: <p>T-CAFE는 Atlassian Jira Cloud용 테스트 관리 앱입니다. 테스트 케이스, 테스트 플랜, 실행 결과, 리포트를 통합 관리할 수 있습니다. <strong>Factor Combination</strong>(조합 자동 생성), <strong>다국어 지원</strong>(한/영/일), <strong>역할 기반 권한 관리</strong> 등이 차별화 기능입니다.</p>,
      },
      {
        q: 'T-CAFE를 사용하려면 어떤 조건이 필요한가요?',
        a: <p>Atlassian Jira Cloud 활성 구독 + Jira 관리자 권한(앱 설치 시)이 필요합니다. 자체 호스팅 Jira(Server/DC)는 지원하지 않습니다.</p>,
      },
      {
        q: '어떤 언어를 지원하나요?',
        a: <p><strong>Auto / English / 한국어 / 日本語</strong> 4개 옵션을 제공합니다 (Auto는 브라우저/Jira 사용자 locale 추종). 우상단 언어 선택 메뉴에서 변경할 수 있습니다.</p>,
      },
      {
        q: 'T-CAFE의 데이터는 어디에 저장되나요?',
        a: <p>테스트 데이터와 첨부파일 모두 안전한 데이터센터에 저장됩니다. 자세한 내용은 <a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>를 참고하세요.</p>,
      },
    ],
  },
  {
    category: '설치 / 시작',
    items: [
      {
        q: 'T-CAFE 설치 방법은?',
        a: <p>Jira Cloud → 설정 → Apps → Find new apps → "T-CAFE" 검색 → Get it now. 자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고.</p>,
      },
      {
        q: '설치 후 첫 사용자는 어떤 권한을 받나요?',
        a: <p>프로젝트의 첫 사용자는 자동으로 <strong>Admin</strong> 권한을 받습니다. 이후 가입자는 Tester 권한을 받습니다.</p>,
      },
      {
        q: '샘플 데이터는 어떻게 만드나요?',
        a: <p>Overview 페이지의 Welcome Banner에서 "<strong>샘플 데이터 생성</strong>" 버튼을 클릭하세요. <strong>Admin 권한</strong>이 필요합니다. 자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link>.</p>,
      },
      {
        q: '샘플 데이터를 다시 만들 수 있나요?',
        a: <p>프로젝트에서 이미 한 번 생성을 한 적이 있다면 Welcome Banner 및 Create Sample Data 버튼은 영구 숨김됩니다. 재생성이 필요하면 관리자에게 문의해주세요.</p>,
      },
    ],
  },
  {
    category: '권한',
    items: [
      {
        q: '권한 종류는?',
        a: <p>기본 4가지 시스템 역할 — <strong>Admin</strong> / <strong>Team Admin</strong> / <strong>Tester</strong> / <strong>Developer</strong>. 프로젝트 필요에 따라 커스텀 역할을 추가로 생성할 수 있습니다. 자세한 매트릭스는 <Link to="/support/guide/permissions">02. 사용자 권한</Link> 참고.</p>,
      },
      {
        q: '본인 권한을 변경할 수 있나요?',
        a: <p>권한을 가진 Admin이라면 자기 자신의 권한/역할도 편집 페이지에서 조작할 수 있습니다. 다만 "프로젝트의 마지막 활성 Admin"을 자기 자신이 강등하거나 비활성화하려 하면 시스템이 자동으로 차단합니다.</p>,
      },
      {
        q: '마지막 Admin을 삭제할 수 있나요?',
        a: <p>아니요. 프로젝트의 마지막 활성 Admin은 삭제·비활성화·강등이 모두 차단됩니다.</p>,
      },
      {
        q: 'Configuration 탭이 보이지 않습니다',
        a: <p>Configuration 탭은 <strong>Admin 또는 Team Admin</strong> 권한일 때만 표시됩니다. Tester / Developer는 접근할 수 없습니다. 권한 변경이 필요하면 Admin에게 요청하세요.</p>,
      },
      {
        q: 'Tester 권한으로 TC를 만들 수 없나요?',
        a: <p>네. Tester의 <code>testCases</code> 권한은 <code>view: true, execute: true, export: true</code>만 활성되어 있으며 create/edit/delete/import/manageFolder는 모두 false입니다.</p>,
      },
      {
        q: '커스텀 역할을 만들 수 있나요?',
        a: <p>Configuration → User Permissions → Roles 탭에서 커스텀 역할을 생성하고 <strong>8개 기능 영역</strong>(overview / testCases / factorCombination / testPlans / reports / configuration / userManagement / attachments)의 권한을 세밀하게 설정할 수 있습니다. 시스템 역할(Admin, Team Admin, Tester, Developer)은 삭제할 수 없지만(권한 변경은 가능).</p>,
      },
      {
        q: '사용자를 비활성화할 수 있나요?',
        a: <p>Users 탭에서 Activate 토글을 OFF하면 해당 사용자의 permissions가 전부 false로 반환되어 실질적으로 모든 접근이 차단됩니다. 다시 ON하면 역할의 기본 권한이 즉시 복원됩니다. 비활성 사용자는 Status 필터를 Inactive로 변경하면 목록에 표시됩니다.</p>,
      },
    ],
  },
  {
    category: '테스트 케이스',
    items: [
      {
        q: 'TC와 TC Key의 차이는?',
        a: <p><strong>TC Key</strong>는 자동 부여되는 식별자(예: <code>PROJ-1</code>)이고, <strong>TC</strong>는 그 식별자에 연결된 실제 내용(이름, 설명, 스텝 등)입니다.</p>,
      },
      {
        q: '삭제한 TC를 복구할 수 있나요?',
        a: <p><strong>불가능</strong>합니다. 삭제 전에 백업(Export)을 권장합니다.</p>,
      },
      {
        q: '같은 이름의 TC를 여러 개 만들 수 있나요?',
        a: <p>가능하지만 권장하지 않습니다. 각 TC는 고유한 키로 구분되지만, 같은 이름이면 사용자가 헷갈릴 수 있습니다.</p>,
      },
      {
        q: 'TC 키를 변경할 수 있나요?',
        a: <p>변경할 수 없습니다. TC 키는 시스템이 자동 부여하며 영구적입니다.</p>,
      },
      {
        q: 'TC를 다른 프로젝트로 이동할 수 있나요?',
        a: <p>현재 버전에서는 직접 이동 기능이 없습니다. Export 후 대상 프로젝트에서 Import해야 합니다.</p>,
      },
      {
        q: 'Test Steps에 이미지를 넣을 수 있나요?',
        a: <p>Test Steps 셀은 텍스트 입력 필드라 이미지를 인라인으로 삽입할 수는 없습니다. 다만 <Link to="/support/guide/attachments">Attachments</Link>에 업로드한 파일의 <code>[ATTACHMENT:id:filename]</code> 태그를 Test Steps(Step / Test Data / Expected Result)뿐 아니라 Description / Precondition / UDF에 붙여넣으면, 보기 모드에서 자동으로 클릭 가능한 다운로드 링크로 변환됩니다.</p>,
      },
    ],
  },
  {
    category: 'Factor Combination',
    items: [
      {
        q: 'Factor Combination이란?',
        a: <p>여러 변수의 조합을 자동으로 생성해 TC를 대량 생성하는 기능입니다. 8개 경쟁 앱 중 <strong>T-CAFE만 가지고 있는 차별화 기능</strong>입니다. 자세한 내용은 <Link to="/support/guide/factor-combination">08. Factor Combination</Link>.</p>,
      },
      {
        q: 'Pairwise는 무엇인가요?',
        a: <p>모든 두 변수의 쌍이 한 번씩 등장하도록 최소 조합만 만드는 알고리즘입니다. Full Combination 대비 50~80% TC 수가 줄어들지만, 통계적으로 약 75%의 결함을 발견할 수 있습니다.</p>,
      },
      {
        q: 'Factor를 몇 개까지 만들 수 있나요?',
        a: <p>Factor 자체의 개수 제한은 없지만, <strong>시뮬레이션 결과 조합 수는 최대 5,000개로 안전망이 걸려 있어</strong> 초과 시 생성이 중단됩니다. 실무상 <strong>5~7개 이내</strong>의 Factor로 구성하고, 필요하면 Constraint로 불필요한 조합을 제거하는 것을 권장합니다.</p>,
      },
      {
        q: 'Factor Combination을 수정하면 기존 TC는 어떻게 되나요?',
        a: <p>초기 TC 생성은 Factor Combination 상세 화면의 <strong>Create Test Case</strong>(테스트 케이스 생성) 버튼을 사용하고, 이후 Details 탭에서 조합별 속성(이름·설명 등)을 바꾼 뒤 <strong>Apply</strong>(적용) 버튼으로 해당 TC들에 변경 사항을 반영합니다. 자세한 동작은 <Link to="/support/guide/factor-combination">08. Factor Combination</Link>.</p>,
      },
    ],
  },
  {
    category: '테스트 플랜',
    items: [
      {
        q: 'TC와 TP의 차이는?',
        a: <p>TC는 "무엇을 테스트할지" 정의하는 영구 자료이고, TP는 "이번에 실행할 TC들의 묶음"입니다. 한 TC가 여러 TP에 포함될 수 있습니다.</p>,
      },
      {
        q: 'TP에 추가한 후 원본 TC를 수정하면 실행 항목도 바뀌나요?',
        a: <p><strong>아니요</strong>. 실행 항목은 추가된 시점의 데이터가 보존됩니다. 원본 TC가 수정되어도 실행 항목은 변경되지 않습니다. 동기화하려면 실행 항목을 제거 후 다시 추가해야 합니다.</p>,
      },
      {
        q: '한 TP에 같은 TC를 여러 번 추가할 수 있나요?',
        a: <p>가능하지만 권장하지 않습니다. 같은 TC가 여러 번 실행되어 통계가 왜곡될 수 있습니다.</p>,
      },
      {
        q: 'TP를 끝내면 어떻게 처리해야 하나요?',
        a: <p>기본 제공 Plan Status는 <strong>Draft / Open / Completed</strong> 3종이며, 완료된 TP는 <strong>Completed</strong>로 변경하는 것을 권장합니다. 팀 내 절차가 별도로 필요하면 Configuration → Plan Status에서 커스텀 상태(예: Closed, Archived 등)를 추가해 사용하세요. 삭제는 감사 추적을 위해 권장하지 않습니다.</p>,
      },
    ],
  },
  {
    category: '테스트 실행',
    items: [
      {
        q: 'Tester 권한으로 실행이 안 됩니다',
        a: (
          <>
            <p>다음을 확인하세요:</p>
            <ol>
              <li>Tester 권한이 정확한지</li>
              <li>TP의 상태가 Open (또는 사용자 정의 진행 상태)인지</li>
              <li>Jira 프로젝트 접근 권한이 있는지</li>
            </ol>
          </>
        ),
      },
      {
        q: 'Pass / Fail / Block / Skip의 차이는?',
        a: (
          <ul>
            <li><strong>Pass</strong>: 모든 스텝이 기대 결과대로 정상 동작</li>
            <li><strong>Fail</strong>: 한 개 이상의 스텝에서 기대 결과와 다름</li>
            <li><strong>Block</strong>: 다른 문제로 실행 자체가 불가 (사전 조건 미충족 등)</li>
            <li><strong>Skip</strong>: 의도적으로 실행 안 함</li>
          </ul>
        ),
      },
      {
        q: 'Fail 시 Jira Issue를 만들 수 있나요?',
        a: <p>실행 항목 화면에서 <strong>Create Issue</strong> 버튼으로 Jira 이슈 생성 모달을 열 수 있습니다. Summary는 비어 있어 직접 입력해야 하며, Description에는 기본 템플릿이 채워진 상태로 표시됩니다. 완전 자동 생성은 아닙니다.</p>,
      },
      {
        q: '한 번에 여러 실행 항목의 상태를 변경할 수 있나요?',
        a: <p>아니요. 현재 버전의 bulk 작업은 <strong>이동(Move)</strong>과 <strong>삭제(Delete)</strong>만 제공하며, 여러 실행 항목의 Pass/Fail/Block/Skip 상태를 한 번에 바꾸는 Bulk Update는 제공하지 않습니다. 상태는 각 항목별로 개별 변경해야 합니다.</p>,
      },
      {
        q: '실행 결과를 자동화 도구에서 import할 수 있나요?',
        a: <p>현재 버전에서는 수동 입력만 지원합니다. CI/CD 자동화 결과 import는 향후 로드맵에 있습니다.</p>,
      },
    ],
  },
  {
    category: '첨부파일',
    items: [
      {
        q: '첨부파일은 어디에 저장되나요?',
        a: <p>안전한 데이터센터에 저장됩니다. 자세한 내용은 <Link to="/support/guide/attachments">14. 첨부파일</Link>.</p>,
      },
      {
        q: '파일 크기 제한은?',
        a: <p>프로젝트 합계 <strong>200 MB</strong>가 한도입니다 (프론트엔드 <code>MAX_STORAGE_SIZE</code>). 단일 파일 한도는 서버 정책에 따라 변동되며, 한도를 초과하면 업로드 시 "단일 파일 한도 초과" 에러가 표시됩니다. 자세한 내용은 <Link to="/support/guide/attachments">14. 첨부파일</Link>.</p>,
      },
      {
        q: '어떤 파일 형식을 지원하나요?',
        a: <p>이미지(PNG/JPG/GIF), 문서(PDF/DOC/XLS), 텍스트, 압축 등 일반적인 형식을 모두 지원합니다. 자세한 목록은 <Link to="/support/guide/attachments">14. 첨부파일</Link>.</p>,
      },
      {
        q: '첨부파일을 삭제하면 복구할 수 있나요?',
        a: <p><strong>불가능</strong>합니다. 삭제 전에 다운로드하여 백업하세요.</p>,
      },
    ],
  },
  {
    category: 'Import / Export',
    items: [
      {
        q: '다른 도구(Xray, Zephyr 등)에서 마이그레이션할 수 있나요?',
        a: <p>Import는 T-CAFE의 고정된 컬럼명(Key, Name, Description, Objective, Precondition, Type, Case Type, Priority, Owner, Components, Labels, Folder, Folder Path, UDF, Test Steps)을 기준으로 자동 인식합니다. <strong>별도의 컬럼 매핑 UI는 제공하지 않으므로</strong>, 타 도구에서 Export한 파일의 컬럼 헤더를 직접 편집해 T-CAFE 양식에 맞춘 뒤 Import해야 합니다. 자세한 내용은 <Link to="/support/guide/import-export">09. Import / Export</Link>.</p>,
      },
      {
        q: 'Export 형식은?',
        a: <p>CSV, JSON, Excel(XLSX) 3가지를 지원합니다.</p>,
      },
      {
        q: 'Import 시 한글이 깨집니다',
        a: <p>파일을 <strong>UTF-8 BOM</strong> 인코딩으로 저장하세요. Excel의 경우 "다른 이름으로 저장" → "CSV UTF-8 (쉼표로 구분)" 선택.</p>,
      },
      {
        q: '한 번에 몇 개의 TC를 Import할 수 있나요?',
        a: <p>한 번의 Import에서 <strong>최대 5,000개</strong>까지 처리됩니다(<code>MAX_IMPORT_SIZE</code> 한도). 그 이상이면 파일을 나누어 Import해야 하며, 대용량일수록 실패 시 부분 복구가 어려우니 수백 개 단위로 분할을 권장합니다.</p>,
      },
    ],
  },
  {
    category: '게시판',
    items: [
      {
        q: '게시판에 글을 쓸 수 있는 사람은?',
        a: <p><strong>Admin 전용</strong>입니다 (<code>overview.boardPost</code> 권한). Team Admin / Tester / Developer는 조회만 가능합니다.</p>,
      },
      {
        q: '게시글을 수정/삭제할 수 있나요?',
        a: <p>Admin만 가능합니다. 본인이 작성한 글이라도 Admin 권한이 없으면 수정/삭제 버튼이 보이지 않습니다.</p>,
      },
      {
        q: '카테고리가 있나요?',
        a: <p>현재 버전에서는 작성 화면에 카테고리 선택 필드가 없으며 모든 게시글이 <code>Notice</code> 카테고리로 저장됩니다. 별도의 "상단 고정(pin)" 기능도 없고 게시글은 작성일 기준 최신순으로만 정렬됩니다. 자세한 내용은 <Link to="/support/guide/board">04. 게시판</Link>.</p>,
      },
    ],
  },
  {
    category: '데이터 보안',
    items: [
      {
        q: 'T-CAFE는 데이터를 어떻게 보호하나요?',
        a: (
          <>
            <ul>
              <li><strong>데이터 보호</strong>: 민감한 테스트 데이터는 안전하게 보호되어 저장</li>
              <li><strong>권한 제어</strong>: 역할 기반 접근 제어 (Admin / Team Admin / Tester / Developer)</li>
              <li><strong>데이터 격리</strong>: 각 Jira 인스턴스 및 프로젝트별로 데이터 분리</li>
              <li><strong>웹 보안</strong>: 웹 표준 보안 기준을 준수합니다</li>
            </ul>
            <p>자세한 내용은 <a href="https://t-cafe.com/security-policy" target="_blank" rel="noopener noreferrer">Security Policy</a>.</p>
          </>
        ),
      },
      {
        q: 'T-CAFE가 우리 데이터를 AI 학습에 사용하나요?',
        a: <p><strong>아니요</strong>. T-CAFE는 고객 데이터를 어떠한 AI 또는 머신러닝 모델 학습에도 사용하지 않습니다.</p>,
      },
      {
        q: '데이터를 우리 회사 서버로 옮길 수 있나요?',
        a: <p>현재는 안전한 데이터센터에 저장됩니다. Self-hosting 옵션은 향후 검토 중입니다.</p>,
      },
      {
        q: 'GDPR을 준수하나요?',
        a: <p>네. T-CAFE는 GDPR, CCPA, LGPD를 모두 준수합니다. 자세한 내용은 <a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>와 <a href="https://t-cafe.com/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.</p>,
      },
    ],
  },
  {
    category: '청구 / 라이선스',
    items: [
      {
        q: '가격은 어떻게 되나요?',
        a: <p>Atlassian Marketplace 리스팅 페이지에서 사용자 수에 따른 가격을 확인할 수 있습니다. T-CAFE는 Standard와 Advanced 두 가지 에디션을 제공합니다.</p>,
      },
      {
        q: '환불이 가능한가요?',
        a: <p>Atlassian Marketplace의 환불 정책을 따릅니다.</p>,
      },
      {
        q: '결제는 어떻게 이루어지나요?',
        a: <p>Atlassian Marketplace에서 처리됩니다. T-CAFE는 직접 결제를 받지 않습니다.</p>,
      },
      {
        q: 'Trial 기간이 있나요?',
        a: <p>네. Atlassian Marketplace 정책에 따라 30일 무료 평가가 가능합니다.</p>,
      },
    ],
  },
  {
    category: '기술 지원',
    items: [
      {
        q: '문제가 발생했을 때 어떻게 신고하나요?',
        a: <p>이메일로 신고해주세요: <strong>contact@coreprocess.co.kr</strong></p>,
      },
      {
        q: '기능 제안은 어디에 하나요?',
        a: <p>이메일로 보내주세요. 향후 로드맵에 검토합니다.</p>,
      },
      {
        q: '응답 시간은 어떻게 되나요?',
        a: <p>평일 기준 24~48시간 이내 응답을 목표로 합니다.</p>,
      },
      {
        q: '한국어 지원이 가능한가요?',
        a: <p>네. 이메일 문의는 한국어/영어 모두 가능합니다.</p>,
      },
      {
        q: 'SLA가 있나요?',
        a: <p>현재 공식 SLA는 제공하지 않습니다. 대규모 도입 시 별도 협의 가능합니다.</p>,
      },
    ],
  },
  {
    category: '호환성',
    items: [
      {
        q: '어떤 브라우저를 지원하나요?',
        a: <p>Chrome, Firefox, Safari, Edge의 최신 버전을 권장합니다. Internet Explorer는 지원하지 않습니다.</p>,
      },
      {
        q: '모바일에서 사용할 수 있나요?',
        a: <p>모바일 브라우저에서도 동작하지만, 데스크톱 환경에 최적화되어 있습니다. 모바일 전용 앱은 제공하지 않습니다.</p>,
      },
      {
        q: 'Jira Server / Data Center에서도 사용할 수 있나요?',
        a: <p>현재는 <strong>Jira Cloud 전용</strong>입니다. Server / DC 버전은 지원하지 않습니다.</p>,
      },
      {
        q: 'Atlassian Confluence에서도 사용할 수 있나요?',
        a: <p>아니요. T-CAFE는 Jira 전용입니다.</p>,
      },
    ],
  },
  {
    category: '향후 계획',
    items: [
      {
        q: 'AI 기능이 추가될 예정인가요?',
        a: <p>검토 중입니다. AI 기능이 추가되면 사용자에게 사전 공지하고, 데이터 사용 정책도 명확히 갱신할 예정입니다.</p>,
      },
      {
        q: 'REST API가 제공되나요?',
        a: <p>향후 로드맵에 있습니다. CI/CD 통합과 함께 출시 예정입니다.</p>,
      },
      {
        q: 'SOC 2 인증이 있나요?',
        a: <p>현재는 없습니다. 사용자 규모가 커지면 검토 예정입니다.</p>,
      },
      {
        q: '새 기능 요청을 어디에 할 수 있나요?',
        a: <p>이메일로 contact@coreprocess.co.kr에 보내주세요.</p>,
      },
    ],
  },
  {
    category: '기타',
    items: [
      {
        q: '가이드 외에 더 많은 자료가 있나요?',
        a: (
          <>
            <p>본 사용자 가이드 외에 다음을 참고하세요:</p>
            <ul>
              <li><a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://t-cafe.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              <li><a href="https://t-cafe.com/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a></li>
              <li><a href="https://t-cafe.com/sub-processors" target="_blank" rel="noopener noreferrer">Sub-processors</a></li>
              <li><a href="https://t-cafe.com/security-policy" target="_blank" rel="noopener noreferrer">Security Policy</a></li>
            </ul>
          </>
        ),
      },
      {
        q: 'T-CAFE 개발사는 누구인가요?',
        a: <p>COREPROCESS에서 개발하고 운영합니다.</p>,
      },
      {
        q: '본 가이드는 얼마나 자주 업데이트되나요?',
        a: <p>새 기능 출시 또는 정책 변경 시 업데이트됩니다. 큰 변경이 있을 경우 게시판으로 공지합니다.</p>,
      },
    ],
  },
];

const extractText = (node) => {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (node.props && node.props.children !== undefined) return extractText(node.props.children);
  return '';
};

const FAQ = () => {
  const [search, setSearch] = useState('');
  const [openKeys, setOpenKeys] = useState(() => new Set());

  const norm = (s) => s.toLowerCase().normalize('NFKC');
  const query = norm(search.trim());

  const sectionsWithIndex = useMemo(() => {
    return faqData.map((section, sIdx) => ({
      ...section,
      sIdx,
      items: section.items.map((item, iIdx) => ({
        ...item,
        key: `${sIdx}-${iIdx}`,
        searchText: norm(`${item.q} ${extractText(item.a)}`),
      })),
    }));
  }, []);

  const filteredSections = useMemo(() => {
    if (!query) return sectionsWithIndex;
    return sectionsWithIndex
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.searchText.includes(query)),
      }))
      .filter((section) => section.items.length > 0);
  }, [sectionsWithIndex, query]);

  const totalMatches = filteredSections.reduce((sum, s) => sum + s.items.length, 0);

  const toggleItem = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const expandAll = () => {
    const all = new Set();
    filteredSections.forEach((s) => s.items.forEach((i) => all.add(i.key)));
    setOpenKeys(all);
  };
  const collapseAll = () => setOpenKeys(new Set());

  return (
    <article className="guide-article faq-article">
      <h1>15. 자주 묻는 질문 (FAQ)</h1>
      <p className="guide-lead">T-CAFE 사용 중 자주 묻는 질문과 답변을 정리했습니다. 검색하거나 카테고리에서 찾아보세요.</p>

      <div className="faq-controls">
        <div className="faq-search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="faq-search-input"
            placeholder="질문 또는 답변에서 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" className="faq-search-clear" onClick={() => setSearch('')} aria-label="검색어 지우기">×</button>
          )}
        </div>
        <div className="faq-actions">
          <span className="faq-count">{totalMatches} / 70</span>
          <button type="button" className="faq-action-btn" onClick={expandAll} disabled={totalMatches === 0}>모두 펼치기</button>
          <button type="button" className="faq-action-btn" onClick={collapseAll} disabled={openKeys.size === 0}>모두 접기</button>
        </div>
      </div>

      {filteredSections.length === 0 ? (
        <div className="faq-empty">
          <p>검색 결과가 없습니다.</p>
          <p>다른 키워드로 시도하거나, 답을 찾을 수 없으면 아래 이메일로 문의해주세요.</p>
        </div>
      ) : (
        filteredSections.map((section) => (
          <section key={section.sIdx} className="faq-section">
            <h2 className="faq-section-title">{section.category}</h2>
            <div className="faq-list">
              {section.items.map((item) => {
                const isOpen = openKeys.has(item.key);
                return (
                  <div key={item.key} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleItem(item.key)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-prefix">Q.</span>
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-toggle" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <span className="faq-a-prefix">A.</span>
                        <div className="faq-a-content">{item.a}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}

      <section className="faq-contact">
        <h2>이 페이지에 답이 없다면?</h2>
        <p><strong>이메일</strong>: <a href="mailto:contact@coreprocess.co.kr">contact@coreprocess.co.kr</a> 으로 문의해주세요.</p>
        <p>문의 시 다음 정보를 함께 보내주시면 빠른 응답이 가능합니다:</p>
        <ul>
          <li>T-CAFE 사용 환경 (Jira Cloud URL)</li>
          <li>발생한 문제의 구체적 설명</li>
          <li>재현 단계</li>
          <li>스크린샷 또는 에러 메시지</li>
          <li>사용 중인 브라우저</li>
          <li>사용자 권한 (Admin / Team Admin / Tester / Developer)</li>
        </ul>
      </section>
    </article>
  );
};

export default FAQ;
