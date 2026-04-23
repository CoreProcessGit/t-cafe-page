import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/06-folders/01.png';

const Folders = () => (
  <article className="guide-article">
    <h1>06. 폴더 관리</h1>
    <p className="guide-lead">
      T-CAFE는 폴더 트리 구조로 테스트 케이스를 정리할 수 있습니다. 폴더는 무제한 깊이로 중첩 가능하며, 직관적인 드래그 앤 드롭으로 관리할 수 있습니다.
    </p>

    <hr />

    <h2>1. 폴더란?</h2>
    <p>폴더는 테스트 케이스를 기능별, 모듈별, 또는 임의 기준으로 그룹화하는 단위입니다.</p>

    <h3>일반적인 폴더 구조 예시</h3>
    <pre><code>{`프로젝트
├── Login
│ ├── Standard Login
│ ├── Social Login
│ └── Password Reset
├── Dashboard
│ ├── Widgets
│ └── Performance
├── User Management
│ ├── Create User
│ ├── Edit User
│ └── Delete User
├── Payment
│ ├── Credit Card
│ └── Bank Transfer
└── API Tests
 ├── Authentication
 ├── User CRUD
 └── Reports`}</code></pre>

    <hr />

    <h2>2. 폴더 트리 화면</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → Test Cases → 좌측 패널</p>

    <h3>화면 구성</h3>
    <ul>
      <li>루트 폴더: 프로젝트 최상위</li>
      <li>하위 폴더: 트리 구조로 표시</li>
      <li>TC 개수: 각 폴더 우측에 해당 폴더의 TC 개수 표시</li>
      <li>확장/축소 화살표: 클릭으로 펼치기/접기</li>
      <li>⚡ 아이콘 (Factor Combination 표시): 폴더에 Factor Combination 설정이 저장되어 있으면 폴더명 옆에 주황색 ⚡ 아이콘이 표시됩니다. 마우스를 올리면 "이 폴더에는 Factor Combination 설정이 있습니다" 툴팁이 나타납니다. 이 표시는 해당 폴더만 적용되며 부모 폴더에는 전파되지 않습니다 (예: <code>Auth/Login</code>에 설정이 있어도 <code>Auth</code>에는 표시되지 않음). 클릭 시 별도 동작은 없으며 폴더 선택 후 상단에서 Factor Combination 화면으로 이동할 수 있습니다.</li>
    </ul>

    <ScreenshotSlot label="폴더 트리" src={img01} />

    <hr />

    <h2>3. 폴더 생성</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>좌측 상단의 New Folder 버튼 클릭 (또는 폴더 트리 빈 영역 우클릭 → New Folder)</li>
      <li>클릭 즉시 <code>New Folder 1</code>, <code>New Folder 2</code> ... 형식으로 자동 이름이 부여된 폴더가 생성됩니다</li>
      <li>이름을 바꾸려면 아래 "4. 폴더 이름 변경" 참고</li>
    </ol>

    <h3>특징</h3>
    <ul>
      <li>폴더는 루트 레벨에 생성됩니다 (드래그 또는 Move로 다른 위치로 이동 가능)</li>
      <li>같은 레벨에 같은 이름의 폴더는 만들 수 없습니다 — 동일 부모 아래에 동일한 이름이 이미 존재하면 자동 번호가 증가합니다 (<code>New Folder 2</code>, <code>3</code>...). DB UNIQUE 제약으로 강제됩니다.</li>
      <li>다른 부모 아래에는 같은 이름이 가능합니다 (예: <code>Auth/Login</code>과 <code>Payment/Login</code> 동시 존재 가능).</li>
    </ul>

    <hr />

    <h2>4. 폴더 이름 변경</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>폴더 우클릭 → Rename Folder</li>
      <li>새 이름 입력</li>
      <li>Enter로 저장</li>
    </ol>
    <aside className="guide-callout">
      같은 레벨(같은 부모 폴더 안)에 이미 동일한 이름의 폴더가 있으면 변경이 거부됩니다. 다른 이름을 사용하거나 한쪽 폴더를 먼저 다른 위치로 이동해주세요.
    </aside>

    <hr />

    <h2>5. 폴더 이동</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>이동할 폴더 우클릭 → Move Folder</li>
      <li>열린 Move 창에서 폴더를 드래그 앤 드롭하여 원하는 위치로 이동</li>
      <li>변경 내용을 Save Changes로 저장</li>
    </ol>
    <aside className="guide-callout">
      이동하려는 위치(새 부모 폴더 아래)에 동일한 이름의 폴더가 이미 있으면 이동이 거부됩니다. 한쪽의 이름을 먼저 바꾸거나 다른 위치를 선택해주세요.
    </aside>

    <hr />

    <h2>6. 폴더 복제 (Copy)</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>비슷한 폴더 구조와 테스트 케이스 세트를 빠르게 만들 때</li>
      <li>기존 Factor Combination 설정을 새 폴더에 재사용할 때</li>
      <li>템플릿 폴더를 복제해 새 테스트 사이클을 시작할 때</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 폴더 우클릭 → Copy Folder</li>
      <li>클릭 즉시 복제가 완료됩니다 (이름 입력이나 위치 선택 단계 없음)</li>
    </ol>

    <h3>복제 범위</h3>
    <p>폴더를 복사하면 하위 폴더 트리 전체 + 각 폴더 안의 모든 Test Case + Factor Combination 설정까지 한 번에 복사됩니다. 각 항목의 상세는 다음과 같습니다:</p>
    <ul>
      <li>폴더 구조: 원본 폴더 + 모든 하위 폴더가 같은 계층 구조로 복사됩니다 (깊이 무제한)</li>
      <li>폴더 이름: 루트(복사 대상으로 선택한 폴더)만 <code>_copy</code> 접미사가 붙고, 하위 폴더 이름은 원본 그대로 유지됩니다. 예: <code>Login</code> 복사 → <code>Login_copy/Standard Login/...</code></li>
      <li>Test Case: 각 폴더 안의 모든 TC가 새 TC로 복사됩니다
        <ul>
          <li>TC Key는 프로젝트 번호의 다음 순번으로 새로 부여됩니다 (예: <code>PROJ-42</code> → <code>PROJ-87</code>)</li>
          <li>이름, 설명, 테스트 스텝, 사전 조건, 우선순위, Case Type, Owner, Labels, Components, User-defined Fields 모두 그대로 복사됩니다</li>
          <li>Jira 이슈 링크(Linked Issues)는 복사되지 않습니다 — 새 TC는 빈 상태로 시작 (기존 Jira 이슈 히스토리가 복사본으로 딸려오지 않도록)</li>
        </ul>
      </li>
      <li>Factor Combination 설정: 폴더에 저장된 Factor 설정(요인, 제약, 시뮬레이션된 조합, Matrix Rows, 메타데이터)이 새 폴더에 함께 복사됩니다</li>
      <li>Factor TC Assignment: 각 조합에 지정된 TC 배정 정보도 함께 복사됩니다</li>
      <li>전체가 원자적으로 처리됩니다 — 중간 실패 시 이미 복사된 항목도 자동 롤백되어 반쪽 복사 상태는 남지 않습니다</li>
    </ul>

    <aside className="guide-callout info">
      성능 참고: 수백~수천 개 TC가 있는 폴더도 청크 단위로 분할 처리되어 안정적으로 복사됩니다. 다만 매우 큰 폴더(예: 5,000+ TC)는 완료까지 수십 초가 걸릴 수 있으니 브라우저를 닫지 말고 기다려 주세요.
    </aside>

    <hr />

    <h2>7. 폴더 삭제</h2>
    <aside className="guide-callout">권한 필요: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>삭제할 폴더 우클릭</li>
      <li>Delete Folder 선택</li>
      <li>확인 모달에서 삭제될 항목 내역을 확인 후 Confirm 클릭</li>
    </ol>

    <h3>확인 모달 안내</h3>
    <p>삭제 전 폴더에 포함된 항목을 집계하여 영향 범위를 안내합니다. 실제로 삭제될 내역이 다음과 같이 줄별로 표시됩니다:</p>
    <ul>
      <li>하위 폴더가 있으면 "N sub-folder(s) will also be permanently deleted."</li>
      <li>테스트 케이스가 있으면 "N test case(s) in this folder will be permanently deleted."</li>
      <li>Factor Combination 설정 또는 Factor TC가 있으면 "Factor Combination configuration and assignments in this folder will also be permanently deleted." 경고 표시</li>
      <li>비어 있는 폴더는 추가 안내 없이 확인 메시지만 표시</li>
      <li>Cancel 버튼으로 언제든지 취소 가능</li>
    </ul>

    <h3>삭제 시 실제 동작</h3>
    <ul>
      <li>해당 폴더와 그에 속한 모든 하위 폴더가 영구 삭제됩니다</li>
      <li>해당 폴더 및 하위 폴더에 속한 모든 테스트 케이스(TC)가 영구 삭제됩니다</li>
      <li>해당 폴더 및 하위 폴더에 연결된 Factor Combination 설정과 Factor TC 배정 정보도 영구 삭제됩니다</li>
      <li>모든 삭제 작업은 단일 트랜잭션으로 처리되어 일부만 삭제되는 일은 없습니다 (전부 삭제되거나 전부 취소)</li>
      <li>삭제된 데이터는 복구할 수 없습니다</li>
    </ul>

    <aside className="guide-callout info">
      참고: 이미 Test Plan에 추가되어 있던 TC는 TP에 스냅샷으로 복사되어 있으므로 폴더 삭제로 인해 TP 내 실행 기록이나 데이터가 영향을 받지 않습니다.
    </aside>

    <hr />

    <h2>8. 폴더 구조 베스트 프랙티스</h2>

    <h3>권장 사항</h3>
    <ul>
      <li>기능별 폴더: Login, Dashboard, Payment 등 (가장 일반적)</li>
      <li>모듈별 폴더: Frontend, Backend, Mobile 등</li>
      <li>테스트 유형별 폴더: Smoke, Regression, Performance 등</li>
      <li>혼합형: 1단계는 기능, 2단계는 테스트 유형</li>
    </ul>

    <h3>권장 깊이</h3>
    <ul>
      <li>2-3단계가 가장 사용하기 편함</li>
      <li>4단계 이상은 네비게이션이 어려움</li>
    </ul>

    <h3>폴더 이름 규칙</h3>
    <ul>
      <li>간결하게: 25자 이내 권장</li>
      <li>일관성 있게: 모든 폴더가 같은 명명 규칙 사용</li>
    </ul>

    <h3>안티 패턴 (피해야 할 구조)</h3>
    <ul>
      <li>너무 많은 빈 폴더</li>
      <li>의미 없는 이름 ("Folder 1", "New Folder")</li>
      <li>같은 의미의 폴더가 여러 부모 아래 산재 (예: <code>Frontend/Login</code>과 <code>Mobile/Login</code> 동시 존재) — 같은 부모 아래는 UNIQUE로 자동 차단되지만, 다른 부모 아래는 허용되므로 의도적이지 않다면 통합 권장</li>
    </ul>

    <hr />

    <h2>9. TC를 폴더 간 이동</h2>

    <h3>절차 (단일 · 다중 공통)</h3>
    <ol>
      <li>TC 목록에서 이동할 TC 선택 (단일 또는 체크박스로 다중 선택)</li>
      <li>상단의 Move 버튼 클릭</li>
      <li>열린 폴더 선택 창에서 대상 폴더 선택</li>
      <li>Move 클릭</li>
    </ol>

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
        <tr><td>Add Folder 버튼이 보이지 않음</td><td>Admin/Team Admin 권한 없음</td><td>관리자에게 권한 요청</td></tr>
        <tr><td>드래그가 안 됨</td><td>권한 없음 또는 브라우저 호환성</td><td>권한 확인, 브라우저 새로고침</td></tr>
        <tr><td>폴더가 안 보임</td><td>페이지 캐시</td><td>새로고침 (F5)</td></tr>
        <tr><td>폴더 이동 후 TC가 안 보임</td><td>필터가 적용되어 있음</td><td>필터 초기화</td></tr>
        <tr><td>폴더 이름 변경/이동 시 거부됨</td><td>같은 부모 폴더 아래에 이미 동일 이름이 존재 (UNIQUE 제약)</td><td>다른 이름으로 변경하거나 한쪽 폴더를 먼저 다른 위치로 이동</td></tr>
        <tr><td>Import 시 같은 폴더가 두 번 안 생김 (정상 동작)</td><td>UNIQUE 제약으로 동일 레벨 중복 차단</td><td>의도된 동작 — 같은 파일을 여러 번 import해도 폴더는 그대로 유지됨</td></tr>
        <tr><td>폴더 삭제 실패</td><td>시스템 오류</td><td>안의 TC를 먼저 다른 곳으로 이동 후 재시도</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/test-cases-steps">07. 테스트 스텝 작성</Link></li>
    </ul>
  </article>
);

