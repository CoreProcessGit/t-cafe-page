import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/10-testplans/01.png';
import img02 from '../../assets/user_guide/10-testplans/02.png';
import img03 from '../../assets/user_guide/10-testplans/03.png';
import img04 from '../../assets/user_guide/10-testplans/04.png';

const TestPlans = () => (
  <article className="guide-article">
    <h1>10. 테스트 플랜 관리</h1>
    <p className="guide-lead">
      테스트 플랜(Test Plan, 이하 TP)은 특정 시점, 특정 목적으로 실행할 테스트 케이스들을 묶은 단위입니다. 스프린트, 릴리스, 회귀 테스트 등 다양한 용도로 사용합니다.
    </p>

    <hr />

    <h2>1. 테스트 플랜이란?</h2>
    <p><strong>TP는 "이번에 실행할 TC들의 묶음"</strong> 입니다.</p>

    <h3>TC vs TP</h3>
    <table>
      <thead>
        <tr><th>구분</th><th>Test Case (TC)</th><th>Test Plan (TP)</th></tr>
      </thead>
      <tbody>
        <tr><td>역할</td><td>무엇을 테스트할지 정의</td><td>언제, 어떻게 실행할지 묶음</td></tr>
        <tr><td>재사용</td><td>한 번 만들고 여러 TP에서 재사용</td><td>일회성 (스프린트마다 새로 생성)</td></tr>
        <tr><td>실행 결과</td><td>TC 자체에는 결과 없음</td><td>TP 안의 TC마다 Pass/Fail 기록</td></tr>
        <tr><td>라이프사이클</td><td>영구적</td><td>단기간 (스프린트, 릴리스 등)</td></tr>
      </tbody>
    </table>

    <h3>TP 사용 사례</h3>
    <ul>
      <li><strong>Sprint 1 통합 테스트</strong> — 스프린트 1에 새로 추가된 기능 검증</li>
      <li><strong>v1.5 릴리스 회귀 테스트</strong> — 1.5 릴리스 전 핵심 기능 회귀</li>
      <li><strong>월간 보안 점검</strong> — 매월 보안 관련 TC 일괄 실행</li>
      <li><strong>고객사 A 도입 검증</strong> — 특정 고객 환경 검증</li>
    </ul>

    <hr />

    <h2>2. TP의 주요 항목</h2>
    <table>
      <thead>
        <tr><th>항목</th><th>영문</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>이름</strong></td><td>Name</td><td>TP의 제목 (필수)</td></tr>
        <tr><td><strong>설명</strong></td><td>Description</td><td>TP 목적과 범위</td></tr>
        <tr><td><strong>소유자</strong></td><td>Owner</td><td>TP 책임자</td></tr>
        <tr><td><strong>시작일</strong></td><td>Start Date</td><td>테스트 시작 예정일</td></tr>
        <tr><td><strong>종료일</strong></td><td>End Date</td><td>테스트 종료 예정일</td></tr>
        <tr><td><strong>상태</strong></td><td>Status</td><td>Draft / Open / Completed (사용자 정의 상태 추가 가능)</td></tr>
        <tr><td><strong>TC 목록</strong></td><td>Test Cases</td><td>실행할 TC들</td></tr>
        <tr><td><strong>폴더 구조</strong></td><td>Folders</td><td>TP 내부에서 TC를 폴더로 정리</td></tr>
        <tr><td><strong>실행 통계</strong></td><td>Execution Status</td><td>Pass/Fail/Block/Skip/Not Yet 카운트</td></tr>
        <tr><td><strong>진행률</strong></td><td>Progress</td><td>0~100%</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>3. TP 조회</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → <strong>Test Plans</strong></p>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>상단</strong>: TP 목록 (이름, 상태, 진행률, 시작/종료일)</li>
      <li><strong>각 TP 클릭 시</strong>: TP 상세 페이지로 이동</li>
      <li><strong>상세 페이지</strong>: TP 안의 TC 목록 + 실행 결과</li>
    </ul>

    <ScreenshotSlot label="Test Plans 메인 화면" src={img01} />

    <h3>필터</h3>
    <ul>
      <li>상태별 (기본: Draft / Open / Completed, 사용자 정의 상태 포함)</li>
      <li>소유자별</li>
    </ul>

    <hr />

    <h2>4. TP 생성</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Plans 페이지에서 상단의 <strong>+ Create Test Plan</strong> 클릭</li>
      <li>모달에서 필수 항목 입력:
        <ul>
          <li>Name (필수)</li>
          <li>Description</li>
          <li>Status (필수, 기본값: Draft)</li>
          <li>Owner (필수)</li>
          <li>Start Date / End Date (필수, End Date는 Start Date 이후여야 함)</li>
        </ul>
      </li>
      <li>모달 하단의 <strong>Create</strong> 버튼 클릭</li>
    </ol>

    <ScreenshotSlot label="TP 생성 다이얼로그" src={img02} />

    <h3>자동 부여 항목</h3>
    <ul>
      <li><strong>TP 키</strong>: <code>{'<프로젝트키>-TP-<순번>'}</code> (예: <code>TCAFE-TP-1</code>) — 프로젝트 내 기존 plan_key 중 최대 순번 + 1로 자동 부여</li>
      <li><strong>총 TC 수</strong>: 0 (TC는 생성 후 별도 추가)</li>
      <li><strong>진행률</strong>: 0%</li>
    </ul>

    <hr />

    <h2>5. TP에 TC 추가</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Plans 목록에서 대상 TP 클릭 → TP 상세 페이지 진입</li>
      <li>상단의 <strong>Test Cases</strong> 탭 클릭 → TC 관리 페이지로 이동</li>
      <li>화면의 <strong>Add test cases</strong> 버튼 클릭 → TC 선택 모달 열림</li>
      <li>모달의 Test Case Repository에서 추가할 TC를 체크 (폴더 트리에서 폴더 단위 선택 또는 개별 TC 체크)</li>
      <li>화면의 <strong>Add to Plan</strong> 버튼으로 반영</li>
    </ol>

    <h3>TC 선택 방법</h3>
    <ul>
      <li><strong>폴더 트리에서 선택</strong>: 좌측 폴더 트리에서 폴더 선택 시 해당 폴더의 TC들이 한 번에 선택 대상으로 편입됩니다</li>
      <li><strong>개별 선택</strong>: 체크박스로 하나씩 선택</li>
      <li><strong>검색으로 선택</strong>: 상단 검색창(Key, Name)으로 필터링 후 선택</li>
      <li><strong>Factor TC</strong>도 동일하게 선택 가능</li>
    </ul>

    <ScreenshotSlot label="TC 추가 화면" src={img03} />

    <h3>추가 시 자동 처리</h3>
    <ul>
      <li>각 TC가 TP의 <strong>실행 항목</strong> 단위로 변환됨</li>
      <li>실행 항목 키가 자동 부여됨</li>
      <li>각 실행 항목의 초기 상태: Not Yet</li>
      <li>TC의 현재 상태(이름, 스텝 등)가 <strong>추가 시점 기준으로 보존</strong>됨</li>
    </ul>

    <h3>추가 시점 보존이란?</h3>
    <ul>
      <li>TP에 추가된 시점의 TC 상태를 그대로 복사하여 보존</li>
      <li>TC 원본이 나중에 수정되어도 TP의 실행 항목은 변경되지 않음</li>
      <li>실행 시점의 데이터가 보존됨 (감사 추적용)</li>
      <li>원본 TC와 다시 동기화하려면 수동으로 다시 추가해야 함</li>
    </ul>

    <hr />

    <h2>6. TP 폴더 구조</h2>
    <p>TP 내부에서도 폴더로 TC를 정리할 수 있습니다 (TP 폴더는 일반 TC 폴더와 별개).</p>

    <h3>자동 폴더 생성</h3>
    <ul>
      <li>TC를 TP에 추가할 때 원본 TC의 폴더 이름과 동일한 TP 폴더가 자동 생성됨</li>
      <li>예: TC가 "Login" 폴더에 있었다면 → TP 안에도 "Login" 폴더 생성</li>
    </ul>

    <h3>수동 폴더 관리</h3>
    <ol>
      <li>TP의 Test Cases 탭(실행 항목 관리 페이지)에서 <strong>New Folder</strong> 버튼 클릭 (또는 폴더 트리 빈 영역 우클릭 → <strong>New Folder</strong>)</li>
      <li>기본 이름 <code>New Folder</code>가 입력창에 채워진 상태로 생성 — 필요 시 즉시 이름을 변경해서 Enter</li>
      <li>실행 항목(TC)을 해당 폴더로 <strong>드래그 앤 드롭</strong>하거나, 항목 선택 후 상단 <strong>Move</strong> 버튼으로 이동</li>
    </ol>

    <ScreenshotSlot label="TP 폴더 구조" src={img04} />

    <hr />

    <h2>7. TP에서 TC 제거</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>TP의 Test Cases 탭에서 선택 모드 진입 (체크박스로 선택 활성화)</li>
      <li>제거할 실행 항목(TC)에 체크</li>
      <li>상단 액션 바의 <strong>Delete</strong> 버튼 클릭</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>실행 항목을 제거해도 <strong>원본 TC는 삭제되지 않습니다</strong> — TP의 TPTC 레코드만 제거됩니다</li>
      <li>같은 TC를 다시 TP에 추가할 수 있지만 기존 실행 결과는 돌아오지 않습니다</li>
      <li>해당 TPTC의 <strong>실행 결과 / 코멘트 / 연결된 이슈 정보는 함께 삭제</strong>됩니다</li>
    </ul>

    <hr />

    <h2>8. TP 복제 (Clone)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>매주 동일한 회귀 테스트를 새 TP로 만들 때</li>
      <li>이전 스프린트의 TP를 기반으로 다음 스프린트 만들기</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>Test Plans 목록에서 복제할 TP를 체크박스로 선택 (단일 또는 다중)</li>
      <li>상단의 <strong>Clone</strong> 버튼 클릭</li>
      <li>클릭 즉시 복제가 완료됩니다 (별도의 이름 입력/날짜 변경/확인 단계 없음)</li>
    </ol>

    <h3>복제되는 항목</h3>
    <ul>
      <li>기본 메타데이터 (Description, Owner, Start Date, End Date 등)</li>
      <li>이름은 자동으로 <code>원본명 (Copy)</code> 형태로 부여 (이미 존재하면 <code>(Copy 2)</code>, <code>(Copy 3)</code> … 순으로 증가)</li>
      <li>새 plan_key 자동 부여 (<code>{'<프로젝트키>-TP-<순번>'}</code>)</li>
    </ul>

    <h3>복제되지 않는 항목</h3>
    <ul>
      <li><strong>TP 안의 실행 항목(TPTC)은 복제되지 않습니다</strong> — 새 TP는 TC가 비어 있는 상태로 생성됨</li>
      <li>TP 내부 폴더 구조(Test Plan Folders)도 복제되지 않음</li>
      <li>실행 결과 / 코멘트 / 연결된 Issue (원본 TP에 있던 것들은 모두 제외)</li>
      <li>Progress, 실행 통계는 모두 0으로 초기화</li>
      <li>Status는 프로젝트의 기본 Plan Status로 재설정</li>
    </ul>

    <aside className="guide-callout info">
      복제본은 "빈 껍데기 TP"입니다. 필요한 TC를 Test Cases 탭에서 직접 다시 추가해야 합니다.
    </aside>

    <hr />

    <h2>9. TP 상태 (Status)</h2>
    <p>TP는 라이프사이클에 따라 상태가 변경됩니다.</p>

    <h3>기본 상태 (3종)</h3>
    <ul>
      <li><strong>Draft</strong> (초안) — 작성 중, 아직 실행 시작 안 함 (기본값)</li>
      <li><strong>Open</strong> (열림) — 실행 가능 상태</li>
      <li><strong>Completed</strong> (완료) — 모든 테스트 완료</li>
    </ul>

    <aside className="guide-callout">필요 시 "In Progress", "Closed" 등 사용자 정의 상태를 직접 추가할 수 있습니다 (아래 사용자 정의 상태 참고).</aside>

    <h3>사용자 정의 상태</h3>
    <p>Configuration → Plan Status에서 추가/수정 가능 (Admin / Team Admin)</p>
    <ul>
      <li>자세한 내용은 <Link to="/support/guide/configuration">13. Configuration</Link> 참고</li>
    </ul>

    <h3>상태 변경</h3>
    <ol>
      <li>TP 상세 페이지에서 우측 상단의 <strong>Edit</strong> 버튼 클릭 → 편집 모드 진입</li>
      <li>Status 드롭다운에서 새 상태 선택</li>
      <li>하단의 <strong>Save</strong> 버튼 클릭하여 확정 (Cancel 시 변경사항 폐기)</li>
    </ol>
    <aside className="guide-callout info">
      상태 변경은 자동 저장되지 않습니다. Edit → Save 흐름을 거쳐야 반영됩니다.
    </aside>

    <hr />

    <h2>10. TP 진행률 (Progress)</h2>
    <p>TP의 진행률은 자동으로 계산됩니다.</p>

    <h3>계산 공식</h3>
    <pre><code>{`진행률 = (Pass + Fail + Block) / (전체 실행 항목 - Skip) × 100`}</code></pre>
    <ul>
      <li><strong>분자</strong>에 포함: Pass · Fail · Block (실제로 실행된 항목)</li>
      <li><strong>분자/분모 모두 제외</strong>: Skip (테스트를 의도적으로 건너뛴 항목은 분모에서도 빠져 비율 왜곡을 방지)</li>
      <li><strong>분모</strong>: 전체 실행 항목 - Skip</li>
      <li>Not Yet은 아직 미진행으로 간주되어 분모에는 포함되지만 분자에 포함되지 않음</li>
      <li>전체가 모두 Skip이면 분모가 0이 되어 진행률은 0%로 표시</li>
    </ul>

    <h3>화면 표시</h3>
    <ul>
      <li>TP 목록에 진행률 막대 표시</li>
      <li>TP 상세 페이지 상단에 큰 진행률 게이지</li>
    </ul>

    <hr />

    <h2>11. TP 삭제</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Plans 목록에서 삭제할 TP를 체크박스로 선택 (단일 또는 다중)</li>
      <li>상단의 <strong>Delete</strong> 버튼 클릭</li>
      <li>확인 모달 <em>"Are you sure you want to delete N test plan(s)?"</em>에서 <strong>Confirm</strong> 클릭</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>TP 삭제 시 연결된 <strong>실행 항목(TPTC) / 실행 결과 / TP 폴더 / 실행 이력(execution history)</strong>이 모두 함께 삭제됩니다</li>
      <li>원본 TC는 영향받지 않습니다 (TP와 TC는 별개 테이블)</li>
      <li>삭제된 데이터는 <strong>복구할 수 없습니다</strong></li>
    </ul>

    <h3>권장 — 삭제 대신 상태 변경</h3>
    <ul>
      <li>이력을 보존할 가치가 있다면 Configuration에서 정의한 종료 상태(예: Completed / Closed 등)로 변경하는 것이 안전합니다</li>
      <li>종료 상태의 TP는 나중에 감사·회귀 분석 시 그대로 조회 가능합니다</li>
    </ul>

    <hr />

    <h2>12. 일반적인 TP 워크플로우</h2>

    <h3>시나리오: 스프린트 통합 테스트</h3>
    <pre><code>{`1. 스프린트 시작 (월요일)
 ├─ Admin이 "Sprint 1 - Integration Test" TP 생성 (+ Create Test Plan)
 ├─ 시작일: 월요일, 종료일: 금요일
 └─ 상태: Draft (기본값)

2. TC 추가 (월요일~화요일)
 ├─ TP 상세 → Test Cases 탭 → Add test cases 버튼
 ├─ 모달에서 필요한 TC / 폴더 선택 → Add to Plan
 └─ 필요 시 TP 내부 폴더(New Folder)로 정리

3. 실행 시작 (화요일)
 ├─ TP 상세에서 Edit → 상태를 Open으로 변경 → Save
 └─ Tester들에게 공유

4. 실행 중 (수요일~목요일)
 ├─ 각 실행 항목에서 상태(Pass/Fail/Block/Skip) 기록
 ├─ Fail 시 Jira Issue 생성 또는 연결
 └─ 진행률 자동 갱신

5. 완료 (금요일)
 ├─ Edit → 상태를 Completed로 변경 → Save
 ├─ 테스트 리포트 조회 및 공유
 └─ 미해결 Issue는 다음 스프린트로 이관`}</code></pre>

    <hr />

    <h2>13. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>+ Create Test Plan 버튼이 안 보임</td><td>권한 없음 (Admin / Team Admin 필요)</td><td>관리자에게 권한 요청</td></tr>
        <tr><td>Clone 후 TP에 TC가 하나도 없음</td><td>정상 동작 — Clone은 TP 껍데기(메타데이터)만 복제</td><td>Test Cases 탭에서 필요한 TC 다시 추가</td></tr>
        <tr><td>상태 드롭다운에서 값이 바뀌지 않음</td><td>Edit 모드가 아님</td><td>우측 상단 <strong>Edit</strong> → 값 변경 → <strong>Save</strong></td></tr>
        <tr><td>진행률이 갱신 안 됨</td><td>페이지 캐시</td><td>새로고침</td></tr>
        <tr><td>원본 TC를 수정했는데 실행 항목이 안 바뀜</td><td>정상 동작 — TP 추가 시점의 TC 스냅샷이 보존됨</td><td>실행 항목을 Delete 후 최신 원본 TC로 재추가</td></tr>
        <tr><td>Skip만 있는데 진행률이 0%</td><td>정상 동작 — Skip은 분모에서도 제외되어 실행된 항목이 없으면 0%</td><td>Pass/Fail/Block 중 하나라도 기록하면 반영됨</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>14. 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>명확한 이름</strong>: "Sprint 1", "v2.5 Regression"처럼 식별 가능</li>
      <li><strong>시작/종료일 설정</strong>: 일정 추적에 필수</li>
      <li><strong>소규모 TP</strong>: 50~200개 실행 항목이 관리하기 좋음</li>
      <li><strong>폴더로 정리</strong>: 큰 TP는 폴더로 그룹화</li>
      <li><strong>상태 관리</strong>: Draft → Open → Completed 흐름 유지 (또는 사용자 정의 상태 활용)</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>한 TP에 1000+ TC 몰아넣기</li>
      <li>이름 없는 TP ("Test Plan 1")</li>
      <li>끝나도 Closed 처리 안 하기</li>
      <li>실행 항목 중복 추가 (같은 TC를 여러 번)</li>
      <li>TP를 영구 보관용으로 쓰기 (TP는 일회성)</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">11. 테스트 실행</Link> — 실행 항목 실행과 결과 기록</li>
      <li><Link to="/support/guide/test-reports">12. 테스트 리포트</Link> — TP 결과 리포트 생성</li>
      <li><Link to="/support/guide/configuration">13. Configuration</Link> → Plan Status 사용자 정의</li>
    </ul>
  </article>
);

