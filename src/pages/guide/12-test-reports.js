import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/12-testreports/01.png';
import img02 from '../../assets/user_guide/12-testreports/02.png';
import img03 from '../../assets/user_guide/12-testreports/03.png';
import img04 from '../../assets/user_guide/12-testreports/04.png';

const TestReports = () => (
  <article className="guide-article">
    <h1>12. 테스트 리포트</h1>
    <p className="guide-lead">
      테스트 리포트는 TP의 실행 결과를 시각화하고 분석할 수 있는 페이지입니다. 의사결정과 품질 보고에 활용됩니다.
    </p>

    <hr />

    <h2>1. 리포트 진입</h2>
    <p>상단 탭 → <strong>Test Reports</strong></p>

    <ScreenshotSlot label="Test Reports 메인 화면" src={img01} />

    <hr />

    <h2>2. 권한</h2>
    <table>
      <thead>
        <tr><th>권한</th><th className="center">조회</th><th className="center">Export</th></tr>
      </thead>
      <tbody>
        <tr><td>Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Team Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>Tester</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
        <tr><td><strong>Developer</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
      </tbody>
    </table>
    <p>→ <strong>모든 역할이 리포트를 조회/Export할 수 있습니다</strong> (테스트 결과는 팀 전체에 투명하게 공유)</p>

    <hr />

    <h2>3. 화면 구성</h2>
    <h3>3-1. Test Reports 메인 (TP 목록)</h3>
    <p>Test Reports 상단 탭 진입 시 프로젝트의 TP 목록이 표시됩니다. 각 TP 행에는 Key / Name / Owner / Start Date / End Date / Progress / Status가 표시되며, TP 클릭 시 상세 리포트 페이지로 이동합니다.</p>

    <h3>3-2. TP 상세 리포트 — View Type (3종)</h3>
    <p>TP 상세 리포트에서는 실행 결과를 3가지 관점(View Type)으로 테이블 형태로 확인할 수 있습니다. 세 가지 중 하나를 라디오 버튼으로 선택합니다.</p>
    <ul>
      <li><strong>Folder View</strong> — TP 내부의 폴더 단위로 집계. 추가로 <em>All Levels / Level 1 / Level 2 …</em>로 폴더 깊이를 제한해 볼 수 있음</li>
      <li><strong>Component View</strong> — TC의 Components 값(예: Frontend / Backend API …)별로 집계</li>
      <li><strong>Tester View</strong> — 마지막으로 실행한 사용자(실행자)별로 집계</li>
    </ul>

    <h3>3-3. 리포트 테이블 컬럼 (선택 View별 공통)</h3>
    <p>선택한 View에 따라 첫 번째 컬럼이 Folder Name / Component Name / User Name으로 바뀌며, 나머지 통계 컬럼은 동일합니다:</p>
    <ul>
      <li><strong>Total (A)</strong> — 전체 실행 항목 수</li>
      <li><strong>Execution Results</strong> — Pass / Fail / Block / Skip (각 컬럼은 B / C / D / E로 표기)</li>
      <li><strong>Weekly Planned (F)</strong> — 주간 계획 수</li>
      <li><strong>Not Executed</strong> — <code>A - E - B - C - D</code></li>
      <li><strong>Total Execution Rate</strong> — <code>(B+C+D)/(A-E)×100</code></li>
      <li><strong>Planned Execution Rate</strong> — <code>(B+C+D)/F×100</code></li>
      <li><strong>Total Success Rate</strong> — <code>B/(A-E)×100</code></li>
      <li><strong>Execution Success Rate</strong> — <code>B/(B+C+D)×100</code></li>
    </ul>

    <h3>3-4. Retestable Test Cases 섹션</h3>
    <p>상세 페이지에는 연결된 Jira Issue가 완료 상태가 되어 재테스트가 필요한 TC를 모아 보여주는 섹션이 별도로 있습니다. <strong>Check Retestable</strong> 버튼은 Admin/Team Admin 권한 보유자만 이용할 수 있으며, 마지막 확인 시각(Retestable checked time)이 표시됩니다.</p>

    <hr />

    <h2>4. 시각화 방식</h2>
    <p>T-CAFE의 Test Reports는 <strong>테이블 기반 metrics 뷰</strong>로 정보를 제공합니다. 파이/막대/선 등 별도의 차트 UI는 제공하지 않으며, Pass Rate 수준에 따라 행 배경색/텍스트 색상이 다음과 같이 달라집니다:</p>
    <ul>
      <li><strong>Pass Rate &gt; 80%</strong> — 상위 구간 (강조 색상)</li>
      <li><strong>Pass Rate &gt; 60%</strong> — 중간 구간</li>
      <li><strong>Pass Rate &lt; 60%</strong> — 경고 구간</li>
    </ul>
    <p>실행 상태별 색상(Pass/Fail/Block/Skip/Not Yet)은 테이블 내 상태 셀·진행 바에 일관되게 적용됩니다.</p>

    <ScreenshotSlot label="리포트 테이블" src={img02} />

    <hr />

    <h2>5. 리포트 필터 (TP 목록)</h2>
    <p>Test Reports 메인 화면의 TP 목록에는 검색창과 필터 패널이 있습니다. 필터는 복수 선택 시 AND 조건으로 적용됩니다.</p>

    <h3>검색</h3>
    <ul>
      <li>상단 검색창에서 TP 이름/키로 검색 가능</li>
    </ul>

    <h3>필터 옵션 (3종)</h3>
    <ul>
      <li><strong>Status</strong> — TP 상태(Draft / Open / Completed 등, Configuration에서 정의된 Plan Status 기준)</li>
      <li><strong>Owner</strong> — TP 소유자로 필터</li>
      <li><strong>Progress</strong> — Not Started / In Progress / Completed (진행률 구간)</li>
    </ul>
    <p>필터 패널 상단의 <strong>Reset</strong> 또는 헤더의 <strong>Clear</strong> 버튼으로 전체 초기화 가능.</p>

    <h3>컬럼 표시/숨기기</h3>
    <ul>
      <li>View Columns 버튼으로 Key / Name / Owner / Start Date / End Date / Progress / Status 컬럼을 토글</li>
    </ul>

    <aside className="guide-callout info">
      날짜 범위 · 우선순위 · 컴포넌트 · Pass/Fail 상태별 필터는 TP 목록 화면에서는 제공되지 않습니다. 실행 결과 분석은 TP 상세 리포트의 View Type(Folder / Component / Tester)으로 수행합니다.
    </aside>

    <ScreenshotSlot label="리포트 필터" src={img03} />

    <hr />

    <h2>6. 리포트 Export</h2>

    <h3>지원 형식</h3>
    <ul>
      <li><strong>Excel (XLSX)</strong> 단일 형식만 지원합니다. CSV / JSON 형식 export는 Test Reports에서는 제공하지 않습니다.</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>TP 상세 리포트 페이지에 진입</li>
      <li>원하는 View Type(Folder / Component / Tester)을 선택</li>
      <li>테이블 헤더 우측의 <strong>Export to Excel</strong> 버튼 클릭</li>
      <li>XLSX 파일이 즉시 다운로드됨 (별도 형식 선택 단계 없음)</li>
    </ol>

    <h3>Export 컬럼 (TC 메타데이터 기준)</h3>
    <p>다운로드되는 Excel에는 해당 TP에 포함된 TC의 메타데이터가 정렬(생성일 최신순)되어 담깁니다:</p>
    <ul>
      <li>Key, Name *, Description, Objective, Precondition</li>
      <li>Type (Single / Factor), Case Type, Priority, Owner</li>
      <li>Components, Labels, Folder, Folder Path</li>
      <li>정의된 사용자 정의 필드(UDF) — 각 필드를 별도 컬럼으로 추가 (필수 필드는 헤더에 <code>*</code> 표시)</li>
      <li>테스트 스텝 — Step No / Step / Test Data / Expected Result</li>
    </ul>

    <aside className="guide-callout info">
      현재 Export는 TC 구성 정보에 초점이 맞춰져 있으며, 실행 상태(Pass/Fail 등) · 실행자 · 실행 시각 · 코멘트 · 연결 이슈 정보는 Excel에 포함되지 않습니다. 향후 기능으로 확장될 수 있습니다.
    </aside>

    <h3>Failed Test Cases Export (별도 옵션)</h3>
    <p>상세 페이지에서는 실패한 TC만 모아 Export하는 기능도 제공됩니다. Total Fail Test Case 섹션 주변의 Export 버튼으로 실패 TC 목록만 별도 XLSX로 내보낼 수 있습니다.</p>

    <ScreenshotSlot label="Export 버튼" src={img04} />

    <hr />

    <h2>7. 리포트 활용 사례</h2>

    <h3>7-1. 일일 진행 보고</h3>
    <ul>
      <li>오전에 어제 진행률 확인 → Slack/Email로 공유</li>
      <li>매일 같은 형식으로 보고</li>
    </ul>

    <h3>7-2. 스프린트 종료 회고</h3>
    <ul>
      <li>스프린트 종료 시 전체 리포트 Export</li>
      <li>"이번 스프린트 결과: Pass 92%, Fail 5%, Block 3%"</li>
      <li>미해결 Issue 추적</li>
    </ul>

    <h3>7-3. QA 매니저 대시보드</h3>
    <ul>
      <li>여러 TP의 종합 통계</li>
      <li>가장 많이 실패하는 컴포넌트 식별</li>
      <li>팀원별 실행 부하 균형 확인</li>
    </ul>

    <h3>7-4. 릴리스 결정</h3>
    <ul>
      <li>"릴리스 게이트: Pass율 95% 이상"</li>
      <li>리포트로 게이트 통과 여부 판단</li>
    </ul>

    <h3>7-5. 외부 보고</h3>
    <ul>
      <li>고객사에 품질 증빙 자료 제출</li>
      <li>감사 기관에 테스트 수행 증빙</li>
    </ul>

    <hr />

    <h2>8. 리포트 해석 방법</h2>

    <h3>좋은 신호</h3>
    <ul>
      <li>Pass 비율이 90% 이상</li>
      <li>Fail 발견 → 빠르게 Issue 생성 → 빠르게 수정 → 재테스트 Pass</li>
      <li>Block과 Skip이 낮음 (5% 이하)</li>
      <li>모든 실행 항목이 실행됨 (Not Yet 0%)</li>
    </ul>

    <h3>경고 신호</h3>
    <ul>
      <li><strong>Pass율이 갑자기 떨어짐</strong>: 새 빌드의 회귀 발생 가능성</li>
      <li><strong>Block이 많음</strong>: 환경 문제 또는 사전 조건 미충족</li>
      <li><strong>Skip이 많음</strong>: 테스트 자원 부족 또는 일정 압박</li>
      <li><strong>Not Yet이 50% 이상</strong>: 진행이 너무 느림</li>
      <li><strong>특정 컴포넌트만 Fail이 집중</strong>: 해당 모듈 품질 문제</li>
    </ul>

    <h3>안티 패턴 (피해야 할 상태)</h3>
    <ul>
      <li>Fail을 Skip으로 변경해서 통계 왜곡</li>
      <li>Issue 생성 없이 Fail만 누적</li>
      <li>Block 사유 코멘트 없음</li>
      <li>같은 사람이 모든 실행 항목 실행 (검증 부족)</li>
    </ul>

    <hr />

    <h2>9. 자주 묻는 질문</h2>

    <h3>Q. 리포트 데이터는 실시간인가요?</h3>
    <p>A. 네. 실행 항목 상태가 변경되면 즉시 리포트 테이블에 반영됩니다. 별도 새로고침 없이도 다음 조회 시 최신 값이 표시됩니다.</p>

    <h3>Q. 과거 시점의 리포트를 조회할 수 있나요?</h3>
    <p>A. T-CAFE는 내부적으로 TP 일일 스냅샷을 저장하지만, 현재 UI에서는 특정 과거 날짜의 리포트를 직접 조회하는 기능은 제공하지 않습니다. 필요 시 해당 시점에 Export한 파일을 보관해 활용하는 것을 권장합니다.</p>

    <h3>Q. 여러 프로젝트의 리포트를 합칠 수 있나요?</h3>
    <p>A. 현재 버전에서는 프로젝트별로 분리되어 있습니다. 각 프로젝트에서 Excel로 Export한 뒤 외부 도구(Power BI, Excel 등)에서 통합하는 방식을 권장합니다.</p>

    <h3>Q. 리포트에 차트(파이/막대 등)가 포함되나요?</h3>
    <p>A. 현재 Test Reports는 <strong>테이블 기반 metrics 뷰</strong>만 제공하며, 파이·막대·선 차트 같은 그래픽 시각화는 제공하지 않습니다. Excel Export 파일에도 차트는 포함되지 않습니다. 시각적 공유가 필요하다면 화면 스크린샷을 활용하거나 Export 후 Excel에서 차트를 직접 생성하시면 됩니다.</p>

    <h3>Q. 리포트를 자동으로 이메일로 보낼 수 있나요?</h3>
    <p>A. 현재 버전에서는 수동 Export만 지원합니다. 자동 전송·스케줄링 기능은 제공하지 않습니다.</p>

    <hr />

    <h2>10. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>리포트가 비어 있음</td><td>TP가 없거나 필터가 적용 중</td><td>Clear 버튼으로 필터 초기화 또는 TP 생성/선택</td></tr>
        <tr><td>통계가 안 맞아 보임</td><td>페이지 캐시 또는 브라우저 오래 열어둠</td><td>새로고침 후 재조회</td></tr>
        <tr><td>Export to Excel 버튼이 안 보임</td><td>Reports Export 권한 없음</td><td>관리자에게 권한 요청 (기본적으로 모든 역할이 canViewReports 보유)</td></tr>
        <tr><td>Excel 파일에 실행 결과가 없음</td><td>정상 동작 — 현재 Export는 TC 메타데이터 중심</td><td>실행 상태는 화면의 테이블에서 확인 (향후 기능 확장 예정)</td></tr>
        <tr><td>Retestable Check 버튼이 비활성</td><td>Configuration 접근 권한 없음 (Admin/Team Admin 필요)</td><td>권한 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">11. 테스트 실행</Link></li>
      <li><Link to="/support/guide/import-export">09. Import / Export</Link> — 데이터 가져오기/내보내기</li>
      <li><Link to="/support/guide/overview-dashboard">03. Overview 대시보드</Link></li>
    </ul>
  </article>
);

