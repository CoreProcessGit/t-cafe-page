import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/13-configuration/01.png';
import img02 from '../../assets/user_guide/13-configuration/02.png';
import img03 from '../../assets/user_guide/13-configuration/03.png';
import img04 from '../../assets/user_guide/13-configuration/04.png';
import img05 from '../../assets/user_guide/13-configuration/05.png';

const Configuration = () => (
  <article className="guide-article">
    <h1>13. Configuration (설정)</h1>
    <p className="guide-lead">
      Configuration은 T-CAFE의 마스터 데이터를 관리하는 페이지입니다. Admin / Team Admin이 접근할 수 있으며, 프로젝트 전체의 동작 방식을 결정합니다.
    </p>

    <hr />

    <h2>1. 진입 경로</h2>
    <p>상단 탭 → Configuration</p>
    <aside className="guide-callout">Admin / Team Admin 권한이 없으면 이 탭이 보이지 않습니다 (Tester / Developer는 접근 불가).</aside>

    <h3>Configuration 좌측 메뉴 구성</h3>

    <h4>Test Case 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>Case Field (UDF)</td><td>사용자 정의 필드 관리</td></tr>
        <tr><td>Case Type</td><td>케이스 타입 정의</td></tr>
        <tr><td>Component</td><td>컴포넌트 정의</td></tr>
        <tr><td>Priorities</td><td>우선순위 정의</td></tr>
      </tbody>
    </table>

    <h4>Test Plan 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>Plan Status</td><td>테스트 플랜 상태 정의</td></tr>
      </tbody>
    </table>

    <h4>Retestable 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>Issue Type</td><td>Jira 이슈 타입 조회</td></tr>
      </tbody>
    </table>

    <h4>Administrator Settings 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>User Permissions</td><td>사용자 역할/권한 관리</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Configuration 메인 화면" src={img01} />

    <hr />

    <h2>2. Case Field — User Defined Fields (UDF)</h2>
    <p>표준 필드 외에 추가로 정의하는 사용자 지정 필드입니다. Configuration의 첫 번째 메뉴이며 가장 자주 사용됩니다.</p>

    <h3>2-1. UDF 타입 (9종)</h3>
    <table>
      <thead>
        <tr><th>타입</th><th>영문</th><th>설명</th><th>예시</th></tr>
      </thead>
      <tbody>
        <tr><td>텍스트</td><td>Text</td><td>한 줄 텍스트 입력</td><td>"특이사항", "테스트 환경 메모"</td></tr>
        <tr><td>숫자</td><td>Number</td><td>숫자 값 입력</td><td>"예상 소요 시간(분)", "중요도 점수"</td></tr>
        <tr><td>날짜</td><td>Date</td><td>날짜 선택 (달력)</td><td>"마지막 검토일", "예정일"</td></tr>
        <tr><td>타임스탬프</td><td>Time stamp</td><td>날짜 + 시간</td><td>"실행 시작 시각", "완료 시각"</td></tr>
        <tr><td>드롭다운</td><td>Dropdown</td><td>단일 선택 목록</td><td>"테스트 환경" (Dev/Stage/Prod)</td></tr>
        <tr><td>체크박스</td><td>Checkbox</td><td>다중 선택 목록</td><td>"자동화 가능", "리뷰 완료"</td></tr>
        <tr><td>라벨</td><td>Labels</td><td>태그 형태 다중 입력</td><td>"관련 모듈", "영향 범위"</td></tr>
        <tr><td>담당자</td><td>People</td><td>Jira 사용자 선택</td><td>"리뷰어", "담당 개발자"</td></tr>
        <tr><td>URL</td><td>URL</td><td>웹 주소 입력. Attachments의 Copy Link도 사용 가능</td><td>"관련 문서 링크", "Figma 디자인", "첨부파일 다운로드 링크"</td></tr>
      </tbody>
    </table>

    <h3>2-2. UDF 추가</h3>
    <ol>
      <li>Configuration 좌측 메뉴 → User Defined (Case Field)</li>
      <li>상단 입력 영역에서 필드 정보 입력:
        <ul>
          <li>Name (필수)</li>
          <li>Description (선택)</li>
          <li>Type (필수) — 위 9종 중 선택</li>
          <li>Required 토글 (필수 입력 여부)</li>
        </ul>
      </li>
      <li>우측의 Add 버튼 클릭</li>
    </ol>
    <p>타입에 따라 모달에서 추가 설정이 필요합니다 (예: Dropdown/Checkbox의 옵션 목록, Number의 포맷/통화, Time stamp의 기본 시각 등).</p>

    <ScreenshotSlot label="UDF 추가" src={img02} />

    <h3>2-3. 타입별 추가 설정</h3>
    <ul>
      <li>Dropdown / Checkbox: 옵션 목록 입력 (이름 + 색상). 하나를 Default로 지정 가능</li>
      <li>Number: Format(Number / Percentage / Currency)과 통화(USD/EUR/JPY/KRW/GBP/CNY), 기본 숫자 설정</li>
      <li>Time stamp: "Set to current time by default" 옵션 제공</li>
      <li>Labels: 기본 라벨 목록 선택 (프로젝트의 Jira 라벨과 기존 UDF 라벨에서 불러옴)</li>
      <li>People: 기본 사용자 선택, "Restrict to a single user" 옵션 제공</li>
      <li>URL: 일반 웹 주소를 입력하거나 Attachments 페이지의 Copy Link를 붙여넣어 첨부 링크로 활용 가능</li>
    </ul>

    <h3>2-4. UDF 활용</h3>
    <ul>
      <li>TC 생성/편집 화면에 UDF 항목이 자동 표시</li>
      <li>TC 목록에서 UDF 컬럼 표시 가능</li>
      <li>Export 시 UDF도 포함됨</li>
    </ul>

    <hr />

    <h2>3. Case Type (케이스 타입)</h2>
    <p>테스트 케이스의 종류를 정의합니다.</p>

    <h3>3-1. 기본 제공 케이스 타입 (6종)</h3>
    <ul>
      <li>Function (기본값) — 기능 테스트</li>
      <li>Performance — 성능 테스트</li>
      <li>Security — 보안 테스트</li>
      <li>UI/UX — UI/UX 테스트</li>
      <li>API — API 테스트</li>
      <li>Regression — 회귀 테스트</li>
    </ul>

    <h3>3-2. 케이스 타입 추가</h3>
    <ol>
      <li>Configuration 좌측 메뉴 → Case Type</li>
      <li>상단 입력 영역에서 Name과 Description 입력</li>
      <li>우측의 Add 버튼 클릭</li>
    </ol>
    <p>사용 중인 케이스 타입은 삭제할 수 없으며, 관련 TC의 타입을 먼저 변경해야 합니다.</p>

    <h3>3-3. 케이스 타입 활용</h3>
    <ul>
      <li>TC 생성 시 드롭다운으로 선택</li>
      <li>리포트에서 케이스 타입별 통계 확인 가능</li>
    </ul>

    <hr />

    <h2>4. Component (컴포넌트)</h2>
    <p>테스트 대상의 구성 요소를 정의합니다. 다중 선택 가능합니다.</p>

    <h3>4-1. 기본 제공 컴포넌트</h3>
    <ul>
      <li>Frontend — UI/UX 컴포넌트</li>
      <li>Backend API — 백엔드 API 서비스</li>
      <li>Database — DB 관련</li>
      <li>Authentication — 인증/인가</li>
      <li>Payment — 결제 시스템</li>
    </ul>

    <h3>4-2. 컴포넌트 추가</h3>
    <ol>
      <li>Configuration 좌측 메뉴 → Component</li>
      <li>상단 입력 영역에서 Name과 Description 입력</li>
      <li>우측의 Add 버튼 클릭</li>
    </ol>
    <p>사용 중인 컴포넌트는 삭제할 수 없으며, 먼저 해당 컴포넌트를 참조하는 TC에서 제거해야 합니다.</p>

    <h3>4-3. 컴포넌트 활용</h3>
    <ul>
      <li>TC에 다중 컴포넌트 부여 가능 (예: "User Login" → Frontend, Authentication, Backend API)</li>
      <li>리포트에서 컴포넌트별 결함률 확인</li>
    </ul>

    <hr />

    <h2>5. Priorities (우선순위)</h2>
    <p>테스트 케이스의 우선순위를 정의합니다.</p>

    <h3>5-1. 기본 제공 우선순위 (4종)</h3>
    <ul>
      <li>Critical — 색상 <code>#FF5630</code> (빨강 계열), Bar Level 3</li>
      <li>High — 색상 <code>#FF7452</code> (주황 계열), Bar Level 3</li>
      <li>Medium — 색상 <code>#FFAB00</code> (황색 계열), Bar Level 2, 기본값</li>
      <li>Low — 색상 <code>#36B37E</code> (녹색 계열), Bar Level 1</li>
    </ul>

    <h3>5-2. 우선순위 추가</h3>
    <ol>
      <li>Configuration 좌측 메뉴 → Priorities</li>
      <li>상단 입력 영역에서 다음 값 설정:
        <ul>
          <li>Name (최대 20자)</li>
          <li>Description</li>
          <li>Bar Level — 미리보기 드롭다운에서 0~3 중 선택 (0 = 막대 없음, 3 = 가장 높음)</li>
          <li>Color — 컬러 피커로 선택 (HEX 직접 입력 UI는 없음)</li>
        </ul>
      </li>
      <li>우측의 Add 버튼 클릭</li>
    </ol>

    <ScreenshotSlot label="Priority 추가" src={img03} />

    <h3>5-3. 우선순위 수정 / 삭제</h3>
    <ul>
      <li>테이블 행을 더블 클릭하여 인라인 편집, 또는 Edit 버튼 사용</li>
      <li>Default 토글로 기본값 변경 (기본값은 한 개만 존재)</li>
      <li>Move Up / Move Down으로 정렬 순서 변경</li>
      <li>사용 중인 우선순위는 삭제 불가 — TC의 우선순위를 먼저 변경해야 함</li>
    </ul>

    <hr />

    <h2>6. Plan Status (플랜 상태)</h2>
    <p>테스트 플랜의 상태를 정의합니다.</p>

    <h3>6-1. 기본 제공 상태 (3종)</h3>
    <ul>
      <li>Prepairing — 색상 <code>#6B778C</code> (회색), 기본값</li>
      <li>Open — 색상 <code>#0052CC</code> (파랑)</li>
      <li>Completed — 색상 <code>#36B37E</code> (녹색)</li>
    </ul>
    <aside className="guide-callout">필요 시 "In Progress", "Closed" 등 사용자 정의 상태를 직접 추가할 수 있습니다.</aside>

    <h3>6-2. 상태 추가</h3>
    <ol>
      <li>Configuration 좌측 메뉴 → Plan Status</li>
      <li>상단 입력 영역에서 Name, Description, Color 입력</li>
      <li>우측의 Add 버튼 클릭</li>
    </ol>

    <ScreenshotSlot label="Plan Status 관리" src={img04} />

    <hr />

    <h2>7. Retestable Configuration (이슈 타입별 완료 상태 설정)</h2>
    <p>각 Jira 이슈 타입별로 어떤 워크플로 상태를 '완료(Complete)'로 간주할지 설정합니다. 이 설정에 따라 연결된 이슈가 완료 상태에 도달했을 때 해당 테스트 케이스가 Retestable(재테스트 필요)로 전환됩니다.</p>

    <h3>7-1. 개념</h3>
    <ul>
      <li>테스트 실행 중 Fail이 발생하면 Jira Issue를 생성/연결합니다</li>
      <li>해당 Issue가 개발자에 의해 수정되어 완료 상태에 도달하면</li>
      <li>T-CAFE가 자동으로 해당 실행 항목을 Retestable로 표시합니다</li>
      <li>이 페이지에서 "어떤 상태가 완료인지"를 이슈 타입별로 정의합니다</li>
    </ul>

    <h3>7-2. 설정 방법</h3>
    <ol>
      <li>Configuration → Issue Type (Retestable 섹션)</li>
      <li>프로젝트의 Jira 이슈 타입 목록이 표시됩니다 (Bug, Task, Story 등)</li>
      <li>각 이슈 타입의 토글을 켜서 Retestable 추적을 활성화합니다</li>
      <li>활성화된 이슈 타입의 워크플로 상태 목록에서 "완료"로 간주할 상태를 선택합니다 (다중 선택 가능)</li>
      <li>Save 클릭</li>
    </ol>

    <h3>7-3. 화면 구성</h3>
    <ul>
      <li>통계: 전체 이슈 타입 수 / 설정 완료 / 미설정 개수 표시</li>
      <li>이슈 타입별 카드: 토글 (활성/비활성) + 워크플로 상태 체크박스</li>
      <li>활성화된 이슈 타입에 완료 상태를 하나도 선택하지 않으면 저장 시 경고가 표시됩니다</li>
    </ul>

    <h3>7-4. 예시</h3>
    <ul>
      <li>Bug 이슈 타입: "Done", "Closed" 상태를 완료로 설정 → Bug가 Done 또는 Closed로 변경되면 연결된 실행 항목이 Retestable로 전환</li>
      <li>Task 이슈 타입: 비활성화 → Task 이슈의 상태 변경은 Retestable에 영향 없음</li>
    </ul>

    <ScreenshotSlot label="Retestable Configuration" src={img05} />

    <hr />

    <h2>8. User Permissions (사용자 권한 관리)</h2>
    <p>User Permissions는 Users 탭과 Roles 탭 두 개의 탭으로 구성됩니다.</p>

    <h3>8-1. Users 탭</h3>
    <ul>
      <li>프로젝트 사용자 목록</li>
      <li>각 사용자의 역할 드롭다운 (시스템 역할 + 커스텀 역할 모두 선택 가능)</li>
      <li>Activate 토글: 사용자를 활성/비활성화하여 권한을 즉시 부여하거나 차단</li>
      <li>Status 필터: Active / Inactive / All 필터로 사용자 목록을 필터링</li>
    </ul>

    <h3>8-2. Roles 탭</h3>
    <ul>
      <li>역할 목록: 각 역할에 시스템 뱃지(시스템 역할 여부)와 배정된 사용자 수 표시</li>
      <li>Permission Matrix: 토글 테이블 형태로 각 역할의 기능별 권한을 확인/변경</li>
      <li>Add Role: 커스텀 역할을 새로 생성하고 권한을 세밀하게 설정</li>
      <li>Edit / Delete: 기존 역할 수정 또는 삭제 (시스템 역할은 삭제 불가, 권한 변경은 가능)</li>
    </ul>

    <h3>8-3. 사용자 자동 추가</h3>
    <ul>
      <li>Jira 프로젝트의 모든 사용자가 자동으로 표시됨</li>
      <li>별도 수동 추가 작업 불필요</li>
    </ul>

    <h3>8-4. 역할 변경</h3>
    <ol>
      <li>Users 탭에서 변경할 사용자 행의 역할 드롭다운 클릭</li>
      <li>새 역할 선택 (시스템 역할: Admin / Team Admin / Tester / Developer, 또는 커스텀 역할)</li>
      <li>자동 저장됨</li>
    </ol>

    <h3>8-5. 마지막 Admin 보호</h3>
    <ul>
      <li>프로젝트의 마지막 Admin은 삭제하거나 다른 역할로 변경할 수 없습니다</li>
      <li>시스템이 자동으로 차단합니다</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/permissions">02. 사용자 권한</Link> 참고</p>

    <hr />

    <h2>9. Configuration 베스트 프랙티스</h2>

    <h3>프로젝트 시작 시 권장 순서</h3>
    <ol>
      <li>샘플 데이터 생성 (자동으로 기본 Configuration 채워짐)</li>
      <li>Case Field (UDF) 정의 — 프로젝트에 맞는 사용자 정의 필드 추가</li>
      <li>Case Types 검토 — 필요한 타입 추가 (Usability, Accessibility 등)</li>
      <li>Components 정의 — 실제 시스템 구조에 맞게</li>
      <li>Priorities 검토 — 회사 표준에 맞게 추가/수정</li>
      <li>Plan Status 검토 — 회사 워크플로에 맞게</li>
      <li>사용자 권한 설정 — 팀원에게 적절한 역할 부여</li>
    </ol>

    <h3>DO</h3>
    <ul>
      <li>표준화: 회사 전체에서 일관된 우선순위, 컴포넌트 사용</li>
      <li>간결함: 너무 많은 옵션은 사용자 혼란 야기 (각 카테고리당 5~10개 권장)</li>
      <li>명명 규칙: 모든 항목에 일관된 명명 규칙 적용</li>
      <li>문서화: 팀에 Configuration 의미 공유</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>한 번 만들고 무한히 늘리기</li>
      <li>사용하지 않는 옵션 방치</li>
      <li>중복 항목 ("High"와 "긴급"이 같이 존재)</li>
      <li>모호한 이름 ("Type 1", "Component A")</li>
    </ul>

    <hr />

    <h2>10. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Configuration 탭이 안 보임</td><td>Admin / Team Admin 권한 없음</td><td>Admin에게 권한 변경 요청</td></tr>
        <tr><td>우선순위 삭제 안 됨</td><td>사용 중인 항목</td><td>해당 TC들의 우선순위 먼저 변경</td></tr>
        <tr><td>UDF가 TC에 표시 안 됨</td><td>필드 설정 확인</td><td>Case Field에서 해당 필드 확인</td></tr>
        <tr><td>기본값 변경 후 새 TC에 반영 안 됨</td><td>이미 만든 TC는 영향 없음</td><td>새로 만드는 TC부터 적용</td></tr>
        <tr><td>Issue Types가 비어있음</td><td>Jira 프로젝트 권한 부족</td><td>Jira에서 프로젝트 권한 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/permissions">02. 사용자 권한</Link></li>
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스</Link></li>
      <li><Link to="/support/guide/import-export">09. Import / Export</Link></li>
    </ul>
  </article>
);

