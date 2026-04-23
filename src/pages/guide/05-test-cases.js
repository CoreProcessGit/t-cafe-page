import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/05-testcases/01.png';
import img02 from '../../assets/user_guide/05-testcases/02.png';

const TestCases = () => (
  <article className="guide-article">
    <h1>05. 테스트 케이스 기본 사용법</h1>
    <p className="guide-lead">
      테스트 케이스(Test Case, 이하 TC)는 T-CAFE의 가장 기본 단위입니다. 본 페이지에서는 TC의 생성, 조회, 수정, 삭제 방법을 안내합니다.
    </p>

    <hr />

    <h2>1. 테스트 케이스란?</h2>
    <p>테스트 케이스는 특정 기능이나 시나리오를 검증하기 위한 단위 테스트 명세입니다. 다음 정보를 포함합니다:</p>
    <ul>
      <li>이름 (Name): TC의 제목</li>
      <li>설명 (Description): TC가 무엇을 검증하는지</li>
      <li>사전 조건 (Precondition): 테스트 실행 전 갖춰져야 할 조건</li>
      <li>테스트 스텝 (Test Steps): 실제 수행할 단계와 기대 결과</li>
      <li>우선순위 (Priority): Configuration → Priorities에서 자유롭게 정의 (기본 샘플: Critical / High / Medium / Low)</li>
      <li>케이스 타입 (Case Type): Configuration → Case Type에서 자유롭게 정의 (기본 샘플: Function / Performance / Regression / Security)</li>
      <li>TC 상태 (TC Status): Draft / Confirmed 중 하나 (기본값 Draft, Confirmed 만 Test Plan 에 추가 가능)</li>
      <li>컴포넌트 (Components): Configuration → Components에서 자유롭게 정의 (기본 샘플: Frontend / Backend API / Database / Authentication / Payment), 다중 선택 가능</li>
      <li>라벨 (Labels): 자유 태그</li>
      <li>소유자 (Owner): TC 작성자</li>
    </ul>

    <hr />

    <h2>2. TC 종류</h2>
    <p>T-CAFE는 두 가지 TC 타입을 지원합니다:</p>

    <h3>Single Test Case</h3>
    <ul>
      <li>일반적인 단일 테스트 케이스</li>
      <li>하나의 시나리오를 검증</li>
      <li>가장 많이 사용되는 형식</li>
    </ul>

    <h3>Factor Combination Test Case</h3>
    <ul>
      <li>Factor Combination 기능으로 자동 생성된 TC</li>
      <li>여러 변수의 조합을 검증</li>
      <li>상세 내용은 <Link to="/support/guide/factor-combination">08. Factor Combination</Link> 참고</li>
    </ul>

    <hr />

    <h2>2-1. TC Status (상태)</h2>
    <p>모든 TC 는 두 가지 상태 중 하나를 가집니다:</p>
    <ul>
      <li>Draft — 작성 중 / 검토 전. TC 생성 시 기본값.</li>
      <li>Confirmed — 검토 완료 / 실행 가능. Test Plan 에 추가 가능한 유일한 상태.</li>
    </ul>
    <p>상태 변경은 TC 편집 화면에서 TC Status 드롭다운으로 전환합니다.</p>
    <aside className="guide-callout info">
      Test Plan 의 "TC 추가" 목록에는 Confirmed TC 만 표시됩니다. Draft TC 를 TP 에 넣으려면 먼저 편집 화면에서 Confirmed 로 변경하세요.
    </aside>

    <hr />

    <h2>3. TC 조회</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → Test Cases</p>

    <h3>화면 구성</h3>
    <ul>
      <li>좌측: 폴더 트리 (TC가 폴더별로 정리됨, 좌측 메뉴 폭 조절 가능)</li>
      <li>우측: TC 목록 (테이블 형식, 선택한 폴더의 TC 표시)</li>
    </ul>

    <ScreenshotSlot label="Test Cases 메인 화면" src={img01} />

    <h3>TC 상세 보기 / 편집</h3>
    <ul>
      <li>목록에서 TC의 Key 또는 이름을 클릭하면 별도의 TC 상세/편집 페이지로 이동합니다</li>
      <li>TC 타입에 따라 화면이 다릅니다: Single TC는 편집 페이지, Factor TC는 Factor Combination 상세 페이지로 이동</li>
      <li>목록으로 돌아오면 이전 스크롤 위치와 표시 개수가 유지됩니다</li>
    </ul>

    <h3>표시 컬럼</h3>
    <p>기본적으로 다음 컬럼이 표시됩니다:</p>
    <ul>
      <li>TC Key (예: <code>PROJ-1</code>, <code>PROJ-2</code>)</li>
      <li>이름 (Name)</li>
      <li>타입 (Type) — Single(S) / Factor(F) 배지</li>
      <li>TC Status — Draft / Confirmed 배지</li>
      <li>컴포넌트 (Components)</li>
      <li>라벨 (Labels)</li>
      <li>소유자 (Owner)</li>
      <li>케이스 타입 (Case Type)</li>
      <li>우선순위 (Priority)</li>
      <li>생성일 (Created)</li>
      <li>수정일 (Updated)</li>
    </ul>

    <h3>생성일 / 수정일 표시 방식</h3>
    <ul>
      <li>셀에는 날짜만 표시됩니다</li>
      <li>마우스를 올리면 날짜 + 시간이 툴팁으로 표시됩니다</li>
    </ul>

    <h3>컬럼 표시/숨기기</h3>
    <ul>
      <li>우상단 컬럼 설정 버튼으로 표시할 컬럼을 선택할 수 있습니다</li>
      <li>사용자 정의 필드(UDF)도 동일한 메뉴에서 토글 가능합니다</li>
      <li>설정은 프로젝트별, 사용자별로 저장됩니다</li>
    </ul>

    <h3>검색과 필터</h3>
    <ul>
      <li>검색창: TC 이름, 키, 설명으로 검색</li>
      <li>필터: 폴더, 우선순위, 케이스 타입, 컴포넌트, 라벨, 소유자별 필터링</li>
    </ul>

    <hr />

    <h2>4. TC 생성 (Single)</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Cases 페이지에서 TC를 생성할 폴더 선택</li>
      <li>상단의 + Create Test Case 버튼 클릭</li>
      <li>드롭다운 메뉴에서 Single 또는 Factor Combination 선택</li>
      <li>선택한 유형의 TC 작성 화면이 열림</li>
    </ol>
    <aside className="guide-callout info">
      본 페이지(05)에서는 Single 생성을 다룹니다. Factor Combination 생성은 <Link to="/support/guide/factor-combination">08. Factor Combination</Link>에서 설명합니다.
    </aside>

    <ScreenshotSlot label="TC 생성 버튼" src={img02} />

    <h3>입력 항목</h3>
    <p>TC 작성 화면은 상단 고정 입력과 3개의 접이식 섹션(Detail / User Defined Field / Test Steps)으로 구성됩니다. 실제 화면 순서대로 안내합니다.</p>

    <h4>상단 고정 입력</h4>
    <ol>
      <li>Folder — TC를 배치할 폴더 선택 (목록에서 선택한 폴더가 기본값)</li>
      <li>Name (필수) — TC 제목</li>
      <li>Description — TC가 무엇을 검증하는지 설명</li>
      <li>Precondition (사전 조건) — 테스트 실행 전 갖춰져야 할 조건</li>
    </ol>

    <h4>"Detail" 섹션 (펼쳐서 입력)</h4>
    <ol>
      <li>Priority — Configuration → Priorities에서 정의된 항목 중 선택</li>
      <li>Case Type — Configuration → Case Types에서 정의된 항목 중 선택</li>
      <li>TC Status — Draft 또는 Confirmed 선택 (기본값 Draft). Confirmed 로 저장해야 Test Plan 에 추가 가능</li>
      <li>Owner — 프로젝트 멤버 중에서 소유자 선택 (드롭다운)</li>
      <li>Components — Configuration → Components에서 정의된 항목 중 선택</li>
      <li>Labels — 자유 입력 (Jira 라벨과 별개). 기존 입력된 라벨은 자동완성 제안됨</li>
    </ol>

    <h4>"User Defined Field" 섹션 (펼쳐서 입력)</h4>
    <ul>
      <li>Configuration → User Defined Fields에서 정의된 필드가 모두 표시됨</li>
      <li>필드 타입(텍스트, 숫자, 드롭다운, 체크박스, 날짜, URL 등)에 맞는 입력 UI가 표시됨</li>
      <li>Configuration에서 필수 (*)로 지정된 필드는 반드시 입력해야 저장 가능</li>
      <li>정의된 UDF가 없으면 "No user defined fields" 메시지 표시</li>
    </ul>

    <h4>"Test Steps" 섹션 (펼쳐서 입력)</h4>
    <ul>
      <li>Step / Test Data / Expected Result 3개 컬럼의 테이블 형식</li>
      <li>행 추가/삭제, 드래그 앤 드롭으로 순서 변경 가능</li>
      <li>자세한 작성법은 <Link to="/support/guide/test-cases-steps">07. 테스트 스텝 작성</Link></li>
    </ul>

    <h3>저장</h3>
    <ul>
      <li>Create 버튼: 새 TC가 자동으로 키(예: <code>PROJ-1</code>)를 부여받고 저장됨</li>
      <li>Cancel: 작성 취소</li>
    </ul>

    <h3>TC 키 (Test Case Key)</h3>
    <ul>
      <li>형식: <code>{'<프로젝트키>-<순번>'}</code> (예: <code>TCAFE-1</code>, <code>TCAFE-2</code>)</li>
      <li>자동 부여, 변경 불가</li>
      <li>프로젝트 내에서 유일</li>
    </ul>

    <hr />

    <h2>5. TC 수정</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Cases 목록에서 수정할 TC 클릭</li>
      <li>우측 또는 하단의 Edit 버튼 클릭</li>
      <li>항목 수정 후 Update</li>
    </ol>

    <h3>수정 가능한 항목</h3>
    <ul>
      <li>TC 키와 생성일 외 모든 항목</li>
    </ul>

    <h3>수정 이력</h3>
    <ul>
      <li>수정 시 수정일(updated_at)이 자동 갱신되며, 목록의 "수정일" 컬럼에 반영됩니다</li>
      <li>생성일(created_at)은 TC 최초 생성 시점으로 고정되며 변경되지 않습니다</li>
    </ul>

    <hr />

    <h2>6. TC 삭제</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>삭제할 TC 선택 (단일 또는 다중)</li>
      <li>Delete 버튼 클릭</li>
      <li>확인 다이얼로그에서 Confirm 클릭</li>
    </ol>

    <h3>다중 삭제</h3>
    <ul>
      <li>체크박스로 여러 TC를 선택한 후 한 번에 삭제 가능</li>
    </ul>

    <h3>주의 사항</h3>
    <ul>
      <li>삭제된 TC는 복구할 수 없습니다</li>
      <li>
        TP(Test Plan)에 이미 추가된 TC는 TP에서 그대로 유지됩니다.
        TP에 추가되는 시점에 TC의 스냅샷(이름, 스텝, Precondition 등)이 TP 내부에 복사되어 저장되므로, 원본 TC를 삭제해도 TP 내 실행 기록과 데이터는 영향을 받지 않습니다.
      </li>
      <li>Factor Combination으로 생성된 TC를 삭제하면 해당 Factor 정의는 유지됩니다</li>
    </ul>

    <hr />

    <h2>7. TC 복제 (Clone)</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>비슷한 TC를 빠르게 만들 때</li>
      <li>템플릿 TC를 기반으로 변형 만들기</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 TC 선택</li>
      <li>Clone 버튼 클릭</li>
      <li>원본과 동일한 폴더에 자동으로 복제됨 (원본 이름 뒤에 <code> (Copy)</code> 접미사 추가, 새 키 자동 부여)</li>
    </ol>

    <h3>복제되는 항목</h3>
    <ul>
      <li>해당 TC의 모든 내용 (이름·설명·우선순위·케이스 타입·소유자·컴포넌트·라벨·사전조건·테스트 스텝·사용자 정의 필드 등)</li>
    </ul>

    <hr />

    <h2>8. TC 이동 (Move)</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>이동할 TC 선택 (단일 또는 다중)</li>
      <li>상단의 Move 버튼 클릭</li>
      <li>폴더 선택 창에서 원하는 폴더를 선택하여 이동</li>
    </ol>

    <hr />

    <h2>9. TC 데이터 보호</h2>
    <p>T-CAFE는 사용자의 민감한 테스트 데이터(테스트 스텝, 사전 조건)를 안전하게 보호하여 저장합니다. 별도 설정 없이 자동으로 처리됩니다.</p>

    <hr />

    <h2>10. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr>
          <th>문제</th>
          <th>원인</th>
          <th>해결</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Create Test Case 버튼이 보이지 않음</td><td>Admin/Team Admin 권한 없음</td><td>관리자에게 권한 요청</td></tr>
        <tr><td>TC가 목록에 보이지 않음</td><td>폴더 미선택 또는 필터 적용 중</td><td>필터 초기화, 모든 폴더 선택</td></tr>
        <tr><td>TC 키가 중복됨</td><td>시스템 오류 (드물게 발생)</td><td>페이지 새로고침</td></tr>
        <tr><td>저장 실패</td><td>필수 항목(이름) 누락</td><td>모든 빨간 별표(*) 항목 입력</td></tr>
        <tr><td>한글이 깨짐</td><td>브라우저 인코딩 문제</td><td>UTF-8 인코딩 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases-folders">06. 폴더 관리</Link> — TC를 폴더로 정리하는 방법</li>
      <li><Link to="/support/guide/test-cases-steps">07. 테스트 스텝 작성</Link> — 자세한 스텝 작성 가이드</li>
      <li><Link to="/support/guide/factor-combination">08. Factor Combination</Link> — 자동 조합 생성</li>
    </ul>
  </article>
);

