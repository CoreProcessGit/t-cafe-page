import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import shotWelcome from '../../assets/user_guide/03-overview-dashboard/1. welcome banner.png';
import shotMilestone from '../../assets/user_guide/03-overview-dashboard/2. Test Milestone.png';
import shotCount from '../../assets/user_guide/03-overview-dashboard/3. Count.png';
import shotStatus from '../../assets/user_guide/03-overview-dashboard/4. Test Plans.png';

const OverviewDashboard = () => (
  <article className="guide-article">
    <h1>03. Overview 대시보드</h1>
    <p className="guide-lead">
      Overview는 T-CAFE의 메인 페이지로, 프로젝트 전체 현황을 한눈에 파악할 수 있는 대시보드입니다.
    </p>

    <hr />

    <h2>1. 진입 경로</h2>
    <p>상단 탭 → Overview (T-CAFE의 첫 페이지, 기본값)</p>

    <hr />

    <h2>2. 화면 구성</h2>
    <p>Overview 페이지는 다음 영역이 위에서 아래 순서로 배치됩니다:</p>
    <table>
      <thead>
        <tr><th>순서</th><th>영역</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Welcome Banner</td><td>샘플 데이터 미생성 + 최근 6시간 내 dismiss 안 된 경우 표시</td></tr>
        <tr><td>2</td><td>Board (게시판)</td><td>프로젝트 게시판 목록/작성 영역</td></tr>
        <tr><td>3</td><td>Count Section + Test Milestone</td><td>좌: 카운트 카드, 우: TP 타임라인</td></tr>
        <tr><td>4</td><td>Status Section</td><td>TP 상태별 컬럼(Kanban) 목록</td></tr>
      </tbody>
    </table>

    {/* <ScreenshotSlot label="Overview 메인 화면" /> */}

    <hr />

    <h2>3. 권한</h2>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>페이지 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Count/Milestone/Status 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>샘플 데이터 생성</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>게시판 글 작성/수정/삭제</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>
    <p>→ 모든 사용자가 조회 가능, 샘플 데이터 생성 및 게시글 작성/수정/삭제는 Admin 전용</p>

    <hr />

    <h2>4. Welcome Banner</h2>
    <p>프로젝트 진입 시 상단에 표시되는 환영 배너입니다.</p>

    <h3>표시 조건 (3가지 모두 만족 시)</h3>
    <ul>
      <li>해당 프로젝트에 샘플 데이터가 생성된 적 없음 (한 번이라도 생성하면 영구 숨김)</li>
      <li>Banner를 dismiss한 뒤 6시간이 지났거나, 아직 dismiss한 적이 없음</li>
      <li>현재 프로젝트가 선택되어 있음</li>
    </ul>

    <h3>구성 요소</h3>
    <ul>
      <li>환영 제목 + 부제</li>
      <li>Create Sample Data 버튼 — <code>boardPost</code>와 별개로 <code>overview.sampleData</code> 권한(Admin 기본 O)을 가진 사용자에게만 노출</li>
      <li>닫기 버튼 (×) — 클릭 시 프로젝트 단위로 6시간 동안 숨김</li>
    </ul>

    <ScreenshotSlot src={shotWelcome} label="Welcome Banner" />

    <p>샘플 데이터 생성 동작은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고</p>

    <hr />

    <h2>5. Board (게시판) 섹션</h2>
    <p>Overview 페이지 상단에 게시판이 임베드되어 표시됩니다.</p>

    <h3>표시 항목</h3>
    <ul>
      <li>한 페이지당 5개 고정</li>
      <li>정렬: 작성일 DESC (최신순) — 별도의 Notice 상단 고정 기능 없음</li>
      <li>컬럼: #, 카테고리, 제목, 작성자, 작성일 (조회수는 목록에 없음, 상세에서만 표시)</li>
    </ul>

    <h3>사용</h3>
    <ul>
      <li>행 클릭 → 해당 게시글 상세 모달 열림</li>
      <li>Admin은 하단 우측 글작성 버튼으로 작성 가능</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/board">04. 게시판</Link> 참고</p>

    <hr />

    <h2>6. Test Milestone (테스트 마일스톤 타임라인)</h2>
    <p>TP들을 간트 차트 형식의 타임라인 막대로 표시합니다.</p>

    <h3>표시 정보</h3>
    <ul>
      <li>TP 이름</li>
      <li>시작일 ~ 종료일 (막대)</li>
      <li>진행률 (막대 내부 채워진 정도)</li>
      <li>상태 (Plan Status의 색상 적용)</li>
    </ul>

    <ScreenshotSlot src={shotMilestone} label="Test Milestone Timeline" />

    <h3>인터랙션</h3>
    <ul>
      <li>막대 클릭 → 해당 TP의 Test Cases 탭으로 이동</li>
      <li>호버 시 Total / Passed / Failed TC 개수 등 요약 표시</li>
      <li>섹션 헤더의 Refresh 버튼으로 수동 갱신</li>
    </ul>

    <h3>필터 및 정렬</h3>
    <ul>
      <li>상태별 표시/숨기기 체크박스</li>
      <li>기간 필터: 전체 / 7일 / 30일 / 90일 / 사용자 지정(시작일·종료일 입력)</li>
      <li>정렬 토글: 최신순(newest) / 오래된순(oldest) — 기본 시작일 기준</li>
    </ul>

    <hr />

    <h2>7. Count Section (개수 통계)</h2>
    <p>프로젝트의 기본 수치를 3장의 카드로 표시합니다.</p>

    <h3>표시 카드 (총 3개)</h3>
    <table>
      <thead>
        <tr><th>카드</th><th>내용</th></tr>
      </thead>
      <tbody>
        <tr><td>Test Cases</td><td>프로젝트의 전체 TC 개수</td></tr>
        <tr><td>Test Plans</td><td>프로젝트의 전체 TP 개수</td></tr>
        <tr><td>Total Users</td><td>프로젝트에 할당된 사용자 수</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot src={shotCount} label="Count Section" />

    <aside className="guide-callout">카드 자체에는 클릭 네비게이션이 연결되어 있지 않습니다. 페이지 이동은 상단 탭을 사용합니다.</aside>

    <hr />

    <h2>8. Status Section (상태별 Kanban)</h2>
    <p>Plan Status 목록(예: Prepairing / Open / Completed / 사용자 정의)을 각각 세로 컬럼으로 나열하고, TP들을 상태별로 그룹핑해 카드로 보여주는 Kanban 형태의 섹션입니다. (파이/막대/트렌드 차트는 사용하지 않습니다.)</p>

    <h3>구성</h3>
    <ul>
      <li>각 컬럼 헤더: 상태 이름 + 색상 + 해당 상태의 TP 총 개수</li>
      <li>컬럼 본문: 해당 상태의 TP 카드 목록 (제목, 기간, 진행 정보)</li>
      <li>카드 클릭 → 해당 TP의 Test Cases 탭으로 이동</li>
    </ul>

    <h3>상단 컨트롤</h3>
    <ul>
      <li>정렬 토글: newest / oldest</li>
      <li>기간 프리셋: 전체 / 7일 / 30일 / 90일</li>
      <li>사용자 지정 시작일/종료일</li>
      <li>필터 초기화 버튼</li>
      <li>컬럼이 3개를 초과하면 좌/우 스크롤 버튼 노출</li>
    </ul>

    <ScreenshotSlot src={shotStatus} label="Status Section Kanban" />

    <hr />

    <h2>9. 샘플 데이터 생성 (Admin 전용)</h2>
    <p>Welcome Banner의 Create Sample Data 버튼으로 시작합니다. 생성 중에는 전체 화면 진행 모달이 표시되며 (진행률 % 포함), 완료 시 Banner는 영구 숨김 처리됩니다 (프로젝트 단위).</p>
    <p>생성되는 샘플 데이터 구성:</p>
    <ul>
      <li>6 개의 [Sample] 폴더 (Login / Dashboard / User Management / Payment / API Tests / Cross Browser)</li>
      <li>약 10 개의 Single Test Case — 일부는 Confirmed, 나머지는 Draft (실무 예시)</li>
      <li>20 여 개의 Factor Combination Test Case ([Sample] Cross Browser 폴더) — Browser / Device / OS / Feature 4 factor + Two-Way Exclude 제약 예시 포함</li>
      <li>2 개의 Test Plan (Sprint 1 / Sprint 2) — Confirmed TC 로 구성</li>
      <li>2 개의 공지 게시물</li>
    </ul>
    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기 → 2. 샘플 데이터 생성</Link> 참고</p>

    <hr />

    <h2>10. 새로고침 동작</h2>
    <table>
      <thead>
        <tr><th>항목</th><th>갱신 시점</th></tr>
      </thead>
      <tbody>
        <tr><td>Count / Board / Milestone / Status</td><td>페이지 진입 시, 프로젝트 변경 시</td></tr>
        <tr><td>Milestone</td><td>위 조건 외에 Test Milestone 섹션의 Refresh 버튼으로 수동 갱신</td></tr>
        <tr><td>Welcome Banner</td><td>샘플 데이터 생성 완료 후 자동 재조회</td></tr>
      </tbody>
    </table>
    <p>주기적 자동 갱신(polling)은 없습니다. 전체 데이터를 다시 불러오려면 브라우저 새로고침(F5)을 사용하세요.</p>

    <hr />

    <h2>11. 프로젝트 변경</h2>
    <p>우상단 프로젝트 선택 드롭다운으로 다른 프로젝트로 전환하면 URL이 해당 프로젝트 경로로 바뀌면서 Overview가 새 프로젝트 기준으로 다시 로드됩니다.</p>

    <h3>전환 시 동작</h3>
    <ul>
      <li>Count / Board / Milestone / Status 모두 새 프로젝트의 데이터로 교체</li>
      <li>Welcome Banner 표시 여부도 새 프로젝트의 샘플 데이터 생성 여부 및 dismiss 타임스탬프 기준으로 재평가</li>
      <li>사용자 권한(<code>getUserRole</code>)도 새 프로젝트 기준으로 재조회</li>
    </ul>

    <hr />

    <h2>12. 언어 변경</h2>
    <p>우상단 언어 선택 메뉴에서 Auto / English / 한국어 / 日本語 4개 중 선택 가능 (Auto는 브라우저/Jira 사용자 locale 추종).</p>

    <h3>영향 범위</h3>
    <ul>
      <li>UI 텍스트</li>
      <li>숫자/날짜 로케일 포맷 (<code>Intl</code> 사용 영역)</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고</p>

    <hr />

    <h2>13. Overview를 활용하는 일반적인 시나리오</h2>

    <h3>시나리오 1: 매일 아침 점검</h3>
    <pre><code>{`1. Jira 접속 → T-CAFE 탭
2. Overview 페이지 자동 진입
3. 게시판에서 새 공지 확인
4. Milestone에서 오늘 마감인 TP 확인
5. Pass Rate가 어제 대비 떨어졌는지 확인
6. 필요한 경우 Test Plans 탭으로 이동해서 상세 확인`}</code></pre>

    <h3>시나리오 2: QA 매니저의 주간 리포트</h3>
    <pre><code>{`1. Overview에서 전체 통계 캡처
2. Milestone 타임라인 캡처
3. Status Section의 차트 캡처
4. 주간 리포트 메일에 첨부`}</code></pre>

    <h3>시나리오 3: 신규 멤버 온보딩</h3>
    <pre><code>{`1. Admin이 새 멤버에게 T-CAFE 안내
2. 신규 멤버가 Overview에서 프로젝트 설명 확인
3. 게시판에서 환영 메시지 확인
4. Test Cases 탭으로 이동해 학습 시작`}</code></pre>

    <hr />

    <h2>14. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Overview가 비어 있음</td><td>프로젝트에 TC/TP가 없음</td><td>샘플 데이터 생성(Admin) 또는 TC/TP 추가</td></tr>
        <tr><td>Welcome Banner가 닫혀도 다시 나타남</td><td>dismiss 후 6시간 경과</td><td>정상 동작 — 영구 숨기려면 샘플 데이터 생성</td></tr>
        <tr><td>Milestone에 특정 TP가 안 보임</td><td>TP의 시작일/종료일 미설정 또는 현재 기간 필터에서 제외</td><td>TP 편집해서 시작·종료일 입력, 또는 기간 필터를 '전체'로 변경</td></tr>
        <tr><td>Milestone 데이터가 오래된 것 같음</td><td>진입 후 외부에서 TP가 변경됨</td><td>Milestone 섹션의 Refresh 버튼 또는 F5</td></tr>
        <tr><td>Status 섹션 컬럼이 너무 많아 보기 어려움</td><td>Plan Status가 많음</td><td>섹션 하단의 좌/우 스크롤 버튼 사용</td></tr>
        <tr><td>글작성 버튼이 안 보임</td><td>Admin 권한 없음 (<code>overview.boardPost</code> false)</td><td>Admin에게 요청</td></tr>
        <tr><td>Create Sample Data 버튼이 안 보임</td><td>Admin 권한 없음 (<code>overview.sampleData</code> false) 또는 이미 생성됨</td><td>Admin에게 요청 / 이미 생성된 프로젝트는 더 이상 노출 안 됨</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>15. Overview 베스트 프랙티스</h2>

    <h3>Admin</h3>
    <ul>
      <li>신규 프로젝트 생성 직후 Create Sample Data로 학습 자료 제공</li>
      <li>주요 공지/릴리스 정보는 게시판에 정기적으로 등록</li>
      <li>TP의 시작일·종료일을 꼭 입력해 Milestone에 노출되도록 유지</li>
    </ul>

    <h3>일반 사용자</h3>
    <ul>
      <li>업무 시작 시 Overview 먼저 확인 (Board 공지 + Milestone 진행도)</li>
      <li>Status Kanban에서 본인이 맡은 TP의 상태 컬럼을 빠르게 점검</li>
      <li>Count 카드 수치가 전날과 크게 다르면 Test Plans 탭에서 상세 확인</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/getting-started">01. 시작하기</Link></li>
      <li><Link to="/support/guide/board">04. 게시판</Link></li>
      <li><Link to="/support/guide/test-reports">12. 테스트 리포트</Link> — 더 자세한 리포트</li>
    </ul>
  </article>
);

