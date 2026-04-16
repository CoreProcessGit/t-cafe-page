import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/09-importexport/01.png';
import img02 from '../../assets/user_guide/09-importexport/02.png'

const ImportExport = () => (
  <article className="guide-article">
    <h1>09. Import / Export</h1>
    <p className="guide-lead">
      T-CAFE는 테스트 케이스를 외부 형식과 주고받는 기능을 제공합니다. 다른 도구에서 마이그레이션하거나, 백업 또는 외부 보고에 활용할 수 있습니다.
    </p>

    <hr />

    <h2>1. 권한</h2>
    <table>
      <thead>
        <tr>
          <th>작업</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Import (CSV/JSON/Excel)</strong></td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>Export (CSV/JSON/Excel)</strong></td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
      </tbody>
    </table>
    <p>→ <strong>Export는 모든 역할</strong>이 가능 (데이터 조회 성격)<br />→ <strong>Import는 Admin/Team Admin만</strong> 가능 (데이터 변경 성격)</p>

    <hr />

    <h2>2. 지원 형식</h2>
    <table>
      <thead>
        <tr><th>형식</th><th className="center">Import</th><th className="center">Export</th><th>비고</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>CSV</strong></td><td className="center">O</td><td className="center">O</td><td>엑셀/구글 시트 호환</td></tr>
        <tr><td><strong>JSON</strong></td><td className="center">O</td><td className="center">O</td><td>다른 시스템 통합</td></tr>
        <tr><td><strong>Excel (XLSX)</strong></td><td className="center">O</td><td className="center">O</td><td>엑셀 직접 사용</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>3. Export (내보내기)</h2>

    <h3>3-1. 진입 경로</h3>
    <p>Test Cases 페이지 상단 액션 바의 <strong>Export</strong> 버튼</p>

    <h3>3-2. 절차</h3>
    <ol>
      <li>(선택) 좌측 폴더에서 특정 폴더 선택, 또는 검색·필터 적용, 또는 체크박스로 TC 선택</li>
      <li>상단의 <strong>Export</strong> 버튼 클릭</li>
      <li>드롭다운 메뉴에서 형식 선택: <strong>Excel (.xlsx)</strong> / <strong>CSV (.csv)</strong> / <strong>JSON (.json)</strong> — 클릭 즉시 파일이 다운로드되며 별도 확인 단계는 없습니다</li>
    </ol>

    <h3>3-2-1. 자동 적용되는 Export 범위</h3>
    <p>별도의 "범위 선택" 다이얼로그는 없으며, 다음 우선순위로 자동 결정됩니다:</p>
    <ol>
      <li><strong>체크박스로 선택한 TC가 있으면</strong> → 선택된 TC만 Export</li>
      <li><strong>선택이 없으면</strong> → 현재 화면에 표시된 필터 결과(filteredTestCases) 전체 Export</li>
    </ol>
    <p>표시된 결과가 없으면 "No test cases to export" 경고가 표시됩니다.</p>

    <ScreenshotSlot label="Export 메뉴" src={img01} />

    <h3>3-3. Export 항목 (실제 출력 필드 — 컬럼 순서 그대로)</h3>
    <ol>
      <li><strong>Folder</strong> — TC가 속한 폴더의 leaf 이름 (예: <code>OAuth</code>)</li>
      <li><strong>Folder Path</strong> — 루트부터의 전체 경로, <code>/</code> 구분자 (예: <code>Authentication/Login/OAuth</code>)</li>
      <li><strong>Key</strong> (예: PROJ-1)</li>
      <li><strong>Name</strong> (필수, 헤더에 <code>*</code> 표시)</li>
      <li><strong>Description</strong></li>
      <li><strong>Objective</strong></li>
      <li><strong>Precondition</strong></li>
      <li><strong>Type</strong> (single / factor)</li>
      <li><strong>Case Type</strong></li>
      <li><strong>Priority</strong></li>
      <li><strong>Owner</strong></li>
      <li><strong>Components</strong>, <strong>Labels</strong></li>
      <li><strong>User Defined Fields (UDF)</strong> — 정의된 필드 각각이 별도 컬럼으로 추가 (필수 필드는 헤더에 <code>*</code> 표시)</li>
      <li><strong>Test Steps</strong> — Step No / Step / Test Data / Expected Result</li>
    </ol>

    <h3>3-4. CSV 형식 예시</h3>
    <pre><code>{`Folder,Folder Path,Key,Name *,Description,Type,Case Type,Priority,Owner,Components,Labels,Step No,Step,Test Data,Expected Result
OAuth,Authentication/Login/OAuth,PROJ-1,Login with valid credentials,Verify user can login,single,Function,High,John Doe,"Frontend,Authentication","smoke,critical",1,Navigate to login page,URL: /login,Login page displayed
,,,,,,,,,,,2,Enter credentials,user/pass,Logged in
Login,Authentication/Login,PROJ-2,Login with invalid password,,single,Function,Medium,John Doe,"Frontend,Authentication",negative,1,Open page,-,Page loads`}</code></pre>
    <aside className="guide-callout info">
      <strong>다단계 스텝 표기</strong>: 같은 TC에 여러 스텝이 있으면 두 번째 스텝부터 같은 TC의 메타데이터(Folder/Key/Name 등)를 비워둡니다. 같은 TC에 이어지는 스텝으로 인식됩니다.
    </aside>

    <h3>3-5. JSON 형식 예시 (실제 구조)</h3>
    <pre><code>{`{
  "exportInfo": {
    "timestamp": "2026-04-16T10:00:00.000Z",
    "version": "1.0",
    "source": "Jira Test Archive - production",
    "totalTestCases": 2,
    "requiredFields": ["name"]
  },
  "testCases": [
    {
      "key": "PROJ-1",
      "name": "Login with valid credentials",
      "description": "Verify user can login",
      "objective": "",
      "precondition": "User account exists",
      "type": "single",
      "caseType": "Function",
      "priority": "High",
      "owner": "John Doe",
      "components": ["Frontend", "Authentication"],
      "labels": ["smoke", "critical"],
      "folder": "OAuth",
      "folderPath": "Authentication/Login/OAuth",
      "testSteps": [
        {
          "step": "Navigate to login page",
          "testData": "URL: /login",
          "expectedResult": "Login page displayed"
        }
      ]
    }
  ]
}`}</code></pre>

    <h3>3-6. Excel 형식 특징</h3>
    <ul>
      <li>워크시트 이름: <code>Test Cases</code> 단일 시트</li>
      <li>컬럼 순서: 3-3 그대로 (Folder, Folder Path가 맨 앞)</li>
      <li>UDF + Test Steps (Step No / Step / Test Data / Expected Result는 같은 행에 인라인 4열로 표시)</li>
      <li>첫 행은 헤더(굵게 표시), 필수 필드는 <code>*</code> 표시</li>
    </ul>

    <hr />

    <h2>4. Import (가져오기)</h2>

    <h3>4-1. 진입 경로</h3>
    <p>Test Cases 페이지 상단 액션 바의 <strong>Import</strong> 버튼</p>
    <aside className="guide-callout">Admin / Team Admin만 표시됩니다 (Tester / Developer는 Import 불가).</aside>

    <h3>4-2. 절차</h3>
    <ol>
      <li>상단의 <strong>Import</strong> 버튼 클릭</li>
      <li><strong>Import Template Modal</strong>이 열립니다. 다음 두 가지 작업이 가능합니다:
        <ul>
          <li><strong>템플릿 다운로드</strong> — CSV / Excel / JSON 3가지 형식 중 선택. 템플릿에는 현재 프로젝트의 Priorities, Case Types, Components, User-Defined Fields가 미리 채워져 있어 다운로드 → 데이터 입력 → 그대로 Import 가능합니다</li>
          <li><strong>파일 선택하여 Import</strong> — 이미 준비된 파일이 있으면 바로 업로드</li>
        </ul>
      </li>
      <li>"Select File to Import" 버튼 → OS 파일 선택 다이얼로그 → <code>.csv</code> / <code>.json</code> / <code>.xlsx</code> 선택</li>
      <li>업로드된 파일이 파싱·검증·import됩니다 (별도 매핑 화면, 미리보기 화면, 옵션 선택 화면은 없습니다)</li>
      <li>진행률 다이얼로그가 표시됩니다 (한 번에 최대 <strong>5,000개</strong>)</li>
      <li>완료 후 결과 요약 모달(Added / Updated / Skipped / Failed 카운트)과 경고/실패 목록이 표시됩니다</li>
    </ol>

    <ScreenshotSlot label="Import 메뉴" src={img02} />

    <h3>4-3. Import 동작 방식 (자동 merge 모드)</h3>
    <p>T-CAFE는 항상 <strong>merge 모드</strong>로 import하며, Skip / Overwrite / Create Duplicate 같은 사용자 선택 옵션을 제공하지 않습니다. 동작은 다음과 같이 자동 결정됩니다:</p>
    <ul>
      <li>파일의 <code>key</code>가 기존 TC의 <code>key</code>와 일치하면 → <strong>해당 TC를 부분 업데이트</strong> (입력된 비어있지 않은 필드만 갱신)</li>
      <li>일치하는 TC가 없거나 <code>key</code>가 비어 있으면 → <strong>새 TC 생성</strong>, 새 키 자동 부여 (<code>{'<프로젝트키>-<순번>'}</code>)</li>
      <li>유효하지 않은 행(필수 항목 누락 등)은 <strong>Skipped</strong>로 카운트되며 경고에 사유가 기록됩니다</li>
    </ul>

    <h3>4-3-1. 폴더 자동 생성 (folderPath 기반)</h3>
    <p>Import 시 <code>folder path</code> 컬럼 값에 따라 폴더가 자동 처리됩니다:</p>
    <ul>
      <li><code>folder path</code>가 <strong>지정된 경로 형식</strong>(예: <code>Authentication/Login/OAuth</code>)이면 → 경로의 각 레벨이 <strong>자동 생성</strong>되고 TC가 leaf 폴더에 배정됩니다. 이미 존재하는 폴더는 재사용되어 중복 생성되지 않습니다.</li>
      <li><code>folder path</code>가 <strong>비어 있으면</strong> → 업로드한 파일명에서 확장자를 제거한 이름으로 root-level 폴더가 자동 생성되고 TC가 그 폴더에 배정됩니다 (기존 동작 유지).</li>
      <li>구분자는 <code>/</code> (권장) 또는 <code>{' > '}</code>(legacy 호환) 둘 다 인식됩니다.</li>
    </ul>
    <aside className="guide-callout info">
      <strong>동일 레벨 폴더명 중복 방지</strong>: 같은 부모 폴더 아래에 같은 이름의 폴더는 단 1개만 존재합니다. Import가 같은 경로에 대해 중복 폴더를 만들지 않으므로, 같은 파일을 여러 번 import해도 폴더는 그대로 유지됩니다.
    </aside>

    <h3>4-3-2. 멱등성 (같은 파일 재 import)</h3>
    <p>같은 Export 파일을 다시 import하면:</p>
    <ul>
      <li>Key가 일치하는 모든 TC는 <strong>UPDATE</strong>만 발생, 새 INSERT는 일어나지 않습니다.</li>
      <li>folderPath가 같으면 <strong>같은 폴더가 재사용</strong>되어 새 폴더가 생기지 않습니다.</li>
      <li>결과적으로 <strong>데이터 중복 없이 정합성이 회복</strong>됩니다 — 부분 실패 시 같은 파일을 다시 import하면 안전하게 회복됩니다.</li>
    </ul>

    <h3>4-3-3. 동시 Import 차단 (세션 lock)</h3>
    <p>같은 프로젝트에 대해 Import는 <strong>동시에 1명만</strong> 실행할 수 있습니다:</p>
    <ul>
      <li>다른 사용자가 이미 Import 진행 중이면 → "<strong>Another import is currently in progress for this project. Please try again in a few minutes.</strong>" 메시지가 표시되고 차단됩니다.</li>
      <li>비정상 종료(브라우저 닫기, 네트워크 단절)로 세션이 멈춰도 <strong>5분 이내 자동 회복</strong>되어 다른 사용자가 Import 가능합니다.</li>
    </ul>

    <h3>4-4. 인식되는 컬럼명 (대소문자 무시, 끝의 <code>*</code> 자동 제거)</h3>
    <ul>
      <li><strong>필수</strong>: <code>name</code></li>
      <li><strong>식별</strong>: <code>key</code> — 매칭 시 업데이트, 비어 있으면 신규 생성</li>
      <li><strong>일반 필드</strong>: <code>description</code>, <code>objective</code>, <code>precondition</code>, <code>type</code>(single/factor), <code>case type</code>, <code>priority</code>, <code>owner</code></li>
      <li><strong>폴더</strong>: <code>folder</code>, <code>folder path</code> — <code>folder path</code>가 우선 적용. 경로 형식(<code>A/B/C</code>)이면 중첩 폴더가 자동 생성됨. 둘 다 비어 있으면 파일명으로 폴더 자동 생성</li>
      <li><strong>다중값</strong>: <code>components</code>, <code>labels</code> — 콤마 또는 세미콜론으로 구분</li>
      <li><strong>스텝</strong>: <code>step no</code>, <code>step</code>(또는 <code>step description</code>), <code>test data</code>, <code>expected result</code></li>
      <li><strong>UDF</strong>: Configuration에 정의된 사용자 정의 필드 이름과 일치하면 자동 매핑 (체크박스/숫자/선택형은 적절히 변환). <strong>required UDF가 비어 있으면 해당 행 SKIP</strong></li>
    </ul>

    <h3>4-5. Import 결과 응답</h3>
    <p>완료 후 결과 모달에 다음 값이 표시됩니다:</p>
    <ul>
      <li><strong>Added</strong> — 새로 생성된 TC 개수 (녹색 배지)</li>
      <li><strong>Updated</strong> — 키 매칭으로 업데이트된 TC 개수 (파란 배지)</li>
      <li><strong>Skipped</strong> — 검증 실패로 건너뛴 행 개수 (주황 배지) — name 누락, required UDF 누락 등</li>
      <li><strong>Failed</strong> — INSERT/UPDATE 도중 SQL 에러로 실패한 행 (빨간 배지, 신규)</li>
      <li><strong>warnings</strong> 카테고리화: <strong>Replaced</strong>(invalid 값을 default로 대체), <strong>Excluded</strong>(unknown component/issue 제외), <strong>Skipped</strong>(SKIP 사유), <strong>Other</strong>(기타). 각 항목은 <strong>row 번호</strong>와 함께 표시됩니다.</li>
      <li><strong>Download Log</strong> 버튼으로 텍스트 파일 다운로드 가능 — 외부 도구로 분석할 수 있도록 모든 카테고리(Failed/Replaced/Excluded/Skipped/Other)가 row 번호와 함께 기록됩니다.</li>
    </ul>
    <p>한 번의 Import에서 5,000개를 초과하면 전체가 거부되며 "Import size exceeds maximum limit of 5000 test cases" 에러가 표시됩니다.</p>
    <aside className="guide-callout info">
      <strong>5,000 TC 처리 시간</strong>: 평균 약 20~25초 (500개 batch × 10번 = 약 1.5~2초/batch). Bulk INSERT + 메모리 폴더 캐시로 N+1 쿼리 없이 처리됩니다.
    </aside>

    <hr />

    <h2>5. Test Steps 형식 변환</h2>
    <p>가장 까다로운 부분은 Test Steps의 변환입니다.</p>

    <h3>지원 형식</h3>
    <p>T-CAFE는 다음 두 가지 Test Steps 형식을 지원합니다.</p>

    <h4>형식 A: 스텝마다 별도 행 (CSV / Excel)</h4>
    <pre><code>{`TC Key | Step # | Step | Test Data | Expected
PROJ-1 | 1 | Open | - | Page loads
PROJ-1 | 2 | Type | username | Field filled`}</code></pre>
    <p>같은 TC에 속하는 스텝은 연속된 행으로 작성하되, 2번째 행부터는 TC Name/Key를 비워두면 앞 행의 TC에 이어지는 스텝으로 인식됩니다.</p>

    <h4>형식 B: JSON 배열 (T-CAFE 권장)</h4>
    <pre><code>{`[
 {"step": "Open page", "testData": "-", "expectedResult": "Page loads"},
 {"step": "Type username", "testData": "user1", "expectedResult": "Field filled"}
]`}</code></pre>
    <p>JSON Import 시 각 TC의 <code>testSteps</code> 필드에 배열로 넣으면 가장 명확하고 안전하게 전달됩니다.</p>

    <h3>변환 팁</h3>
    <ul>
      <li>한 셀에 모든 스텝을 구분자(<code>|</code>, <code>;</code>, <code>\n</code>)로 이어붙이는 방식은 지원하지 않습니다 → 행 단위로 분리</li>
      <li>CSV 셀 내부에 줄바꿈을 넣으려면 반드시 따옴표로 감싸세요 (스텝 내부 설명에만 사용 권장)</li>
      <li>빈 값은 셀을 비워두세요 — <code>-</code>나 <code>N/A</code> 같은 표시는 그대로 텍스트로 저장됩니다</li>
    </ul>

    <hr />

    <h2>6. Import/Export 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>Import Template Modal에서 템플릿 다운로드</strong>: 현재 프로젝트의 Priority/Case Type/Component/UDF가 미리 채워져 있어 검증 오류가 줄어듭니다</li>
      <li><strong>소량으로 먼저 테스트</strong>: 5~10개로 Import 테스트 후 전체 진행</li>
      <li><strong>백업 후 Import</strong>: 기존 데이터를 먼저 Export하여 보관</li>
      <li><strong>인코딩 확인</strong>: UTF-8 (한글 사용 시 BOM 권장)</li>
      <li><strong>컬럼명 확인</strong>: 인식되는 컬럼명(4-4)에 맞춰 헤더 작성</li>
      <li><strong>folder path 활용</strong>: 중첩 폴더 구조를 유지하려면 <code>folder path</code> 컬럼에 <code>A/B/C</code> 형식으로 작성</li>
      <li><strong>5,000건 단위 분할</strong>: 한 번에 5,000건 초과 시 거부됨</li>
      <li><strong>실패 시 같은 파일 재 import</strong>: 멱등성이 보장되므로 부분 실패 후 재 import해도 안전</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>5,000건 초과 단일 파일 (자동 거부됨)</li>
      <li>같은 <code>key</code>를 가진 행을 두 번 Import (merge 모드라 두 번째에 업데이트 발생) — 단, <strong>의도적 멱등성 활용</strong>은 OK</li>
      <li>Configuration(Priority / Case Type / Component) 미설정 상태로 Import — 검증 오류 다수 발생</li>
      <li>같은 프로젝트에 두 사람이 동시 Import — 두 번째 사용자는 차단됨</li>
      <li>Folder Path에 <code>/</code> 문자가 포함된 폴더명 사용 (구분자로 잘못 인식됨)</li>
    </ul>

    <hr />

    <h2>7. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Import 버튼이 안 보임</td><td>권한 없음</td><td>Admin / Team Admin 권한 필요 혹은 Role에서 수정 후 저장</td></tr>
        <tr><td>"Another import is currently in progress" 메시지</td><td>다른 사용자가 같은 프로젝트에 Import 진행 중</td><td>해당 사용자가 끝날 때까지 대기. 비정상 종료라면 5분 후 자동 회복</td></tr>
        <tr><td>"Import session has expired" 메시지</td><td>Import 도중 세션이 5분간 heartbeat 끊김 (네트워크 단절 등)</td><td>같은 파일로 재 Import (멱등성 보장)</td></tr>
        <tr><td>한글이 깨짐</td><td>인코딩 문제</td><td>UTF-8 또는 UTF-8 BOM으로 저장</td></tr>
        <tr><td>일부 행이 Skipped 처리됨</td><td>name 누락, required UDF 누락, 또는 validation 실패</td><td>결과 모달의 Skipped 카테고리에서 row 번호와 사유 확인 후 해당 행 보완</td></tr>
        <tr><td>일부 행이 Failed 처리됨</td><td>SQL 에러 (key 충돌, 길이 초과 등)</td><td>결과 모달의 Failed 카테고리에서 row 번호와 에러 확인. Download Log로 세부 분석</td></tr>
        <tr><td>Priority / Case Type / Component가 default로 변경됨</td><td>파일의 값이 Configuration에 없음</td><td>결과 모달의 Replaced 카테고리 확인. Configuration에서 항목 정의 후 재 Import</td></tr>
        <tr><td>같은 폴더가 두 번 생기지 않음 (좋은 동작)</td><td>UNIQUE 제약으로 동일 레벨 중복 차단</td><td>의도된 동작 — 같은 파일을 여러 번 import해도 폴더는 그대로 유지됨</td></tr>
        <tr><td>중첩 폴더가 자동 생성됨 (좋은 동작)</td><td>folder path 컬럼에 <code>A/B/C</code> 형식이 있음</td><td>의도된 동작 — 모든 중간 폴더가 부모→자식 순서로 자동 생성됨</td></tr>
        <tr><td>"Import size exceeds maximum limit of 5000" 에러</td><td>한 파일에 5,000개 초과</td><td>여러 파일로 분할해 순차 Import</td></tr>
        <tr><td>Folder Path 컬럼은 있는데 폴더가 안 생김</td><td>구분자가 잘못됨 (지원: <code>/</code>, <code>{' > '}</code>)</td><td><code>/</code> 또는 <code>{' > '}</code> 사용. 다른 구분자(<code>\\</code>, <code>|</code> 등)는 인식 안 됨</td></tr>
        <tr><td>같은 키의 TC가 의도치 않게 수정됨</td><td>merge 모드 — key 일치 시 업데이트 (멱등성 동작)</td><td>새 TC로 만들고 싶다면 파일에서 <code>key</code> 컬럼을 비워 두기</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>8. Export 활용 사례</h2>

    <h3>8-1. 주간 보고</h3>
    <ul>
      <li>매주 금요일 Test Cases → Export → 진행 상황 보고서</li>
    </ul>

    <h3>8-2. 외부 백업</h3>
    <ul>
      <li>매월 1회 전체 TC를 JSON으로 Export → 외부 저장소 보관</li>
    </ul>

    <h3>8-3. 다른 팀 공유</h3>
    <ul>
      <li>특정 폴더만 Export → 다른 팀에 Excel로 전달</li>
    </ul>

    <h3>8-4. 감사 자료</h3>
    <ul>
      <li>특정 시점의 TC 전체 Export → 감사 증빙</li>
    </ul>

    <h3>8-5. 분석</h3>
    <ul>
      <li>CSV Export → 엑셀 피벗 테이블로 분석</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스</Link></li>
      <li><Link to="/support/guide/test-reports">12. 테스트 리포트</Link></li>
      <li><Link to="/support/guide/configuration">13. Configuration</Link></li>
    </ul>
  </article>
);

export default ImportExport;