const TestCasesEn = () => (
  <article className="guide-article">
    <h1>05. Test Case Basics</h1>
    <p className="guide-lead">
      A test case (TC) is the most fundamental unit in T-CAFE. This page explains how to create, view, edit, and delete TCs.
    </p>

    <hr />

    <h2>1. What is a Test Case?</h2>
    <p>A test case is a unit specification for verifying a specific feature or scenario. It includes:</p>
    <ul>
      <li>Name: the TC title</li>
      <li>Description: what the TC verifies</li>
      <li>Precondition: the conditions that must be in place before the test runs</li>
      <li>Test Steps: the steps to perform and the expected results</li>
      <li>Priority: freely defined in Configuration → Priorities (default sample: Critical / High / Medium / Low)</li>
      <li>Case Type: freely defined in Configuration → Case Type (default sample: Function / Performance / Regression / Security)</li>
      <li>TC Status: one of Draft / Confirmed (defaults to Draft; only Confirmed TCs can be added to a Test Plan)</li>
      <li>Components: freely defined in Configuration → Components (default sample: Frontend / Backend API / Database / Authentication / Payment); multi-select</li>
      <li>Labels: free-form tags</li>
      <li>Owner: the TC author</li>
    </ul>

    <hr />

    <h2>2. TC Types</h2>
    <p>T-CAFE supports two TC types:</p>

    <h3>Single Test Case</h3>
    <ul>
      <li>A standard single test case</li>
      <li>Verifies one scenario</li>
      <li>The most commonly used type</li>
    </ul>

    <h3>Factor Combination Test Case</h3>
    <ul>
      <li>A TC auto-generated by the Factor Combination feature</li>
      <li>Verifies combinations of multiple variables</li>
      <li>See <Link to="/support/guide/factor-combination">08. Factor Combination</Link> for details</li>
    </ul>

    <hr />

    <h2>2-1. TC Status</h2>
    <p>Every TC has one of two statuses:</p>
    <ul>
      <li>Draft — in progress / not yet reviewed. The default when a TC is created.</li>
      <li>Confirmed — reviewed / ready to execute. The only status that can be added to a Test Plan.</li>
    </ul>
    <p>To change the status, use the TC Status dropdown in the TC edit screen.</p>
    <aside className="guide-callout info">
      The "Add TC" list in a Test Plan shows Confirmed TCs only. To add a Draft TC to a TP, first change it to Confirmed in the edit screen.
    </aside>

    <hr />

    <h2>3. Viewing TCs</h2>

    <h3>Navigation</h3>
    <p>Top tab → Test Cases</p>

    <h3>Layout</h3>
    <ul>
      <li>Left: folder tree (TCs grouped by folder; the left-panel width is adjustable)</li>
      <li>Right: TC list (table format, showing TCs of the selected folder)</li>
    </ul>

    <ScreenshotSlot label="Test Cases main screen" src={img01} />

    <h3>Viewing / Editing a TC</h3>
    <ul>
      <li>Click the Key or Name of a TC in the list to navigate to the TC detail / edit page</li>
      <li>The screen differs by TC type: Single TCs open the edit page, while Factor TCs open the Factor Combination detail page</li>
      <li>When you return to the list, the previous scroll position and visible count are preserved</li>
    </ul>

    <h3>Columns</h3>
    <p>By default the following columns are shown:</p>
    <ul>
      <li>TC Key (e.g., <code>PROJ-1</code>, <code>PROJ-2</code>)</li>
      <li>Name</li>
      <li>Type — Single (S) / Factor (F) badge</li>
      <li>TC Status — Draft / Confirmed badge</li>
      <li>Components</li>
      <li>Labels</li>
      <li>Owner</li>
      <li>Case Type</li>
      <li>Priority</li>
      <li>Created</li>
      <li>Updated</li>
    </ul>

    <h3>Created / Updated Display</h3>
    <ul>
      <li>The cell shows the date only</li>
      <li>Hover to see the date + time in a tooltip</li>
    </ul>

    <h3>Show / Hide Columns</h3>
    <ul>
      <li>Use the column settings button in the top-right to choose which columns to display</li>
      <li>User Defined Fields (UDFs) can be toggled from the same menu</li>
      <li>The setting is saved per project per user</li>
    </ul>

    <h3>Search and Filter</h3>
    <ul>
      <li>Search box: search by TC name, key, or description</li>
      <li>Filters: filter by folder, priority, case type, component, label, or owner</li>
    </ul>

    <hr />

    <h2>4. Creating a TC (Single)</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>On the Test Cases page, select the folder where the TC will be created</li>
      <li>Click the + Create Test Case button at the top</li>
      <li>From the dropdown, choose Single or Factor Combination</li>
      <li>The creation screen for the chosen type opens</li>
    </ol>
    <aside className="guide-callout info">
      This page (05) covers Single creation. Factor Combination creation is covered in <Link to="/support/guide/factor-combination">08. Factor Combination</Link>.
    </aside>

    <ScreenshotSlot label="TC create button" src={img02} />

    <h3>Fields</h3>
    <p>The TC creation screen is composed of pinned top fields and three collapsible sections (Detail / User Defined Field / Test Steps). The guide follows the on-screen order.</p>

    <h4>Pinned Top Fields</h4>
    <ol>
      <li>Folder — the folder to place the TC in (defaults to the folder selected in the list)</li>
      <li>Name (required) — the TC title</li>
      <li>Description — describe what the TC verifies</li>
      <li>Precondition — conditions that must be in place before the test runs</li>
    </ol>

    <h4>"Detail" Section (expand to fill)</h4>
    <ol>
      <li>Priority — choose from the items defined in Configuration → Priorities</li>
      <li>Case Type — choose from the items defined in Configuration → Case Types</li>
      <li>TC Status — choose Draft or Confirmed (defaults to Draft). Only Confirmed TCs can be added to a Test Plan</li>
      <li>Owner — choose an owner from the project members (dropdown)</li>
      <li>Components — choose from the items defined in Configuration → Components</li>
      <li>Labels — free-form (separate from Jira labels). Existing labels are suggested as auto-complete entries</li>
    </ol>

    <h4>"User Defined Field" Section (expand to fill)</h4>
    <ul>
      <li>All fields defined in Configuration → User Defined Fields are shown</li>
      <li>The appropriate input UI is shown for the field type (text, number, dropdown, checkbox, date, URL, etc.)</li>
      <li>Fields marked as required (*) in Configuration must be filled in before saving</li>
      <li>If no UDFs are defined, a "No user defined fields" message is shown</li>
    </ul>

    <h4>"Test Steps" Section (expand to fill)</h4>
    <ul>
      <li>A 3-column table: Step / Test Data / Expected Result</li>
      <li>Add or remove rows, and reorder via drag and drop</li>
      <li>See <Link to="/support/guide/test-cases-steps">07. Writing Test Steps</Link> for detailed authoring guidance</li>
    </ul>

    <h3>Saving</h3>
    <ul>
      <li>Create button: a new TC is assigned a key (e.g., <code>PROJ-1</code>) automatically and saved</li>
      <li>Cancel: cancels creation</li>
    </ul>

    <h3>TC Key (Test Case Key)</h3>
    <ul>
      <li>Format: <code>{'<project-key>-<sequence>'}</code> (e.g., <code>TCAFE-1</code>, <code>TCAFE-2</code>)</li>
      <li>Auto-assigned, not editable</li>
      <li>Unique within the project</li>
    </ul>

    <hr />

    <h2>5. Editing a TC</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Click the TC to edit in the Test Cases list</li>
      <li>Click the Edit button on the right or at the bottom</li>
      <li>Modify the fields and click Update</li>
    </ol>

    <h3>Editable Fields</h3>
    <ul>
      <li>All fields except the TC key and the created date</li>
    </ul>

    <h3>Edit History</h3>
    <ul>
      <li>On edit, the updated_at is refreshed automatically and reflected in the "Updated" column</li>
      <li>created_at is fixed at the moment of initial creation and does not change</li>
    </ul>

    <hr />

    <h2>6. Deleting a TC</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Select the TC(s) to delete (single or multiple)</li>
      <li>Click the Delete button</li>
      <li>Click Confirm in the confirmation dialog</li>
    </ol>

    <h3>Bulk Delete</h3>
    <ul>
      <li>Select multiple TCs with checkboxes and delete them all at once</li>
    </ul>

    <h3>Notes</h3>
    <ul>
      <li>Deleted TCs cannot be recovered</li>
      <li>
        TCs already added to a TP (Test Plan) are kept as-is in the TP.
        When a TC is added to a TP, a snapshot (name, steps, precondition, etc.) is copied into the TP, so deleting the source TC does not affect the execution history or data inside the TP.
      </li>
      <li>If you delete a TC that was generated by Factor Combination, the Factor definition itself is kept</li>
    </ul>

    <hr />

    <h2>7. Cloning a TC</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Use Cases</h3>
    <ul>
      <li>Quickly create similar TCs</li>
      <li>Create variants based on a template TC</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Select the TC to clone</li>
      <li>Click the Clone button</li>
      <li>The clone is created in the same folder as the source (a <code> (Copy)</code> suffix is appended to the name, and a new key is auto-assigned)</li>
    </ol>

    <h3>What Gets Cloned</h3>
    <ul>
      <li>All content of the TC (name, description, priority, case type, owner, components, labels, precondition, test steps, user defined fields, etc.)</li>
    </ul>

    <hr />

    <h2>8. Moving TCs</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Select the TC(s) to move (single or multiple)</li>
      <li>Click the Move button at the top</li>
      <li>Pick the target folder in the folder-selector dialog</li>
    </ol>

    <hr />

    <h2>9. TC Data Protection</h2>
    <p>T-CAFE securely protects sensitive test data (test steps, preconditions) when saving. No extra configuration is needed — it is handled automatically.</p>

    <hr />

    <h2>10. Common Issues</h2>
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Cause</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Create Test Case button is not visible</td><td>No Admin / Team Admin permission</td><td>Ask an admin to grant permission</td></tr>
        <tr><td>TCs are not visible in the list</td><td>No folder selected, or a filter is applied</td><td>Reset filters; select all folders</td></tr>
        <tr><td>TC keys collide</td><td>Rare system error</td><td>Refresh the page</td></tr>
        <tr><td>Save fails</td><td>A required field (Name) is missing</td><td>Fill in every field marked with a red asterisk (*)</td></tr>
        <tr><td>Korean text is garbled</td><td>Browser encoding issue</td><td>Verify UTF-8 encoding</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-cases-folders">06. Folder Management</Link> — organizing TCs into folders</li>
      <li><Link to="/support/guide/test-cases-steps">07. Writing Test Steps</Link> — detailed step-writing guide</li>
      <li><Link to="/support/guide/factor-combination">08. Factor Combination</Link> — auto-generating combinations</li>
    </ul>
  </article>
);

export default { ko: <TestCases />, en: <TestCasesEn /> };
