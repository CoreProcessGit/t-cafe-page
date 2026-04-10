import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => (
  <article className="guide-article">
    <h1>15. 자주 묻는 질문 (FAQ)</h1>
    <p className="guide-lead">T-CAFE 사용 중 자주 묻는 질문과 답변을 정리했습니다.</p>

    <hr />

    <h2>일반</h2>

    <h3>Q. T-CAFE는 어떤 앱인가요?</h3>
    <p><strong>A.</strong> T-CAFE는 Atlassian Jira Cloud용 테스트 관리 앱입니다. 테스트 케이스, 테스트 플랜, 실행 결과, 리포트를 통합 관리할 수 있습니다. <strong>Factor Combination</strong>(조합 자동 생성), <strong>다국어 지원</strong>(한/영/일), <strong>역할 기반 권한 관리</strong> 등이 차별화 기능입니다.</p>

    <h3>Q. T-CAFE를 사용하려면 어떤 조건이 필요한가요?</h3>
    <p><strong>A.</strong> Atlassian Jira Cloud 활성 구독 + Jira 관리자 권한(앱 설치 시)이 필요합니다. 자체 호스팅 Jira(Server/DC)는 지원하지 않습니다.</p>

    <h3>Q. 무료로 사용할 수 있나요?</h3>
    <p><strong>A.</strong> Atlassian Marketplace 정책에 따라 일정 사용자 수 이하는 무료입니다. 자세한 가격은 Marketplace 리스팅 페이지를 참고하세요.</p>

    <h3>Q. 어떤 언어를 지원하나요?</h3>
    <p><strong>A.</strong> 한국어, English, 日本語 3개 언어를 지원합니다. 우상단 언어 선택 메뉴에서 변경할 수 있습니다.</p>

    <h3>Q. T-CAFE의 데이터는 어디에 저장되나요?</h3>
    <p><strong>A.</strong> 테스트 데이터와 첨부파일 모두 COREPROCESS 사내 서버(대한민국, 동일 인프라)에 저장됩니다. 자세한 내용은 <a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>를 참고하세요.</p>

    <hr />

    <h2>설치 / 시작</h2>

    <h3>Q. T-CAFE 설치 방법은?</h3>
    <p><strong>A.</strong> Jira Cloud → 설정 → Apps → Find new apps → "T-CAFE" 검색 → Get it now. 자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고.</p>

    <h3>Q. 설치 후 첫 사용자는 어떤 권한을 받나요?</h3>
    <p><strong>A.</strong> 프로젝트의 첫 사용자는 자동으로 <strong>Admin</strong> 권한을 받습니다. 이후 가입자는 Tester 권한을 받습니다.</p>

    <h3>Q. 샘플 데이터는 어떻게 만드나요?</h3>
    <p><strong>A.</strong> Overview 페이지의 Welcome Banner에서 "<strong>샘플 데이터 생성</strong>" 버튼을 클릭하세요. <strong>Admin 권한</strong>이 필요합니다. 자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link>.</p>

    <h3>Q. 샘플 데이터를 다시 만들 수 있나요?</h3>
    <p><strong>A.</strong> 같은 프로젝트에서는 한 번만 생성됩니다. 다시 만들려면 기존 [Sample] 데이터를 모두 삭제 후 시도하세요.</p>

    <hr />

    <h2>권한</h2>

    <h3>Q. 권한 종류는?</h3>
    <p><strong>A.</strong> 기본 4가지 시스템 역할 — <strong>Admin</strong> / <strong>Team Admin</strong> / <strong>Tester</strong> / <strong>Developer</strong>. 프로젝트 필요에 따라 커스텀 역할을 추가로 생성할 수 있습니다. 자세한 매트릭스는 <Link to="/support/guide/permissions">02. 사용자 권한</Link> 참고.</p>

    <h3>Q. 본인 권한을 변경할 수 있나요?</h3>
    <p><strong>A.</strong> 아니요. 본인 권한은 변경할 수 없습니다. 다른 Admin이 변경해야 합니다.</p>

    <h3>Q. 마지막 Admin을 삭제할 수 있나요?</h3>
    <p><strong>A.</strong> 아니요. 프로젝트의 마지막 Admin은 시스템이 자동으로 삭제/변경을 차단합니다.</p>

    <h3>Q. Configuration 탭이 보이지 않습니다</h3>
    <p><strong>A.</strong> Configuration 탭은 <strong>Admin 또는 Team Admin</strong> 권한일 때만 표시됩니다. Tester / Developer는 접근할 수 없습니다. 권한 변경이 필요하면 Admin에게 요청하세요.</p>

    <h3>Q. Tester 권한으로 TC를 만들 수 없나요?</h3>
    <p><strong>A.</strong> 네. Tester는 TC 실행만 가능하고 생성/수정/삭제는 불가합니다. 작성이 필요하면 Team Admin 이상 권한이 필요합니다.</p>

    <h3>Q. 커스텀 역할을 만들 수 있나요?</h3>
    <p><strong>A.</strong> Configuration → User Permissions → Roles 탭에서 커스텀 역할을 생성하고 9개 기능 영역별 권한을 세밀하게 설정할 수 있습니다. 시스템 역할(Admin, Team Admin, Tester, Developer)은 삭제할 수 없지만 권한 변경은 가능합니다.</p>

    <h3>Q. 사용자를 비활성화할 수 있나요?</h3>
    <p><strong>A.</strong> Users 탭에서 Activate 토글을 OFF하면 해당 사용자의 모든 권한이 차단됩니다. 다시 ON하면 즉시 복원됩니다. 비활성 사용자는 Status 필터를 Inactive로 변경하면 볼 수 있습니다.</p>

    <hr />

    <h2>테스트 케이스</h2>

    <h3>Q. TC와 TC Key의 차이는?</h3>
    <p><strong>A.</strong> <strong>TC Key</strong>는 자동 부여되는 식별자(예: <code>PROJ-1</code>)이고, <strong>TC</strong>는 그 식별자에 연결된 실제 내용(이름, 설명, 스텝 등)입니다.</p>

    <h3>Q. 삭제한 TC를 복구할 수 있나요?</h3>
    <p><strong>A.</strong> <strong>불가능</strong>합니다. 삭제 전에 백업(Export)을 권장합니다.</p>

    <h3>Q. 같은 이름의 TC를 여러 개 만들 수 있나요?</h3>
    <p><strong>A.</strong> 가능하지만 권장하지 않습니다. 각 TC는 고유한 키로 구분되지만, 같은 이름이면 사용자가 헷갈릴 수 있습니다.</p>

    <h3>Q. TC 키를 변경할 수 있나요?</h3>
    <p><strong>A.</strong> 변경할 수 없습니다. TC 키는 시스템이 자동 부여하며 영구적입니다.</p>

    <h3>Q. TC를 다른 프로젝트로 이동할 수 있나요?</h3>
    <p><strong>A.</strong> 현재 버전에서는 직접 이동 기능이 없습니다. Export 후 대상 프로젝트에서 Import해야 합니다.</p>

    <h3>Q. Test Steps에 이미지를 넣을 수 있나요?</h3>
    <p><strong>A.</strong> Test Steps 셀 자체는 plain text 입력만 지원합니다 (인라인 이미지 미지원). 시각적 자료가 필요하면 <Link to="/support/guide/attachments">Attachments</Link> 페이지에 파일을 업로드하고, 그 다운로드 링크를 TC의 <strong>Description</strong> 또는 <strong>Precondition</strong>에 붙여넣으면 자동으로 클릭 가능한 링크로 변환됩니다.</p>

    <hr />

    <h2>Factor Combination</h2>

    <h3>Q. Factor Combination이란?</h3>
    <p><strong>A.</strong> 여러 변수의 조합을 자동으로 생성해 TC를 대량 생성하는 기능입니다. 8개 경쟁 앱 중 <strong>T-CAFE만 가지고 있는 차별화 기능</strong>입니다. 자세한 내용은 <Link to="/support/guide/factor-combination">06. Factor Combination</Link>.</p>

    <h3>Q. Pairwise는 무엇인가요?</h3>
    <p><strong>A.</strong> 모든 두 변수의 쌍이 한 번씩 등장하도록 최소 조합만 만드는 알고리즘입니다. Full Combination 대비 50~80% TC 수가 줄어들지만, 통계적으로 약 75%의 결함을 발견할 수 있습니다.</p>

    <h3>Q. Factor를 몇 개까지 만들 수 있나요?</h3>
    <p><strong>A.</strong> 기술적으로는 제한이 없지만, <strong>5~7개 이내</strong>가 관리하기 좋습니다. 변수가 많아지면 조합 수가 폭발적으로 증가합니다.</p>

    <h3>Q. Factor Combination을 수정하면 기존 TC는 어떻게 되나요?</h3>
    <p><strong>A.</strong> <strong>Update Test Cases</strong> 버튼을 사용하면, 추가된 조합은 새 TC가 생성되고, 삭제된 조합은 TC가 삭제됩니다. 변경된 조합은 갱신됩니다.</p>

    <hr />

    <h2>테스트 플랜</h2>

    <h3>Q. TC와 TP의 차이는?</h3>
    <p><strong>A.</strong> TC는 "무엇을 테스트할지" 정의하는 영구 자료이고, TP는 "이번에 실행할 TC들의 묶음"입니다. 한 TC가 여러 TP에 포함될 수 있습니다.</p>

    <h3>Q. TP에 추가한 후 원본 TC를 수정하면 TPTC도 바뀌나요?</h3>
    <p><strong>A.</strong> <strong>아니요</strong>. TPTC는 추가된 시점의 스냅샷으로 저장됩니다. 원본 TC가 수정되어도 TPTC는 변경되지 않습니다. 동기화하려면 TPTC를 제거 후 다시 추가해야 합니다.</p>

    <h3>Q. 한 TP에 같은 TC를 여러 번 추가할 수 있나요?</h3>
    <p><strong>A.</strong> 가능하지만 권장하지 않습니다. 같은 TC가 여러 번 실행되어 통계가 왜곡될 수 있습니다.</p>

    <h3>Q. TP를 끝내면 어떻게 처리해야 하나요?</h3>
    <p><strong>A.</strong> 상태를 <strong>Completed</strong> 또는 <strong>Closed</strong>로 변경하세요. 삭제는 권장하지 않습니다 (감사 추적용으로 보관).</p>

    <hr />

    <h2>테스트 실행</h2>

    <h3>Q. Tester 권한으로 실행이 안 됩니다</h3>
    <p><strong>A.</strong> 다음을 확인하세요:</p>
    <ol>
      <li>Tester 권한이 정확한지</li>
      <li>TP의 상태가 Open (또는 사용자 정의 진행 상태)인지</li>
      <li>Jira 프로젝트 접근 권한이 있는지</li>
    </ol>

    <h3>Q. Pass / Fail / Block / Skip의 차이는?</h3>
    <p><strong>A.</strong></p>
    <ul>
      <li><strong>Pass</strong>: 모든 스텝이 기대 결과대로 정상 동작</li>
      <li><strong>Fail</strong>: 한 개 이상의 스텝에서 기대 결과와 다름</li>
      <li><strong>Block</strong>: 다른 문제로 실행 자체가 불가 (사전 조건 미충족 등)</li>
      <li><strong>Skip</strong>: 의도적으로 실행 안 함</li>
    </ul>

    <h3>Q. Fail 시 Jira Issue를 자동으로 만들 수 있나요?</h3>
    <p><strong>A.</strong> 자동은 아니지만, TPTC 우측 패널에서 "<strong>+ Create Issue</strong>" 버튼으로 한 번에 만들 수 있습니다. TPTC 정보가 자동으로 채워집니다.</p>

    <h3>Q. 한 번에 여러 TPTC의 상태를 변경할 수 있나요?</h3>
    <p><strong>A.</strong> 네. 체크박스로 다중 선택 후 <strong>Bulk Update</strong> 기능을 사용하세요.</p>

    <h3>Q. 실행 결과를 자동화 도구에서 import할 수 있나요?</h3>
    <p><strong>A.</strong> 현재 버전에서는 수동 입력만 지원합니다. CI/CD 자동화 결과 import는 향후 로드맵에 있습니다.</p>

    <hr />

    <h2>첨부파일</h2>

    <h3>Q. 첨부파일은 어디에 저장되나요?</h3>
    <p><strong>A.</strong> <strong>COREPROCESS 사내 서버</strong>(대한민국)에 저장됩니다. 테스트 데이터와 동일한 인프라를 사용합니다. 자세한 내용은 <Link to="/support/guide/attachments">12. 첨부파일</Link>.</p>

    <h3>Q. 파일 크기 제한은?</h3>
    <p><strong>A.</strong> <strong>단일 파일 20 MB / 프로젝트 합계 200 MB</strong>가 한도입니다. 큰 파일은 안정적인 전송을 위해 자동으로 분할 업로드됩니다. 자세한 내용은 <Link to="/support/guide/attachments">12. 첨부파일</Link>.</p>

    <h3>Q. 어떤 파일 형식을 지원하나요?</h3>
    <p><strong>A.</strong> 이미지(PNG/JPG/GIF), 문서(PDF/DOC/XLS), 텍스트, 압축 등 일반적인 형식을 모두 지원합니다. 자세한 목록은 <Link to="/support/guide/attachments">12. 첨부파일</Link>.</p>

    <h3>Q. 첨부파일을 삭제하면 복구할 수 있나요?</h3>
    <p><strong>A.</strong> <strong>불가능</strong>합니다. 삭제 전에 다운로드하여 백업하세요.</p>

    <hr />

    <h2>Import / Export</h2>

    <h3>Q. 다른 도구(Xray, Zephyr 등)에서 마이그레이션할 수 있나요?</h3>
    <p><strong>A.</strong> 네. CSV 또는 Excel로 Export 후 T-CAFE에서 Import 가능합니다. 컬럼 매핑이 필요할 수 있습니다. 자세한 내용은 <Link to="/support/guide/import-export">11. Import / Export</Link>.</p>

    <h3>Q. Export 형식은?</h3>
    <p><strong>A.</strong> CSV, JSON, Excel(XLSX) 3가지를 지원합니다.</p>

    <h3>Q. Import 시 한글이 깨집니다</h3>
    <p><strong>A.</strong> 파일을 <strong>UTF-8 BOM</strong> 인코딩으로 저장하세요. Excel의 경우 "다른 이름으로 저장" → "CSV UTF-8 (쉼표로 구분)" 선택.</p>

    <h3>Q. 1000개 이상의 TC를 한 번에 Import할 수 있나요?</h3>
    <p><strong>A.</strong> 가능하지만 권장하지 않습니다. 실패 시 복구가 어려우므로 <strong>소량(100~200개)으로 분할</strong>하여 진행하세요.</p>

    <hr />

    <h2>게시판</h2>

    <h3>Q. 게시판에 글을 쓸 수 있는 사람은?</h3>
    <p><strong>A.</strong> <strong>Admin 전용</strong>입니다. Team Admin / Tester / Developer는 조회만 가능합니다.</p>

    <h3>Q. 게시글을 수정/삭제할 수 있나요?</h3>
    <p><strong>A.</strong> Admin만 가능합니다. 본인이 작성한 글이라도 Admin이 아니면 수정/삭제할 수 없습니다.</p>

    <h3>Q. 공지(Notice)와 일반(General)의 차이는?</h3>
    <p><strong>A.</strong> 공지는 게시판 상단에 고정 표시되고, 일반 게시글보다 시각적으로 강조됩니다. 자세한 내용은 <Link to="/support/guide/board">13. 게시판</Link>.</p>

    <hr />

    <h2>데이터 보안</h2>

    <h3>Q. T-CAFE는 데이터를 어떻게 보호하나요?</h3>
    <p><strong>A.</strong></p>
    <ul>
      <li><strong>저장 암호화</strong>: 민감한 테스트 데이터는 산업 표준 암호화로 저장</li>
      <li><strong>권한 제어</strong>: 역할 기반 접근 제어 (Admin / Team Admin / Tester / Developer)</li>
      <li><strong>데이터 격리</strong>: 각 Jira 인스턴스 및 프로젝트별로 데이터 분리</li>
      <li><strong>웹 보안</strong>: XSS / SQL Injection / CSRF 등 OWASP Top 10 대응</li>
    </ul>
    <p>자세한 내용은 <a href="https://t-cafe.com/security-policy" target="_blank" rel="noopener noreferrer">Security Policy</a>.</p>

    <h3>Q. T-CAFE가 우리 데이터를 AI 학습에 사용하나요?</h3>
    <p><strong>A.</strong> <strong>아니요</strong>. T-CAFE는 고객 데이터를 어떠한 AI 또는 머신러닝 모델 학습에도 사용하지 않습니다.</p>

    <h3>Q. 데이터를 우리 회사 서버로 옮길 수 있나요?</h3>
    <p><strong>A.</strong> 현재는 COREPROCESS 사내 서버에 저장됩니다. Self-hosting 옵션은 향후 검토 중입니다.</p>

    <h3>Q. GDPR을 준수하나요?</h3>
    <p><strong>A.</strong> 네. T-CAFE는 GDPR, CCPA, LGPD를 모두 준수합니다. 자세한 내용은 <a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>와 <a href="https://t-cafe.com/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.</p>

    <hr />

    <h2>청구 / 라이선스</h2>

    <h3>Q. 가격은 어떻게 되나요?</h3>
    <p><strong>A.</strong> Atlassian Marketplace 리스팅 페이지에서 사용자 수에 따른 가격을 확인할 수 있습니다. T-CAFE는 Standard와 Advanced 두 가지 에디션을 제공합니다.</p>

    <h3>Q. 환불이 가능한가요?</h3>
    <p><strong>A.</strong> Atlassian Marketplace의 환불 정책을 따릅니다. 일반적으로 구매 후 30일 이내에 환불 가능합니다.</p>

    <h3>Q. 결제는 어떻게 이루어지나요?</h3>
    <p><strong>A.</strong> Atlassian Marketplace에서 처리됩니다. T-CAFE는 직접 결제를 받지 않습니다.</p>

    <h3>Q. Trial 기간이 있나요?</h3>
    <p><strong>A.</strong> 네. Atlassian Marketplace 정책에 따라 30일 무료 평가가 가능합니다.</p>

    <hr />

    <h2>기술 지원</h2>

    <h3>Q. 문제가 발생했을 때 어떻게 신고하나요?</h3>
    <p><strong>A.</strong> 이메일로 신고해주세요: <strong>contact@coreprocess.co.kr</strong></p>

    <h3>Q. 기능 제안은 어디에 하나요?</h3>
    <p><strong>A.</strong> 이메일로 보내주세요. 향후 로드맵에 검토합니다.</p>

    <h3>Q. 응답 시간은 어떻게 되나요?</h3>
    <p><strong>A.</strong> 평일 기준 24~48시간 이내 응답을 목표로 합니다.</p>

    <h3>Q. 한국어 지원이 가능한가요?</h3>
    <p><strong>A.</strong> 네. 이메일 문의는 한국어/영어 모두 가능합니다.</p>

    <h3>Q. SLA가 있나요?</h3>
    <p><strong>A.</strong> 현재 공식 SLA는 제공하지 않습니다. 대규모 도입 시 별도 협의 가능합니다.</p>

    <hr />

    <h2>호환성</h2>

    <h3>Q. 어떤 브라우저를 지원하나요?</h3>
    <p><strong>A.</strong> Chrome, Firefox, Safari, Edge의 최신 버전을 권장합니다. Internet Explorer는 지원하지 않습니다.</p>

    <h3>Q. 모바일에서 사용할 수 있나요?</h3>
    <p><strong>A.</strong> 모바일 브라우저에서도 동작하지만, 데스크톱 환경에 최적화되어 있습니다. 모바일 전용 앱은 제공하지 않습니다.</p>

    <h3>Q. Jira Server / Data Center에서도 사용할 수 있나요?</h3>
    <p><strong>A.</strong> 현재는 <strong>Jira Cloud 전용</strong>입니다. Server / DC 버전은 지원하지 않습니다.</p>

    <h3>Q. Atlassian Confluence에서도 사용할 수 있나요?</h3>
    <p><strong>A.</strong> 아니요. T-CAFE는 Jira 전용입니다.</p>

    <hr />

    <h2>향후 계획</h2>

    <h3>Q. AI 기능이 추가될 예정인가요?</h3>
    <p><strong>A.</strong> 검토 중입니다. AI 기능이 추가되면 사용자에게 사전 공지하고, 데이터 사용 정책도 명확히 갱신할 예정입니다.</p>

    <h3>Q. REST API가 제공되나요?</h3>
    <p><strong>A.</strong> 향후 로드맵에 있습니다. CI/CD 통합과 함께 출시 예정입니다.</p>

    <h3>Q. SOC 2 인증이 있나요?</h3>
    <p><strong>A.</strong> 현재는 없습니다. 사용자 규모가 커지면 검토 예정입니다.</p>

    <h3>Q. 새 기능 요청을 어디에 할 수 있나요?</h3>
    <p><strong>A.</strong> 이메일로 contact@coreprocess.co.kr에 보내주세요.</p>

    <hr />

    <h2>기타</h2>

    <h3>Q. 가이드 외에 더 많은 자료가 있나요?</h3>
    <p><strong>A.</strong> 본 사용자 가이드 외에 다음을 참고하세요:</p>
    <ul>
      <li><a href="https://t-cafe.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
      <li><a href="https://t-cafe.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
      <li><a href="https://t-cafe.com/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a></li>
      <li><a href="https://t-cafe.com/sub-processors" target="_blank" rel="noopener noreferrer">Sub-processors</a></li>
      <li><a href="https://t-cafe.com/security-policy" target="_blank" rel="noopener noreferrer">Security Policy</a></li>
    </ul>

    <h3>Q. T-CAFE 개발사는 누구인가요?</h3>
    <p><strong>A.</strong> <strong>COREPROCESS</strong> (한국)에서 개발하고 운영합니다.</p>

    <h3>Q. 본 가이드는 얼마나 자주 업데이트되나요?</h3>
    <p><strong>A.</strong> 새 기능 출시 또는 정책 변경 시 업데이트됩니다. 큰 변경이 있을 경우 게시판으로 공지합니다.</p>

    <hr />

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
  </article>
);

export default FAQ;