const FoldersEn = () => (
  <article className="guide-article">
    <h1>06. Folder Management</h1>
    <p className="guide-lead">
      T-CAFE lets you organize test cases in a folder-tree structure. Folders can be nested to unlimited depth and managed with intuitive drag and drop.
    </p>

    <hr />

    <h2>1. What is a Folder?</h2>
    <p>A folder is a unit for grouping test cases — by feature, by module, or by any criterion you choose.</p>

    <h3>Typical Folder Structure</h3>
    <pre><code>{`Project
├── Login
│ ├── Standard Login
│ ├── Social Login
│ └── Password Reset
├── Dashboard
│ ├── Widgets
│ └── Performance
├── User Management
│ ├── Create User
│ ├── Edit User
│ └── Delete User
├── Payment
│ ├── Credit Card
│ └── Bank Transfer
└── API Tests
 ├── Authentication
 ├── User CRUD
 └── Reports`}</code></pre>

    <hr />

    <h2>2. Folder Tree View</h2>

    <h3>Navigation</h3>
    <p>Top tab → Test Cases → left panel</p>

    <h3>Layout</h3>
    <ul>
      <li>Root folder: top level of the project</li>
      <li>Sub-folders: shown in a tree structure</li>
      <li>TC count: the number of TCs in each folder is shown to its right</li>
      <li>Expand / collapse arrow: click to expand or collapse</li>
      <li>⚡ icon (Factor Combination indicator): when a folder has a Factor Combination configuration saved, an orange ⚡ icon appears next to the folder name. Hovering shows the tooltip "This folder has a Factor Combination configuration." The icon applies to that folder only and does not propagate to the parent (for example, if <code>Auth/Login</code> has a configuration, <code>Auth</code> itself is not marked). Clicking the icon has no separate action — select the folder and move to the Factor Combination screen from the top.</li>
    </ul>

    <ScreenshotSlot label="Folder tree" src={img01} />

    <hr />

    <h2>3. Creating a Folder</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Click the New Folder button at the top-left (or right-click an empty area in the folder tree → New Folder)</li>
      <li>A folder with an auto-assigned name like <code>New Folder 1</code>, <code>New Folder 2</code>… is created immediately on click</li>
      <li>To rename it, see "4. Renaming a Folder" below</li>
    </ol>

    <h3>Notes</h3>
    <ul>
      <li>The folder is created at the root level (you can move it elsewhere via drag or Move)</li>
      <li>You cannot create two folders with the same name at the same level — if the same name already exists under the same parent, the auto-number is incremented (<code>New Folder 2</code>, <code>3</code>…). This is enforced by a DB UNIQUE constraint.</li>
      <li>The same name is allowed under different parents (for example, <code>Auth/Login</code> and <code>Payment/Login</code> can coexist).</li>
    </ul>

    <hr />

    <h2>4. Renaming a Folder</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Right-click the folder → Rename Folder</li>
      <li>Enter the new name</li>
      <li>Press Enter to save</li>
    </ol>
    <aside className="guide-callout">
      If a folder with the same name already exists at the same level (under the same parent), the rename is rejected. Use a different name, or first move one of the folders elsewhere.
    </aside>

    <hr />

    <h2>5. Moving a Folder</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Right-click the folder to move → Move Folder</li>
      <li>In the Move dialog, drag and drop the folder to the desired location</li>
      <li>Save the changes with Save Changes</li>
    </ol>
    <aside className="guide-callout">
      If a folder with the same name already exists under the target parent, the move is rejected. Rename one of the folders first, or choose a different destination.
    </aside>

    <hr />

    <h2>6. Copying a Folder</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Use Cases</h3>
    <ul>
      <li>Quickly create a similar folder structure with its test cases</li>
      <li>Reuse an existing Factor Combination configuration in a new folder</li>
      <li>Duplicate a template folder to start a new test cycle</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Right-click the folder to copy → Copy Folder</li>
      <li>The copy is completed immediately on click (no name-entry or location-select step)</li>
    </ol>

    <h3>What Gets Copied</h3>
    <p>Copying a folder clones the entire sub-folder tree + every Test Case inside each folder + the Factor Combination configuration in one operation. Details:</p>
    <ul>
      <li>Folder structure: the source folder and all its sub-folders are copied preserving the hierarchy (unlimited depth)</li>
      <li>Folder names: only the root (the folder you clicked Copy on) gets the <code>_copy</code> suffix; sub-folders keep their original names. Example: copying <code>Login</code> → <code>Login_copy/Standard Login/...</code></li>
      <li>Test Cases: every TC in each folder is copied as a new TC
        <ul>
          <li>A new TC Key is issued from the next project-wide number (for example <code>PROJ-42</code> → <code>PROJ-87</code>)</li>
          <li>Name, description, test steps, preconditions, priority, Case Type, Owner, Labels, Components, User-defined Fields are all copied as-is</li>
          <li>Linked Jira Issues are NOT copied — the new TC starts with an empty issue list (so that existing Jira issue history doesn't follow duplicated TCs)</li>
        </ul>
      </li>
      <li>Factor Combination configuration: factors, constraints, simulated test cases, matrix rows, and metadata saved on the folder are copied to the new folder as well</li>
      <li>Factor TC Assignments: the TC assignments per combination are copied together</li>
      <li>The whole operation is atomic — if anything fails mid-way, already-copied items are rolled back so partial copies never remain</li>
    </ul>

    <aside className="guide-callout info">
      Performance note: folders with hundreds or thousands of TCs are copied in chunks and remain stable. Very large folders (for example 5,000+ TCs) can take tens of seconds to finish — please keep the browser open until it completes.
    </aside>

    <hr />

    <h2>7. Deleting a Folder</h2>
    <aside className="guide-callout">Permission required: Admin or Team Admin</aside>

    <h3>Steps</h3>
    <ol>
      <li>Right-click the folder to delete</li>
      <li>Choose Delete Folder</li>
      <li>Review what will be deleted in the confirmation modal, then click Confirm</li>
    </ol>

    <h3>Confirmation Modal</h3>
    <p>Before deletion, the modal counts the items inside and explains the impact. The items that will actually be deleted are listed line by line:</p>
    <ul>
      <li>If there are sub-folders: "N sub-folder(s) will also be permanently deleted."</li>
      <li>If there are test cases: "N test case(s) in this folder will be permanently deleted."</li>
      <li>If there is a Factor Combination configuration or Factor TCs: "Factor Combination configuration and assignments in this folder will also be permanently deleted." is shown as a warning</li>
      <li>For empty folders, only the confirmation message is shown with no additional details</li>
      <li>You can cancel at any time with the Cancel button</li>
    </ul>

    <h3>What Actually Happens on Delete</h3>
    <ul>
      <li>The folder and all sub-folders under it are permanently deleted</li>
      <li>All test cases (TCs) in the folder and its sub-folders are permanently deleted</li>
      <li>Factor Combination configurations and Factor TC assignments linked to the folder and its sub-folders are permanently deleted</li>
      <li>All deletions run as a single transaction, so partial deletion never happens (either everything is deleted, or nothing is)</li>
      <li>Deleted data cannot be recovered</li>
    </ul>

    <aside className="guide-callout info">
      Note: TCs that were already added to a Test Plan are snapshot-copied into the TP, so deleting the folder does not affect the execution history or data inside the TP.
    </aside>

    <hr />

    <h2>8. Folder-Structure Best Practices</h2>

    <h3>Recommendations</h3>
    <ul>
      <li>By feature: Login, Dashboard, Payment, etc. (most common)</li>
      <li>By module: Frontend, Backend, Mobile, etc.</li>
      <li>By test type: Smoke, Regression, Performance, etc.</li>
      <li>Mixed: Feature at the first level, test type at the second level</li>
    </ul>

    <h3>Recommended Depth</h3>
    <ul>
      <li>2–3 levels is the most usable</li>
      <li>4 or more levels become hard to navigate</li>
    </ul>

    <h3>Folder Naming Rules</h3>
    <ul>
      <li>Keep it short: 25 characters or fewer recommended</li>
      <li>Be consistent: use the same naming scheme across all folders</li>
    </ul>

    <h3>Anti-Patterns (structures to avoid)</h3>
    <ul>
      <li>Too many empty folders</li>
      <li>Meaningless names ("Folder 1", "New Folder")</li>
      <li>Folders with the same meaning scattered under different parents (for example, both <code>Frontend/Login</code> and <code>Mobile/Login</code>) — the same-parent case is auto-blocked by the UNIQUE constraint, but the different-parent case is allowed, so consolidate if not intentional</li>
    </ul>

    <hr />

    <h2>9. Moving TCs Between Folders</h2>

    <h3>Steps (single and multiple)</h3>
    <ol>
      <li>Select the TC(s) to move from the TC list (single selection, or multiple via checkboxes)</li>
      <li>Click the Move button at the top</li>
      <li>Choose the target folder in the folder-picker dialog</li>
      <li>Click Move</li>
    </ol>

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
        <tr><td>Add Folder button is not visible</td><td>No Admin / Team Admin permission</td><td>Ask an admin to grant permission</td></tr>
        <tr><td>Drag does not work</td><td>No permission or browser compatibility</td><td>Check permission; refresh the browser</td></tr>
        <tr><td>Folders are not visible</td><td>Page cache</td><td>Refresh (F5)</td></tr>
        <tr><td>TCs are not visible after moving the folder</td><td>A filter is applied</td><td>Reset filters</td></tr>
        <tr><td>Rename / Move is rejected</td><td>A folder with the same name already exists under the same parent (UNIQUE constraint)</td><td>Use a different name, or move one of the folders elsewhere first</td></tr>
        <tr><td>Same folder is not created twice on Import (this is intended)</td><td>The UNIQUE constraint blocks same-level duplicates</td><td>Intended behavior — re-importing the same file keeps the folder as is</td></tr>
        <tr><td>Folder deletion failed</td><td>System error</td><td>Move the TCs inside elsewhere first, then retry</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. Test Case Basics</Link></li>
      <li><Link to="/support/guide/test-cases-steps">07. Writing Test Steps</Link></li>
    </ul>
  </article>
);

export default { ko: <Folders />, en: <FoldersEn /> };