const OverviewDashboardEn = () => (
  <article className="guide-article">
    <h1>03. Overview Dashboard</h1>
    <p className="guide-lead">
      Overview is T-CAFE's main page — a dashboard that lets you see the overall status of a project at a glance.
    </p>

    <hr />

    <h2>1. Navigation</h2>
    <p>Top tab → Overview (T-CAFE's first page, by default)</p>

    <hr />

    <h2>2. Layout</h2>
    <p>The Overview page arranges the following regions from top to bottom:</p>
    <table>
      <thead>
        <tr><th>Order</th><th>Region</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Welcome Banner</td><td>Shown when sample data has not been generated and the banner has not been dismissed within the last 6 hours</td></tr>
        <tr><td>2</td><td>Board</td><td>Project board list / write area</td></tr>
        <tr><td>3</td><td>Count Section + Test Milestone</td><td>Left: count cards. Right: TP timeline</td></tr>
        <tr><td>4</td><td>Status Section</td><td>A Kanban list of columns grouped by TP status</td></tr>
      </tbody>
    </table>

    {/* <ScreenshotSlot label="Overview main screen" /> */}

    <hr />

    <h2>3. Permissions</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>View page</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>View Count / Milestone / Status</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Create Sample Data</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Create / edit / delete Board posts</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>
    <p>→ All users can view. Creating sample data and creating / editing / deleting board posts is Admin-only.</p>

    <hr />

    <h2>4. Welcome Banner</h2>
    <p>A welcome banner shown at the top when you enter the project.</p>

    <h3>Display Conditions (all three must hold)</h3>
    <ul>
      <li>Sample data has never been generated in this project (once generated, the banner is permanently hidden)</li>
      <li>The banner has not been dismissed within the last 6 hours, or has never been dismissed</li>
      <li>A project is currently selected</li>
    </ul>

    <h3>Components</h3>
    <ul>
      <li>Welcome title + subtitle</li>
      <li>Create Sample Data button — shown only to users who have the <code>overview.sampleData</code> permission (enabled by default for Admin), independently from <code>boardPost</code></li>
      <li>Close button (×) — when clicked, hides the banner for 6 hours, scoped to the project</li>
    </ul>

    <ScreenshotSlot src={shotWelcome} label="Welcome Banner" />

    <p>For sample-data creation, see <Link to="/support/guide/getting-started">01. Getting Started</Link>.</p>

    <hr />

    <h2>5. Board Section</h2>
    <p>The Board is embedded near the top of the Overview page.</p>

    <h3>Displayed Items</h3>
    <ul>
      <li>Fixed to 5 posts per page</li>
      <li>Sorted: created-date DESC (newest first) — there is no separate "pin notice at top" feature</li>
      <li>Columns: #, Category, Title, Author, Created date (view count is not in the list — it appears only in the detail view)</li>
    </ul>

    <h3>Usage</h3>
    <ul>
      <li>Click a row → opens the post detail modal</li>
      <li>Admin can create posts from the Write Post button at the bottom-right</li>
    </ul>

    <p>For details, see <Link to="/support/guide/board">04. Board</Link>.</p>

    <hr />

    <h2>6. Test Milestone (TP Timeline)</h2>
    <p>Displays TPs as Gantt-style timeline bars.</p>

    <h3>Information Displayed</h3>
    <ul>
      <li>TP name</li>
      <li>Start date ~ end date (bar)</li>
      <li>Progress (fill level inside the bar)</li>
      <li>Status (Plan Status color applied)</li>
    </ul>

    <ScreenshotSlot src={shotMilestone} label="Test Milestone Timeline" />

    <h3>Interactions</h3>
    <ul>
      <li>Click a bar → navigates to the Test Cases tab of that TP</li>
      <li>Hover shows a summary with Total / Passed / Failed TC counts</li>
      <li>Use the Refresh button in the section header to refresh manually</li>
    </ul>

    <h3>Filter and Sort</h3>
    <ul>
      <li>Show/hide checkboxes per status</li>
      <li>Date filter: All / 7 days / 30 days / 90 days / custom (enter start and end dates)</li>
      <li>Sort toggle: newest / oldest — based on start date by default</li>
    </ul>

    <hr />

    <h2>7. Count Section</h2>
    <p>Shows the project's basic metrics as three cards.</p>

    <h3>Cards (3 total)</h3>
    <table>
      <thead>
        <tr><th>Card</th><th>Content</th></tr>
      </thead>
      <tbody>
        <tr><td>Test Cases</td><td>Total number of TCs in the project</td></tr>
        <tr><td>Test Plans</td><td>Total number of TPs in the project</td></tr>
        <tr><td>Total Users</td><td>Number of users assigned to the project</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot src={shotCount} label="Count Section" />

    <aside className="guide-callout">The cards themselves are not linked for navigation. To move to another page, use the top tabs.</aside>

    <hr />

    <h2>8. Status Section (Kanban by Status)</h2>
    <p>A Kanban-style section that lists each Plan Status (for example, Prepairing / Open / Completed / custom) as a vertical column and groups TPs into those columns as cards. (No pie, bar, or trend charts are used.)</p>

    <h3>Layout</h3>
    <ul>
      <li>Each column header: status name + color + total TP count for that status</li>
      <li>Column body: TP cards for that status (title, period, progress info)</li>
      <li>Click a card → navigates to the Test Cases tab of that TP</li>
    </ul>

    <h3>Top Controls</h3>
    <ul>
      <li>Sort toggle: newest / oldest</li>
      <li>Date presets: All / 7 days / 30 days / 90 days</li>
      <li>Custom start / end dates</li>
      <li>Reset filters button</li>
      <li>When more than 3 columns are present, left/right scroll buttons appear</li>
    </ul>

    <ScreenshotSlot src={shotStatus} label="Status Section Kanban" />

    <hr />

    <h2>9. Creating Sample Data (Admin only)</h2>
    <p>Start from the Create Sample Data button on the Welcome Banner. A full-screen progress modal (with a percentage indicator) is shown while it runs, and the banner is permanently hidden on completion (per project).</p>
    <p>What the sample data contains:</p>
    <ul>
      <li>6 [Sample] folders (Login / Dashboard / User Management / Payment / API Tests / Cross Browser)</li>
      <li>About 10 Single Test Cases — some Confirmed, others Draft (realistic mix)</li>
      <li>About 20 Factor Combination Test Cases ([Sample] Cross Browser folder) — Browser / Device / OS / Feature four factors with a Two-Way Exclude constraint example</li>
      <li>2 Test Plans (Sprint 1 / Sprint 2) — composed of Confirmed TCs</li>
      <li>2 board posts</li>
    </ul>
    <p>For details, see <Link to="/support/guide/getting-started">01. Getting Started → 2. Sample Data</Link>.</p>

    <hr />

    <h2>10. Refresh Behavior</h2>
    <table>
      <thead>
        <tr><th>Item</th><th>When it refreshes</th></tr>
      </thead>
      <tbody>
        <tr><td>Count / Board / Milestone / Status</td><td>On page entry, on project change</td></tr>
        <tr><td>Milestone</td><td>In addition to the above, via the Refresh button in the Test Milestone section</td></tr>
        <tr><td>Welcome Banner</td><td>Auto-refetched after sample data creation completes</td></tr>
      </tbody>
    </table>
    <p>There is no periodic auto-refresh (polling). To reload everything, use the browser refresh (F5).</p>

    <hr />

    <h2>11. Changing Project</h2>
    <p>Switching to another project via the project selector in the top-right changes the URL to that project's path and reloads Overview against the new project.</p>

    <h3>On Switch</h3>
    <ul>
      <li>Count / Board / Milestone / Status are all replaced with the new project's data</li>
      <li>Whether the Welcome Banner is shown is re-evaluated using the new project's sample-data state and dismiss timestamp</li>
      <li>User permissions (<code>getUserRole</code>) are also re-fetched against the new project</li>
    </ul>

    <hr />

    <h2>12. Changing Language</h2>
    <p>In the language selector at the top-right, choose one of Auto / English / 한국어 / 日本語 (Auto follows the browser / Jira user locale).</p>

    <h3>Scope</h3>
    <ul>
      <li>UI text</li>
      <li>Number / date locale formatting (areas that use <code>Intl</code>)</li>
    </ul>

    <p>For details, see <Link to="/support/guide/getting-started">01. Getting Started</Link>.</p>

    <hr />

    <h2>13. Common Scenarios for Using Overview</h2>

    <h3>Scenario 1: Morning check-in</h3>
    <pre><code>{`1. Open Jira → T-CAFE tab
2. Overview page loads automatically
3. Check for new notices in the Board
4. Check TPs due today in the Milestone
5. See whether the Pass Rate dropped vs. yesterday
6. If needed, navigate to the Test Plans tab for details`}</code></pre>

    <h3>Scenario 2: Weekly report for QA managers</h3>
    <pre><code>{`1. Capture the overall metrics from Overview
2. Capture the Milestone timeline
3. Capture the charts in the Status Section
4. Attach to the weekly report email`}</code></pre>

    <h3>Scenario 3: New-member onboarding</h3>
    <pre><code>{`1. Admin walks the new member through T-CAFE
2. The new member reads the project overview on Overview
3. Check the welcome message on the Board
4. Move to the Test Cases tab and start learning`}</code></pre>

    <hr />

    <h2>14. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>Overview is empty</td><td>The project has no TCs / TPs</td><td>Create sample data (Admin) or add TCs / TPs</td></tr>
        <tr><td>Welcome Banner comes back after being dismissed</td><td>More than 6 hours have passed since dismiss</td><td>Intended behavior — to hide permanently, create sample data</td></tr>
        <tr><td>A specific TP is not visible in Milestone</td><td>The TP has no start / end date, or it is excluded by the current date filter</td><td>Edit the TP to set start / end dates, or set the date filter to "All"</td></tr>
        <tr><td>Milestone data looks stale</td><td>A TP was changed externally after page entry</td><td>Use the Refresh button in the Milestone section or press F5</td></tr>
        <tr><td>Status Section has too many columns to view easily</td><td>Many Plan Statuses</td><td>Use the left/right scroll buttons at the bottom of the section</td></tr>
        <tr><td>Write Post button is not visible</td><td>No Admin permission (<code>overview.boardPost</code> is false)</td><td>Ask an Admin</td></tr>
        <tr><td>Create Sample Data button is not visible</td><td>No Admin permission (<code>overview.sampleData</code> is false) or already generated</td><td>Ask an Admin / already-generated projects no longer show it</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>15. Overview Best Practices</h2>

    <h3>Admin</h3>
    <ul>
      <li>Right after creating a new project, provide learning material via Create Sample Data</li>
      <li>Post major notices and release info to the Board regularly</li>
      <li>Always fill in TP start / end dates so they show up in the Milestone</li>
    </ul>

    <h3>End Users</h3>
    <ul>
      <li>Start the day by checking Overview (Board notices + Milestone progress)</li>
      <li>Quickly inspect your own TP's status column in the Status Kanban</li>
      <li>If the Count card numbers differ significantly from yesterday, check the Test Plans tab for details</li>
    </ul>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/getting-started">01. Getting Started</Link></li>
      <li><Link to="/support/guide/board">04. Board</Link></li>
      <li><Link to="/support/guide/test-reports">12. Test Reports</Link> — more detailed reporting</li>
    </ul>
  </article>
);

export default { ko: <OverviewDashboard />, en: <OverviewDashboardEn /> };