const TestReportsEn = () => (
  <article className="guide-article">
    <h1>12. Test Reports</h1>
    <p className="guide-lead">
      Test Reports visualize and let you analyze the execution results of a TP. They support decision-making and quality reporting.
    </p>

    <hr />

    <h2>1. Opening Reports</h2>
    <p>Top tab → <strong>Test Reports</strong></p>

    <ScreenshotSlot label="Test Reports main screen" src={img01} />

    <hr />

    <h2>2. Permissions</h2>
    <table>
      <thead>
        <tr><th>Role</th><th className="center">View</th><th className="center">Export</th></tr>
      </thead>
      <tbody>
        <tr><td>Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Team Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>Tester</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
        <tr><td><strong>Developer</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
      </tbody>
    </table>
    <p>→ <strong>All roles can view and export reports</strong> (test results are shared transparently across the team).</p>

    <hr />

    <h2>3. Layout</h2>
    <h3>3-1. Test Reports Main (TP list)</h3>
    <p>When you enter the Test Reports tab, the project's TP list is shown. Each TP row shows Key / Name / Owner / Start Date / End Date / Progress / Status. Click a TP to navigate to its detailed report page.</p>

    <h3>3-2. TP Detail Report — View Types (3)</h3>
    <p>On the TP detail report, execution results are shown in a table format from three perspectives (View Types). Choose one via a radio button.</p>
    <ul>
      <li><strong>Folder View</strong> — aggregates by folders inside the TP. You can also restrict depth with <em>All Levels / Level 1 / Level 2 …</em></li>
      <li><strong>Component View</strong> — aggregates by the Components value of each TC (e.g., Frontend / Backend API …)</li>
      <li><strong>Tester View</strong> — aggregates by the last executor (the user who ran it)</li>
    </ul>

    <h3>3-3. Report Table Columns (common across Views)</h3>
    <p>Depending on the selected View, the first column becomes Folder Name / Component Name / User Name. The remaining metric columns are identical:</p>
    <ul>
      <li><strong>Total (A)</strong> — number of executed items overall</li>
      <li><strong>Execution Results</strong> — Pass / Fail / Block / Skip (labeled B / C / D / E)</li>
      <li><strong>Weekly Planned (F)</strong> — weekly planned count</li>
      <li><strong>Not Executed</strong> — <code>A - E - B - C - D</code></li>
      <li><strong>Total Execution Rate</strong> — <code>(B+C+D)/(A-E)×100</code></li>
      <li><strong>Planned Execution Rate</strong> — <code>(B+C+D)/F×100</code></li>
      <li><strong>Total Success Rate</strong> — <code>B/(A-E)×100</code></li>
      <li><strong>Execution Success Rate</strong> — <code>B/(B+C+D)×100</code></li>
    </ul>

    <h3>3-4. Retestable Test Cases Section</h3>
    <p>The detail page has a dedicated section that collects TCs whose linked Jira issue has reached a completed status and therefore need retesting. The <strong>Check Retestable</strong> button is available only to users with Admin / Team Admin permission, and the last check time (Retestable checked time) is displayed.</p>

    <hr />

    <h2>4. Visualization</h2>
    <p>Test Reports in T-CAFE provides information as a <strong>table-based metrics view</strong>. There are no separate chart UIs (pie / bar / line). Row background and text colors differ by Pass Rate threshold:</p>
    <ul>
      <li><strong>Pass Rate &gt; 80%</strong> — upper band (accent color)</li>
      <li><strong>Pass Rate &gt; 60%</strong> — middle band</li>
      <li><strong>Pass Rate &lt; 60%</strong> — warning band</li>
    </ul>
    <p>The per-state colors (Pass / Fail / Block / Skip / Not Yet) are applied consistently to status cells and progress bars in the table.</p>

    <ScreenshotSlot label="Report table" src={img02} />

    <hr />

    <h2>5. Report Filters (TP list)</h2>
    <p>The TP list on the Test Reports main screen has a search box and a filter panel. Multiple filters are combined with AND.</p>

    <h3>Search</h3>
    <ul>
      <li>Use the top search box to search by TP name / key</li>
    </ul>

    <h3>Filter Options (3)</h3>
    <ul>
      <li><strong>Status</strong> — TP status (Draft / Open / Completed, etc., based on the Plan Statuses defined in Configuration)</li>
      <li><strong>Owner</strong> — filter by TP owner</li>
      <li><strong>Progress</strong> — Not Started / In Progress / Completed (progress-rate bands)</li>
    </ul>
    <p>Reset everything with <strong>Reset</strong> at the top of the filter panel or <strong>Clear</strong> in the header.</p>

    <h3>Show / Hide Columns</h3>
    <ul>
      <li>Toggle Key / Name / Owner / Start Date / End Date / Progress / Status columns via the View Columns button</li>
    </ul>

    <aside className="guide-callout info">
      Filters by date range, priority, component, or Pass / Fail status are not provided on the TP list screen. Use the View Types (Folder / Component / Tester) on the TP detail report for execution-result analysis.
    </aside>

    <ScreenshotSlot label="Report filters" src={img03} />

    <hr />

    <h2>6. Exporting Reports</h2>

    <h3>Supported Format</h3>
    <ul>
      <li>Only <strong>Excel (XLSX)</strong> is supported. CSV / JSON export is not offered in Test Reports.</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Open the TP detail report</li>
      <li>Select the desired View Type (Folder / Component / Tester)</li>
      <li>Click the <strong>Export to Excel</strong> button at the top-right of the table</li>
      <li>The XLSX file downloads immediately (no extra format-select step)</li>
    </ol>

    <h3>Export Columns (based on TC metadata)</h3>
    <p>The downloaded Excel contains TC metadata from that TP, sorted by created date (newest first):</p>
    <ul>
      <li>Key, Name *, Description, Objective, Precondition</li>
      <li>Type (Single / Factor), Case Type, Priority, Owner</li>
      <li>Components, Labels, Folder, Folder Path</li>
      <li>Defined User Defined Fields (UDFs) — each field is added as a separate column (required fields are marked with <code>*</code> in the header)</li>
      <li>Test steps — Step No / Step / Test Data / Expected Result</li>
    </ul>

    <aside className="guide-callout info">
      The current Export focuses on TC composition information. Execution status (Pass / Fail, etc.), executor, execution time, comments, and linked issues are not included in the Excel. This may be expanded in future versions.
    </aside>

    <h3>Failed Test Cases Export (separate option)</h3>
    <p>The detail page also offers a feature to export only the failed TCs. Use the Export button near the Total Fail Test Case section to export only failed TCs as a separate XLSX.</p>

    <ScreenshotSlot label="Export button" src={img04} />

    <hr />

    <h2>7. Report Use Cases</h2>

    <h3>7-1. Daily Progress Report</h3>
    <ul>
      <li>Check yesterday's progress in the morning → share on Slack / email</li>
      <li>Report in the same format every day</li>
    </ul>

    <h3>7-2. Sprint Retrospective</h3>
    <ul>
      <li>Export the full report at the end of the sprint</li>
      <li>"This sprint: Pass 92%, Fail 5%, Block 3%"</li>
      <li>Track unresolved issues</li>
    </ul>

    <h3>7-3. QA Manager Dashboard</h3>
    <ul>
      <li>Aggregated stats across multiple TPs</li>
      <li>Identify the components that fail most often</li>
      <li>Balance per-member execution load</li>
    </ul>

    <h3>7-4. Release Decisions</h3>
    <ul>
      <li>"Release gate: Pass rate ≥ 95%"</li>
      <li>Use the report to decide whether the gate is met</li>
    </ul>

    <h3>7-5. External Reporting</h3>
    <ul>
      <li>Submit quality evidence to customers</li>
      <li>Provide audit evidence of testing performed</li>
    </ul>

    <hr />

    <h2>8. Reading a Report</h2>

    <h3>Positive Signals</h3>
    <ul>
      <li>Pass rate of 90% or higher</li>
      <li>Fail found → issue created quickly → fixed quickly → retest passes</li>
      <li>Block and Skip stay low (under 5%)</li>
      <li>All executable items have been executed (Not Yet at 0%)</li>
    </ul>

    <h3>Warning Signals</h3>
    <ul>
      <li><strong>Pass rate dropped suddenly</strong>: a regression in a new build is likely</li>
      <li><strong>Many Blocks</strong>: environment issues or unmet preconditions</li>
      <li><strong>Many Skips</strong>: resource shortage or schedule pressure</li>
      <li><strong>Not Yet over 50%</strong>: progress is too slow</li>
      <li><strong>Fails concentrated in a single component</strong>: module quality issue</li>
    </ul>

    <h3>Anti-Patterns (avoid)</h3>
    <ul>
      <li>Changing Fail to Skip to distort statistics</li>
      <li>Accumulating Fails without creating issues</li>
      <li>Block entries without a reason comment</li>
      <li>All execution items run by the same person (insufficient verification)</li>
    </ul>

    <hr />

    <h2>9. FAQ</h2>

    <h3>Q. Is report data real-time?</h3>
    <p>A. Yes. Changes to execution-item status are reflected in the report table immediately. The latest values appear on the next view without a manual refresh.</p>

    <h3>Q. Can I view historical reports for a past date?</h3>
    <p>A. T-CAFE internally stores daily snapshots of TPs, but the current UI does not provide a way to browse reports for a specific past date. If you need this, export the file at that point in time and keep it.</p>

    <h3>Q. Can I merge reports across projects?</h3>
    <p>A. The current version is project-scoped. We recommend exporting from each project to Excel and consolidating in an external tool (Power BI, Excel, etc.).</p>

    <h3>Q. Do reports include charts (pie / bar, etc.)?</h3>
    <p>A. Test Reports currently provides only a <strong>table-based metrics view</strong>, with no graphical visualizations like pie / bar / line charts. The exported Excel file does not include charts either. If you need visual sharing, use screenshots or create charts in Excel after exporting.</p>

    <h3>Q. Can reports be emailed automatically?</h3>
    <p>A. Only manual export is supported in the current version. Automatic sending / scheduling is not provided.</p>

    <hr />

    <h2>10. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>Report is empty</td><td>No TPs, or a filter is applied</td><td>Reset filters via Clear, or create / select a TP</td></tr>
        <tr><td>Stats look inconsistent</td><td>Page cache, or browser left open too long</td><td>Refresh and re-view</td></tr>
        <tr><td>Export to Excel button is not visible</td><td>No Reports Export permission</td><td>Ask an admin (by default, all roles have canViewReports)</td></tr>
        <tr><td>Excel file has no execution results</td><td>Intended — export currently focuses on TC metadata</td><td>View execution status in the on-screen table (expansion planned)</td></tr>
        <tr><td>Retestable Check button is disabled</td><td>No Configuration access permission (Admin / Team Admin required)</td><td>Check permissions</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">11. Test Execution</Link></li>
      <li><Link to="/support/guide/import-export">09. Import / Export</Link> — importing and exporting data</li>
      <li><Link to="/support/guide/overview-dashboard">03. Overview Dashboard</Link></li>
    </ul>
  </article>
);

export default { ko: <TestReports />, en: <TestReportsEn /> };
