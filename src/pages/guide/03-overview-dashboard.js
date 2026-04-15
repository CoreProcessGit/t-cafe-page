import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const OverviewDashboard = () => (
  <article className="guide-article">
    <h1>03. Overview 대시보드</h1>
    <p className="guide-lead">
      Overview는 T-CAFE의 메인 페이지로, 프로젝트 전체 현황을 한눈에 파악할 수 있는 대시보드입니다.
    </p>

    <hr />

    <h2>1. 진입 경로</h2>
    <p>상단 탭 → <strong>Overview</strong> (T-CAFE의 첫 페이지, 기본값)</p>

    <hr />

    <h2>2. 화면 구성</h2>
    <p>Overview 페이지는 다음 영역이 위에서 아래 순서로 배치됩니다:</p>
    <table>
      <thead>
        <tr><th>순서</th><th>영역</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td>1 (조건부)</td><td><strong>Welcome Banner</strong></td><td>샘플 데이터 미생성 + 최근 6시간 내 dismiss 안 된 경우 표시</td></tr>
        <tr><td>2</td><td><strong>Board (게시판)</strong></td><td>프로젝트 게시판 목록/작성 영역</td></tr>
        <tr><td>3 (나란히)</td><td><strong>Count Section + Test Milestone</strong></td><td>좌: 카운트 카드, 우: TP 타임라인</td></tr>
        <tr><td>4</td><td><strong>Status Section</strong></td><td>TP 상태별 컬럼(Kanban) 목록</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Overview 메인 화면" />

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
        <tr><td><strong>샘플 데이터 생성</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>게시판 글 작성/수정/삭제</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>
    <p>→ <strong>모든 사용자가 조회 가능</strong>, 샘플 데이터 생성 및 게시글 작성/수정/삭제는 Admin 전용</p>

    <hr />

    <h2>4. Welcome Banner</h2>
    <p>프로젝트 진입 시 상단에 표시되는 환영 배너입니다.</p>

    <h3>표시 조건 (3가지 모두 만족 시)</h3>
    <ul>
      <li>해당 프로젝트에 <strong>샘플 데이터가 생성된 적 없음</strong> (한 번이라도 생성하면 영구 숨김)</li>
      <li>Banner를 <strong>dismiss한 뒤 6시간이 지났거나</strong>, 아직 dismiss한 적이 없음</li>
      <li>현재 프로젝트가 선택되어 있음</li>
    </ul>

    <h3>구성 요소</h3>
    <ul>
      <li>환영 제목 + 부제</li>
      <li><strong>Create Sample Data 버튼</strong> — <code>boardPost</code>와 별개로 <code>overview.sampleData</code> 권한(Admin 기본 O)을 가진 사용자에게만 노출</li>
      <li>닫기 버튼 (×) — 클릭 시 프로젝트 단위로 6시간 동안 숨김</li>
    </ul>

    <ScreenshotSlot label="Welcome Banner" />

    <p>샘플 데이터 생성 동작은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고</p>

    <hr />

    <h2>5. Board (게시판) 섹션</h2>
    <p>Overview 페이지 상단에 게시판이 임베드되어 표시됩니다.</p>

    <h3>표시 항목</h3>
    <ul>
      <li>한 페이지당 <strong>5개</strong> 고정</li>
      <li>정렬: <strong>작성일 DESC (최신순)</strong> — 별도의 Notice 상단 고정 기능 없음</li>
      <li>컬럼: #, 카테고리, 제목, 작성자, 작성일 (조회수는 목록에 없음, 상세에서만 표시)</li>
    </ul>

    <h3>사용</h3>
    <ul>
      <li>행 클릭 → 해당 게시글 상세 모달 열림</li>
      <li>Admin은 하단 우측 <strong>글작성</strong> 버튼으로 작성 가능</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/board">04. 게시판</Link> 참고</p>

    <hr />

    <h2>6. Count Section (개수 통계)</h2>
    <p>프로젝트의 기본 수치를 3장의 카드로 표시합니다.</p>

    <h3>표시 카드 (총 3개)</h3>
    <table>
      <thead>
        <tr><th>카드</th><th>내용</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Test Cases</strong></td><td>프로젝트의 전체 TC 개수</td></tr>
        <tr><td><strong>Test Plans</strong></td><td>프로젝트의 전체 TP 개수</td></tr>
        <tr><td><strong>Total Users</strong></td><td>프로젝트에 할당된 사용자 수</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Count Section" />

    <aside className="guide-callout">카드 자체에는 클릭 네비게이션이 연결되어 있지 않습니다. 페이지 이동은 상단 탭을 사용합니다.</aside>

    <hr />

    <h2>7. Test Milestone (테스트 마일스톤 타임라인)</h2>
    <p>TP들을 <strong>간트 차트 형식의 타임라인 막대</strong>로 표시합니다.</p>

    <h3>표시 정보</h3>
    <ul>
      <li>TP 이름</li>
      <li>시작일 ~ 종료일 (막대)</li>
      <li>진행률 (막대 내부 채워진 정도)</li>
      <li>상태 (Plan Status의 색상 적용)</li>
    </ul>

    <ScreenshotSlot label="Test Milestone Timeline" />

    <h3>인터랙션</h3>
    <ul>
      <li>막대 클릭 → 해당 TP의 Test Cases 탭(<code>/test-plans/:key/add-test-cases</code>)으로 이동</li>
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

    <h2>8. Status Section (상태별 Kanban)</h2>
    <p>Plan Status 목록(예: Draft / Open / Completed / 사용자 정의)을 각각 세로 컬럼으로 나열하고, TP들을 상태별로 그룹핑해 카드로 보여주는 <strong>Kanban 형태의 섹션</strong>입니다. (파이/막대/트렌드 차트는 사용하지 않습니다.)</p>

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

    <ScreenshotSlot label="Status Section Kanban" />

    <hr />

    <h2>9. 샘플 데이터 생성 (Admin 전용)</h2>
    <p>Welcome Banner의 <strong>Create Sample Data</strong> 버튼으로 시작합니다. 생성 중에는 FullscreenLoader가 표시되며, 완료 시 Banner는 영구 숨김 처리됩니다(프로젝트 단위).</p>
    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기 → 3. 샘플 데이터 생성</Link> 참고</p>

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
    <p>우상단 언어 선택 메뉴에서 <strong>Auto / English / 한국어 / 日本語</strong> 4개 중 선택 가능 (Auto는 브라우저/Jira 사용자 locale 추종).</p>

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
      <li>신규 프로젝트 생성 직후 <strong>Create Sample Data</strong>로 학습 자료 제공</li>
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

export default OverviewDashboard;