const ConfigurationEn = () => (
  <article className="guide-article">
    <h1>13. Configuration</h1>
    <p className="guide-lead">
      Configuration is the page for managing T-CAFE's master data. It is accessible to Admin / Team Admin and determines how the entire project behaves.
    </p>

    <hr />

    <h2>1. Navigation</h2>
    <p>Top tab → Configuration</p>
    <aside className="guide-callout">The tab is hidden for users without Admin / Team Admin permission (Tester / Developer cannot access it).</aside>

    <h3>Configuration Left Menu</h3>

    <h4>Test Case Section</h4>
    <table>
      <thead>
        <tr><th>Menu</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Case Field (UDF)</td><td>Manage user-defined fields</td></tr>
        <tr><td>Case Type</td><td>Define case types</td></tr>
        <tr><td>Component</td><td>Define components</td></tr>
        <tr><td>Priorities</td><td>Define priorities</td></tr>
      </tbody>
    </table>

    <h4>Test Plan Section</h4>
    <table>
      <thead>
        <tr><th>Menu</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Plan Status</td><td>Define Test Plan statuses</td></tr>
      </tbody>
    </table>

    <h4>Retestable Section</h4>
    <table>
      <thead>
        <tr><th>Menu</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Issue Type</td><td>View Jira issue types</td></tr>
      </tbody>
    </table>

    <h4>Administrator Settings Section</h4>
    <table>
      <thead>
        <tr><th>Menu</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>User Permissions</td><td>Manage user roles / permissions</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Configuration main screen" src={img01} />

    <hr />

    <h2>2. Case Field — User Defined Fields (UDF)</h2>
    <p>User-defined fields added on top of the standard fields. It is the first menu under Configuration and is the most frequently used.</p>

    <h3>2-1. UDF Types (9)</h3>
    <table>
      <thead>
        <tr><th>Type</th><th>Key</th><th>Description</th><th>Examples</th></tr>
      </thead>
      <tbody>
        <tr><td>Text</td><td>Text</td><td>Single-line text input</td><td>"Notes", "Test environment memo"</td></tr>
        <tr><td>Number</td><td>Number</td><td>Numeric value</td><td>"Estimated duration (min)", "Importance score"</td></tr>
        <tr><td>Date</td><td>Date</td><td>Date picker (calendar)</td><td>"Last reviewed on", "Scheduled date"</td></tr>
        <tr><td>Timestamp</td><td>Time stamp</td><td>Date + time</td><td>"Execution start time", "Completion time"</td></tr>
        <tr><td>Dropdown</td><td>Dropdown</td><td>Single-select list</td><td>"Test environment" (Dev / Stage / Prod)</td></tr>
        <tr><td>Checkbox</td><td>Checkbox</td><td>Multi-select list</td><td>"Automatable", "Review complete"</td></tr>
        <tr><td>Labels</td><td>Labels</td><td>Tag-style multi-input</td><td>"Related modules", "Scope of impact"</td></tr>
        <tr><td>People</td><td>People</td><td>Jira user picker</td><td>"Reviewer", "Assigned developer"</td></tr>
        <tr><td>URL</td><td>URL</td><td>Web address. The Copy Link from Attachments works too</td><td>"Related document", "Figma design", "Attachment download link"</td></tr>
      </tbody>
    </table>

    <h3>2-2. Adding a UDF</h3>
    <ol>
      <li>Configuration left menu → User Defined (Case Field)</li>
      <li>In the input area at the top, enter field info:
        <ul>
          <li>Name (required)</li>
          <li>Description (optional)</li>
          <li>Type (required) — choose from the 9 types above</li>
          <li>Required toggle (whether input is required)</li>
        </ul>
      </li>
      <li>Click the Add button on the right</li>
    </ol>
    <p>Additional settings are required for some types (for example, option lists for Dropdown / Checkbox, format / currency for Number, default value for Time stamp, etc.).</p>

    <ScreenshotSlot label="Adding a UDF" src={img02} />

    <h3>2-3. Type-specific Settings</h3>
    <ul>
      <li>Dropdown / Checkbox: enter the option list (name + color). One option can be set as default</li>
      <li>Number: Format (Number / Percentage / Currency), currency (USD / EUR / JPY / KRW / GBP / CNY), default number</li>
      <li>Timestamp: "Set to current time by default" option is available</li>
      <li>Labels: choose default labels (pulled from the project's Jira labels and existing UDF labels)</li>
      <li>People: choose a default user; the "Restrict to a single user" option is available</li>
      <li>URL: enter a general web address, or paste a Copy Link from the Attachments page to use it as an attachment link</li>
    </ul>

    <h3>2-4. Using UDFs</h3>
    <ul>
      <li>UDF fields are shown automatically on the TC create / edit screen</li>
      <li>UDF columns can be shown in the TC list</li>
      <li>UDFs are included on Export</li>
    </ul>

    <hr />

    <h2>3. Case Type</h2>
    <p>Defines the kind of test case.</p>

    <h3>3-1. Default Case Types (6)</h3>
    <ul>
      <li>Function (default) — functional test</li>
      <li>Performance — performance test</li>
      <li>Security — security test</li>
      <li>UI/UX — UI/UX test</li>
      <li>API — API test</li>
      <li>Regression — regression test</li>
    </ul>

    <h3>3-2. Adding a Case Type</h3>
    <ol>
      <li>Configuration left menu → Case Type</li>
      <li>In the input area at the top, enter Name and Description</li>
      <li>Click the Add button on the right</li>
    </ol>
    <p>A case type that is in use cannot be deleted — change the type on related TCs first.</p>

    <h3>3-3. Using Case Types</h3>
    <ul>
      <li>Choose from a dropdown on TC creation</li>
      <li>Stats by case type are available in reports</li>
    </ul>

    <hr />

    <h2>4. Component</h2>
    <p>Defines components of the system under test. Multi-select is supported.</p>

    <h3>4-1. Default Components</h3>
    <ul>
      <li>Frontend — UI/UX components</li>
      <li>Backend API — backend API services</li>
      <li>Database — DB related</li>
      <li>Authentication — auth / authorization</li>
      <li>Payment — payment system</li>
    </ul>

    <h3>4-2. Adding a Component</h3>
    <ol>
      <li>Configuration left menu → Component</li>
      <li>In the input area at the top, enter Name and Description</li>
      <li>Click the Add button on the right</li>
    </ol>
    <p>A component that is in use cannot be deleted — remove it from referencing TCs first.</p>

    <h3>4-3. Using Components</h3>
    <ul>
      <li>You can assign multiple components to a TC (e.g., "User Login" → Frontend, Authentication, Backend API)</li>
      <li>Defect rates by component can be seen in reports</li>
    </ul>

    <hr />

    <h2>5. Priorities</h2>
    <p>Defines TC priorities.</p>

    <h3>5-1. Default Priorities (4)</h3>
    <ul>
      <li>Critical — color <code>#FF5630</code> (red), Bar Level 3</li>
      <li>High — color <code>#FF7452</code> (orange), Bar Level 3</li>
      <li>Medium — color <code>#FFAB00</code> (yellow), Bar Level 2, default</li>
      <li>Low — color <code>#36B37E</code> (green), Bar Level 1</li>
    </ul>

    <h3>5-2. Adding a Priority</h3>
    <ol>
      <li>Configuration left menu → Priorities</li>
      <li>In the input area at the top, set:
        <ul>
          <li>Name (up to 20 characters)</li>
          <li>Description</li>
          <li>Bar Level — choose 0–3 in the preview dropdown (0 = no bar, 3 = highest)</li>
          <li>Color — pick from the color picker (no direct HEX input UI)</li>
        </ul>
      </li>
      <li>Click the Add button on the right</li>
    </ol>

    <ScreenshotSlot label="Adding a Priority" src={img03} />

    <h3>5-3. Editing / Deleting a Priority</h3>
    <ul>
      <li>Double-click a row to edit inline, or use the Edit button</li>
      <li>Change the default with the Default toggle (only one item can be the default)</li>
      <li>Reorder with Move Up / Move Down</li>
      <li>A priority that is in use cannot be deleted — change the priority on those TCs first</li>
    </ul>

    <hr />

    <h2>6. Plan Status</h2>
    <p>Defines TP statuses.</p>

    <h3>6-1. Default Statuses (3)</h3>
    <ul>
      <li>Prepairing — color <code>#6B778C</code> (gray), default</li>
      <li>Open — color <code>#0052CC</code> (blue)</li>
      <li>Completed — color <code>#36B37E</code> (green)</li>
    </ul>
    <aside className="guide-callout">Add custom statuses like "In Progress" or "Closed" as needed.</aside>

    <h3>6-2. Adding a Status</h3>
    <ol>
      <li>Configuration left menu → Plan Status</li>
      <li>In the input area at the top, enter Name, Description, and Color</li>
      <li>Click the Add button on the right</li>
    </ol>

    <ScreenshotSlot label="Managing Plan Status" src={img04} />

    <hr />

    <h2>7. Retestable Configuration (Completion Status by Issue Type)</h2>
    <p>For each Jira issue type, choose which workflow states are considered "Complete". Based on this setting, when a linked issue reaches a completion status, the related test case is switched to Retestable.</p>

    <h3>7-1. Concept</h3>
    <ul>
      <li>When a test run fails, create / link a Jira issue</li>
      <li>When the issue is fixed by a developer and reaches a complete status</li>
      <li>T-CAFE automatically flags the execution item as Retestable</li>
      <li>This page defines "which statuses count as complete" per issue type</li>
    </ul>

    <h3>7-2. How to Configure</h3>
    <ol>
      <li>Configuration → Issue Type (Retestable section)</li>
      <li>The project's Jira issue types are listed (Bug, Task, Story, etc.)</li>
      <li>Turn on each issue type's toggle to enable Retestable tracking</li>
      <li>From the workflow state list of enabled issue types, select the states that count as "complete" (multi-select)</li>
      <li>Click Save</li>
    </ol>

    <h3>7-3. Layout</h3>
    <ul>
      <li>Stats: total issue types / configured / unconfigured counts</li>
      <li>Per-issue-type card: toggle (enabled / disabled) + workflow state checkboxes</li>
      <li>If an enabled issue type has no completion states selected, a warning is shown on save</li>
    </ul>

    <h3>7-4. Examples</h3>
    <ul>
      <li>Bug issue type: set "Done" and "Closed" as complete → when a Bug changes to Done or Closed, the linked execution item becomes Retestable</li>
      <li>Task issue type: disabled → status changes on Task issues do not affect Retestable</li>
    </ul>

    <ScreenshotSlot label="Retestable Configuration" src={img05} />

    <hr />

    <h2>8. User Permissions</h2>
    <p>User Permissions has two tabs: Users and Roles.</p>

    <h3>8-1. Users Tab</h3>
    <ul>
      <li>List of project users</li>
      <li>Role dropdown for each user (system + custom roles are selectable)</li>
      <li>Activate toggle: activate or deactivate a user, which grants or blocks access immediately</li>
      <li>Status filter: filter the list by Active / Inactive / All</li>
    </ul>

    <h3>8-2. Roles Tab</h3>
    <ul>
      <li>Role list: each role shows a system badge (whether it is a system role) and the assigned-user count</li>
      <li>Permission Matrix: view / change each role's permissions via a toggle table</li>
      <li>Add Role: create a new custom role with fine-grained permissions</li>
      <li>Edit / Delete: modify or delete existing roles (system roles cannot be deleted but their permissions can be changed)</li>
    </ul>

    <h3>8-3. Users Added Automatically</h3>
    <ul>
      <li>All users of the Jira project are shown automatically</li>
      <li>No manual adding is required</li>
    </ul>

    <h3>8-4. Changing a Role</h3>
    <ol>
      <li>Click the role dropdown for the user's row on the Users tab</li>
      <li>Choose a new role (system roles: Admin / Team Admin / Tester / Developer, or a custom role)</li>
      <li>Saves automatically</li>
    </ol>

    <h3>8-5. Last-Admin Protection</h3>
    <ul>
      <li>The last Admin of a project cannot be deleted or reassigned to another role</li>
      <li>The system blocks this automatically</li>
    </ul>

    <p>For details, see <Link to="/support/guide/permissions">02. User Permissions</Link>.</p>

    <hr />

    <h2>9. Configuration Best Practices</h2>

    <h3>Recommended Project Start-up Order</h3>
    <ol>
      <li>Create sample data (automatically fills in the base Configuration)</li>
      <li>Define Case Fields (UDFs) — add fields specific to the project</li>
      <li>Review Case Types — add what you need (Usability, Accessibility, etc.)</li>
      <li>Define Components — match the real system structure</li>
      <li>Review Priorities — add / adjust to company standards</li>
      <li>Review Plan Status — align with the company workflow</li>
      <li>Configure user permissions — assign appropriate roles to team members</li>
    </ol>

    <h3>DO</h3>
    <ul>
      <li>Standardize: use consistent priorities and components across the company</li>
      <li>Keep it short: too many options confuse users (5–10 per category recommended)</li>
      <li>Naming conventions: apply a consistent naming scheme across all items</li>
      <li>Document: share the meaning of your Configuration with the team</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>Create once and keep growing without limit</li>
      <li>Leave unused options around</li>
      <li>Duplicates (e.g., both "High" and "Urgent")</li>
      <li>Vague names ("Type 1", "Component A")</li>
    </ul>

    <hr />

    <h2>10. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>Configuration tab is not visible</td><td>No Admin / Team Admin permission</td><td>Ask an Admin to change your role</td></tr>
        <tr><td>Priority cannot be deleted</td><td>It is currently used</td><td>Change the priority on TCs using it first</td></tr>
        <tr><td>UDF is not shown on TC</td><td>Field configuration</td><td>Check the field in Case Field</td></tr>
        <tr><td>Changing the default is not reflected on existing TCs</td><td>Existing TCs are unaffected</td><td>Applies to newly created TCs</td></tr>
        <tr><td>Issue Types list is empty</td><td>Insufficient Jira project permission</td><td>Check project permissions in Jira</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/permissions">02. User Permissions</Link></li>
      <li><Link to="/support/guide/test-cases">05. Test Cases</Link></li>
      <li><Link to="/support/guide/import-export">09. Import / Export</Link></li>
    </ul>
  </article>
);

export default { ko: <Configuration />, en: <ConfigurationEn /> };