const TestPlansEn = () => (
  <article className="guide-article">
    <h1>10. Test Plan Management</h1>
    <p className="guide-lead">
      A Test Plan (TP) is a grouping of test cases that will be executed at a specific point in time for a specific purpose. It is used for sprints, releases, regression testing, and more.
    </p>

    <hr />

    <h2>1. What is a Test Plan?</h2>
    <p><strong>A TP is "a bundle of TCs to execute in this round"</strong>.</p>

    <h3>TC vs TP</h3>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Test Case (TC)</th><th>Test Plan (TP)</th></tr>
      </thead>
      <tbody>
        <tr><td>Role</td><td>Defines what to test</td><td>Bundles when and how to execute</td></tr>
        <tr><td>Reuse</td><td>Created once and reused across many TPs</td><td>One-off (a new one per sprint)</td></tr>
        <tr><td>Execution result</td><td>No result on the TC itself</td><td>Pass/Fail recorded per TC inside the TP</td></tr>
        <tr><td>Lifecycle</td><td>Permanent</td><td>Short-term (sprint, release, etc.)</td></tr>
      </tbody>
    </table>

    <h3>TP Use Cases</h3>
    <ul>
      <li><strong>Sprint 1 Integration Test</strong> — verify the features added in Sprint 1</li>
      <li><strong>v1.5 release regression</strong> — regress key features before the v1.5 release</li>
      <li><strong>Monthly security sweep</strong> — run security-related TCs once a month</li>
      <li><strong>Validation for customer A</strong> — verify a specific customer environment</li>
    </ul>

    <hr />

    <h2>2. Key TP Fields</h2>
    <table>
      <thead>
        <tr><th>Field</th><th>Key</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Name</strong></td><td>Name</td><td>TP title (required)</td></tr>
        <tr><td><strong>Description</strong></td><td>Description</td><td>Purpose and scope of the TP</td></tr>
        <tr><td><strong>Owner</strong></td><td>Owner</td><td>Owner of the TP</td></tr>
        <tr><td><strong>Start Date</strong></td><td>Start Date</td><td>Scheduled test start date</td></tr>
        <tr><td><strong>End Date</strong></td><td>End Date</td><td>Scheduled test end date</td></tr>
        <tr><td><strong>Status</strong></td><td>Status</td><td>Draft / Open / Completed (custom statuses can be added)</td></tr>
        <tr><td><strong>TC list</strong></td><td>Test Cases</td><td>TCs to execute</td></tr>
        <tr><td><strong>Folder structure</strong></td><td>Folders</td><td>Organize TCs into folders inside the TP</td></tr>
        <tr><td><strong>Execution stats</strong></td><td>Execution Status</td><td>Pass / Fail / Block / Skip / Not Yet counts</td></tr>
        <tr><td><strong>Progress</strong></td><td>Progress</td><td>0–100%</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>3. Viewing TPs</h2>

    <h3>Navigation</h3>
    <p>Top tab → <strong>Test Plans</strong></p>

    <h3>Layout</h3>
    <ul>
      <li><strong>Top</strong>: TP list (name, status, progress, start / end date)</li>
      <li><strong>Click a TP</strong>: navigates to the TP detail page</li>
      <li><strong>Detail page</strong>: TC list inside the TP + execution results</li>
    </ul>

    <ScreenshotSlot label="Test Plans main screen" src={img01} />

    <h3>Filters</h3>
    <ul>
      <li>By status (default: Draft / Open / Completed, plus custom statuses)</li>
      <li>By owner</li>
    </ul>

    <hr />

    <h2>4. Creating a TP</h2>
    <aside className="guide-callout"><strong>Permission required</strong>: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>On the Test Plans page, click <strong>+ Create Test Plan</strong> at the top</li>
      <li>Fill in the required fields in the dialog:
        <ul>
          <li>Name (required)</li>
          <li>Description</li>
          <li>Status (required, default: Draft)</li>
          <li>Owner (required)</li>
          <li>Start Date / End Date (required; End Date must be after Start Date)</li>
        </ul>
      </li>
      <li>Click the <strong>Create</strong> button at the bottom of the dialog</li>
    </ol>

    <ScreenshotSlot label="TP creation dialog" src={img02} />

    <h3>Auto-assigned Fields</h3>
    <ul>
      <li><strong>TP key</strong>: <code>{'<project-key>-TP-<sequence>'}</code> (e.g., <code>TCAFE-TP-1</code>) — assigned automatically as (max of existing plan_key in the project) + 1</li>
      <li><strong>Total TCs</strong>: 0 (TCs are added separately after creation)</li>
      <li><strong>Progress</strong>: 0%</li>
    </ul>

    <hr />

    <h2>5. Adding TCs to a TP</h2>
    <aside className="guide-callout"><strong>Permission required</strong>: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>In the Test Plans list, click the target TP → open the TP detail page</li>
      <li>Click the <strong>Test Cases</strong> tab at the top → go to the TC management page</li>
      <li>Click the <strong>Add test cases</strong> button → the TC picker modal opens</li>
      <li>In the modal's Test Case Repository, check the TCs to add (select by folder in the folder tree, or check individual TCs)</li>
      <li>Confirm with the <strong>Add to Plan</strong> button</li>
    </ol>

    <h3>Selection Options</h3>
    <ul>
      <li><strong>Select in the folder tree</strong>: selecting a folder in the left tree includes its TCs in the selection</li>
      <li><strong>Individual selection</strong>: check one at a time with checkboxes</li>
      <li><strong>Search</strong>: use the top search box (Key, Name) to filter and then select</li>
      <li><strong>Factor TCs</strong> can be selected the same way</li>
    </ul>

    <ScreenshotSlot label="Add TC screen" src={img03} />

    <h3>Automatic Processing on Add</h3>
    <ul>
      <li>Each TC is converted into a TP <strong>execution item</strong></li>
      <li>An execution-item key is auto-assigned</li>
      <li>Initial status of each execution item: Not Yet</li>
      <li>The TC's current state (name, steps, etc.) is <strong>preserved at the moment of addition</strong></li>
    </ul>

    <h3>What "preserved at the moment of addition" means</h3>
    <ul>
      <li>The TC state at the time of addition is copied and preserved as-is</li>
      <li>If the source TC is edited later, the TP's execution item does not change</li>
      <li>The data at execution time is preserved (for audit trails)</li>
      <li>To re-sync with the source TC, remove and re-add manually</li>
    </ul>

    <hr />

    <h2>6. TP Folder Structure</h2>
    <p>You can also organize TCs into folders inside a TP (TP folders are separate from regular TC folders).</p>

    <h3>Automatic Folder Creation</h3>
    <ul>
      <li>When a TC is added to a TP, a TP folder with the same name as the source TC's folder is auto-created</li>
      <li>e.g., if the TC was in the "Login" folder → a "Login" folder is created inside the TP</li>
    </ul>

    <h3>Manual Folder Management</h3>
    <ol>
      <li>On the TP's Test Cases tab (execution-item management page), click <strong>New Folder</strong> (or right-click an empty area in the folder tree → <strong>New Folder</strong>)</li>
      <li>A default name <code>New Folder</code> is pre-filled in the input — change it on the spot and press Enter if needed</li>
      <li><strong>Drag and drop</strong> execution items (TCs) into the folder, or select items and use the <strong>Move</strong> button at the top</li>
    </ol>

    <ScreenshotSlot label="TP folder structure" src={img04} />

    <hr />

    <h2>7. Removing TCs from a TP</h2>
    <aside className="guide-callout"><strong>Permission required</strong>: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>On the TP's Test Cases tab, enter selection mode (enable checkboxes)</li>
      <li>Check the execution items (TCs) to remove</li>
      <li>Click the <strong>Delete</strong> button in the top action bar</li>
    </ol>

    <h3>Notes</h3>
    <ul>
      <li>Removing an execution item does <strong>not delete the source TC</strong> — only the TP's TPTC record is removed</li>
      <li>You can add the same TC to the TP again, but previous execution results are not restored</li>
      <li>The <strong>execution result, comments, and linked issues of that TPTC are deleted together</strong></li>
    </ul>

    <hr />

    <h2>8. Cloning a TP</h2>
    <aside className="guide-callout"><strong>Permission required</strong>: Admin or Team Admin</aside>

    <h3>Use Cases</h3>
    <ul>
      <li>Create a new TP for the same regression run every week</li>
      <li>Build the next sprint's TP based on the previous sprint's TP</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Select the TP(s) to clone with checkboxes in the Test Plans list (single or multiple)</li>
      <li>Click the <strong>Clone</strong> button at the top</li>
      <li>The clone is completed immediately on click (no name-input / date-change / confirmation step)</li>
    </ol>

    <h3>What Gets Cloned</h3>
    <ul>
      <li>Basic metadata (Description, Owner, Start Date, End Date, etc.)</li>
      <li>The name is automatically assigned as <code>&lt;original&gt; (Copy)</code> (if it already exists, <code>(Copy 2)</code>, <code>(Copy 3)</code> …)</li>
      <li>A new plan_key is auto-assigned (<code>{'<project-key>-TP-<sequence>'}</code>)</li>
    </ul>

    <h3>What Is NOT Cloned</h3>
    <ul>
      <li><strong>Execution items (TPTC) inside the TP are NOT cloned</strong> — the new TP is created with an empty TC list</li>
      <li>TP-internal folder structure (Test Plan Folders) is NOT cloned either</li>
      <li>Execution results / comments / linked issues (all items from the original TP are excluded)</li>
      <li>Progress and execution stats are reset to 0</li>
      <li>Status is reset to the project's default Plan Status</li>
    </ul>

    <aside className="guide-callout info">
      A clone is an "empty shell TP". Re-add the TCs you need on the Test Cases tab.
    </aside>

    <hr />

    <h2>9. TP Status</h2>
    <p>TP status changes along its lifecycle.</p>

    <h3>Default Statuses (3)</h3>
    <ul>
      <li><strong>Draft</strong> — being authored, execution not yet started (default)</li>
      <li><strong>Open</strong> — ready for execution</li>
      <li><strong>Completed</strong> — all tests complete</li>
    </ul>

    <aside className="guide-callout">Add custom statuses like "In Progress" or "Closed" as needed (see Custom Statuses below).</aside>

    <h3>Custom Statuses</h3>
    <p>Add / modify in Configuration → Plan Status (Admin / Team Admin).</p>
    <ul>
      <li>See <Link to="/support/guide/configuration">13. Configuration</Link> for details</li>
    </ul>

    <h3>Changing Status</h3>
    <ol>
      <li>On the TP detail page, click the <strong>Edit</strong> button at the top-right → enter edit mode</li>
      <li>Choose a new status from the Status dropdown</li>
      <li>Click <strong>Save</strong> at the bottom to commit (Cancel discards changes)</li>
    </ol>
    <aside className="guide-callout info">
      Status changes are not saved automatically. You must go through Edit → Save for the change to take effect.
    </aside>

    <hr />

    <h2>10. TP Progress</h2>
    <p>TP progress is calculated automatically.</p>

    <h3>Formula</h3>
    <pre><code>{`Progress = (Pass + Fail + Block) / (total execution items - Skip) × 100`}</code></pre>
    <ul>
      <li><strong>Numerator</strong>: Pass · Fail · Block (items that have actually been executed)</li>
      <li><strong>Excluded from both numerator and denominator</strong>: Skip (deliberately skipped items are excluded from the denominator to avoid skewing the ratio)</li>
      <li><strong>Denominator</strong>: total execution items − Skip</li>
      <li>Not Yet is treated as not-yet-executed, so it is included in the denominator but not in the numerator</li>
      <li>If everything is Skip, the denominator is 0 and Progress is shown as 0%</li>
    </ul>

    <h3>UI</h3>
    <ul>
      <li>Progress bar shown on the TP list</li>
      <li>Large progress gauge at the top of the TP detail page</li>
    </ul>

    <hr />

    <h2>11. Deleting a TP</h2>
    <aside className="guide-callout"><strong>Permission required</strong>: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Select the TP(s) to delete with checkboxes in the Test Plans list (single or multiple)</li>
      <li>Click the <strong>Delete</strong> button at the top</li>
      <li>Click <strong>Confirm</strong> in the confirmation modal <em>"Are you sure you want to delete N test plan(s)?"</em></li>
    </ol>

    <h3>Notes</h3>
    <ul>
      <li>When a TP is deleted, its linked <strong>execution items (TPTC), execution results, TP folders, and execution history</strong> are all deleted together</li>
      <li>Source TCs are unaffected (TPs and TCs are separate tables)</li>
      <li>Deleted data <strong>cannot be recovered</strong></li>
    </ul>

    <h3>Recommendation — change status instead of deleting</h3>
    <ul>
      <li>If the history is worth keeping, it is safer to change to an end-state status defined in Configuration (e.g., Completed / Closed)</li>
      <li>TPs in end states remain viewable later for audit / regression analysis</li>
    </ul>

    <hr />

    <h2>12. Common TP Workflow</h2>

    <h3>Scenario: Sprint Integration Test</h3>
    <pre><code>{`1. Sprint starts (Monday)
 ├─ Admin creates "Sprint 1 - Integration Test" TP (+ Create Test Plan)
 ├─ Start date: Monday, End date: Friday
 └─ Status: Draft (default)

2. Add TCs (Monday ~ Tuesday)
 ├─ TP detail → Test Cases tab → Add test cases button
 ├─ Pick the TCs / folders you need in the modal → Add to Plan
 └─ Organize into TP folders (New Folder) as needed

3. Start execution (Tuesday)
 ├─ On the TP detail, Edit → change status to Open → Save
 └─ Share with testers

4. In progress (Wednesday ~ Thursday)
 ├─ Record status (Pass / Fail / Block / Skip) on each execution item
 ├─ On Fail, create or link a Jira issue
 └─ Progress updates automatically

5. Completion (Friday)
 ├─ Edit → change status to Completed → Save
 ├─ View and share the Test Report
 └─ Move any unresolved issues to the next sprint`}</code></pre>

    <hr />

    <h2>13. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>+ Create Test Plan button is not visible</td><td>No permission (Admin / Team Admin required)</td><td>Ask an admin for permission</td></tr>
        <tr><td>After Clone, the TP has no TCs</td><td>Intended — Clone copies only the TP shell (metadata)</td><td>Re-add the TCs you need on the Test Cases tab</td></tr>
        <tr><td>Value in the status dropdown doesn't change</td><td>Not in Edit mode</td><td>Click <strong>Edit</strong> at the top-right → change value → <strong>Save</strong></td></tr>
        <tr><td>Progress does not refresh</td><td>Page cache</td><td>Refresh</td></tr>
        <tr><td>Edited the source TC but the execution item didn't change</td><td>Intended — the TP preserves the snapshot at the time of addition</td><td>Delete the execution item and re-add it from the latest source TC</td></tr>
        <tr><td>All Skip but progress is 0%</td><td>Intended — Skip is excluded from the denominator, so 0% when nothing is executed</td><td>Progress updates once any Pass / Fail / Block is recorded</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>14. Best Practices</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>Clear names</strong>: "Sprint 1", "v2.5 Regression" — easy to identify</li>
      <li><strong>Set start / end dates</strong>: essential for schedule tracking</li>
      <li><strong>Smaller TPs</strong>: 50–200 execution items is manageable</li>
      <li><strong>Use folders</strong>: group large TPs into folders</li>
      <li><strong>Status management</strong>: keep the Draft → Open → Completed flow (or use custom statuses)</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>Cram 1000+ TCs into one TP</li>
      <li>Unnamed TPs ("Test Plan 1")</li>
      <li>Forgetting to close TPs after they end</li>
      <li>Adding the same TC to a TP multiple times</li>
      <li>Using TPs as permanent storage (TPs are one-off)</li>
    </ul>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">11. Test Execution</Link> — running items and recording results</li>
      <li><Link to="/support/guide/test-reports">12. Test Reports</Link> — generating TP result reports</li>
      <li><Link to="/support/guide/configuration">13. Configuration</Link> → customizing Plan Status</li>
    </ul>
  </article>
);

export default { ko: <TestPlans />, en: <TestPlansEn /> };
