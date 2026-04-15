import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

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
    <p>Test Cases 페이지 상단 액션 바의 <strong>Export</strong> 버튼 (canExport 권한 보유자에게만 표시)</p>

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

    <ScreenshotSlot label="Export 메뉴" />

    <h3>3-3. Export 항목 (실제 출력 필드)</h3>
    <ul>
      <li><strong>Key</strong> (예: PROJ-1)</li>
      <li><strong>Name</strong></li>
      <li><strong>Description</strong></li>
      <li><strong>Objective</strong></li>
      <li><strong>Precondition</strong></li>
      <li><strong>Type</strong> (single / factor)</li>
      <li><strong>Case Type</strong></li>
      <li><strong>Priority</strong></li>
      <li><strong>Owner</strong></li>
      <li><strong>Components</strong>, <strong>Labels</strong></li>
      <li><strong>Folder</strong>, <strong>Folder Path</strong></li>
      <li><strong>User Defined Fields (UDF)</strong> — 정의된 필드 각각이 별도 컬럼으로 추가 (필수 필드는 헤더에 <code>*</code> 표시)</li>
      <li><strong>Test Steps</strong> — Step No / Step / Test Data / Expected Result</li>
    </ul>
    <aside className="guide-callout info">
      현재 Export에는 <strong>Linked Issues</strong>, <strong>Created Date</strong>, <strong>Updated Date</strong> 필드가 포함되지 않습니다. 필요 시 별도 화면(목록 컬럼 노출)에서 확인하세요.
    </aside>

    <h3>3-4. CSV 형식 예시</h3>
    <pre><code>{`TC Key,Name,Priority,Case Type,Folder,Components,Labels,Steps
PROJ-1,Login with valid credentials,High,Function,Login,"Frontend,Authentication","smoke,critical","Step 1: Open page | Expected: Page loads"
PROJ-2,Login with invalid password,Medium,Function,Login,"Frontend,Authentication",negative,"Step 1: Open page | Step 2: Enter wrong password"`}</code></pre>

    <h3>3-5. JSON 형식 예시 (실제 구조)</h3>
    <pre><code>{`{
  "exportInfo": {
    "timestamp": "2026-04-15T10:00:00.000Z",
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
      "folder": "Login",
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
      <li>컬럼: §3-3에 나열된 모든 필드 + UDF + Test Steps (Step No / Step / Test Data / Expected Result는 같은 행에 인라인 4열로 표시)</li>
      <li>첫 행은 헤더(굵게 표시), 필수 필드는 <code>*</code> 표시</li>
      <li>차트는 포함되지 않음</li>
    </ul>

    <hr />

    <h2>4. Import (가져오기)</h2>

    <h3>4-1. 진입 경로</h3>
    <p>Test Cases 페이지 상단 액션 바의 <strong>Import</strong> 버튼 (canImport 권한 보유자에게만 표시)</p>
    <aside className="guide-callout">Admin / Team Admin만 표시됩니다 (Tester / Developer는 Import 불가).</aside>

    <h3>4-2. 절차</h3>
    <ol>
      <li>상단의 <strong>Import</strong> 버튼 클릭</li>
      <li>OS 파일 선택 다이얼로그가 열리며 <code>.csv</code> / <code>.json</code> / <code>.xlsx</code> 파일을 선택</li>
      <li>업로드된 파일이 즉시 파싱·검증·import됩니다 (별도 매핑 화면, 미리보기 화면, 옵션 선택 화면은 없습니다)</li>
      <li>진행률 다이얼로그가 표시되며 배치 단위로 처리됩니다 (한 번에 최대 <strong>5,000개</strong>)</li>
      <li>완료 후 결과 요약과 경고 목록이 표시됩니다</li>
    </ol>

    <ScreenshotSlot label="Import 진행 화면" />

    <h3>4-3. Import 동작 방식 (자동 merge 모드)</h3>
    <p>T-CAFE는 항상 <strong>merge 모드</strong>로 import하며, Skip / Overwrite / Create Duplicate 같은 사용자 선택 옵션을 제공하지 않습니다. 동작은 다음과 같이 자동 결정됩니다:</p>
    <ul>
      <li>파일의 <code>key</code>가 기존 TC의 <code>key</code>와 일치하면 → <strong>해당 TC를 부분 업데이트</strong> (입력된 비어있지 않은 필드만 갱신)</li>
      <li>일치하는 TC가 없거나 <code>key</code>가 비어 있으면 → <strong>새 TC 생성</strong>, 새 키 자동 부여 (<code>{'<프로젝트키>-<순번>'}</code>)</li>
      <li>유효하지 않은 행(필수 항목 누락 등)은 <strong>Skipped</strong>로 카운트되며 경고에 사유가 기록됩니다</li>
    </ul>

    <h3>4-4. 인식되는 컬럼명 (대소문자 무시, 끝의 <code>*</code> 자동 제거)</h3>
    <ul>
      <li><strong>필수</strong>: <code>name</code></li>
      <li><strong>식별</strong>: <code>key</code> — 매칭 시 업데이트, 비어 있으면 신규 생성</li>
      <li><strong>일반 필드</strong>: <code>description</code>, <code>objective</code>, <code>precondition</code>, <code>type</code>(single/factor), <code>case type</code>, <code>priority</code>, <code>owner</code></li>
      <li><strong>폴더</strong>: <code>folder</code>, <code>folderid</code>, <code>folder path</code> — 비어 있으면 <strong>업로드한 파일명에서 확장자를 제거한 이름으로 폴더가 자동 생성</strong>됩니다 (Folder 컬럼은 필수가 아님)</li>
      <li><strong>다중값</strong>: <code>components</code>, <code>labels</code> — 콤마 또는 세미콜론으로 구분</li>
      <li><strong>스텝</strong>: <code>step no</code>, <code>step</code>(또는 <code>step description</code>), <code>test data</code>, <code>expected result</code></li>
      <li><strong>UDF</strong>: Configuration에 정의된 사용자 정의 필드 이름과 일치하면 자동 매핑 (체크박스/숫자/선택형은 적절히 변환)</li>
    </ul>

    <h3>4-5. Import 결과 응답</h3>
    <p>완료 후 다음 값이 반환됩니다:</p>
    <ul>
      <li><strong>addedCount</strong> — 새로 생성된 TC 개수</li>
      <li><strong>updatedCount</strong> — 키 매칭으로 업데이트된 TC 개수</li>
      <li><strong>skippedCount</strong> — 검증 실패로 건너뛴 행 개수</li>
      <li><strong>warnings</strong> — 경고 메시지 목록 (어느 행에서 어떤 문제가 있었는지)</li>
    </ul>
    <p>한 번의 Import에서 5,000개를 초과하면 전체가 거부되며 "Import size exceeds maximum limit of 5000 test cases" 에러가 표시됩니다.</p>

    <hr />

    <h2>5. 다른 도구에서 마이그레이션</h2>

    <h3>5-1. Excel/CSV에서 가져오기</h3>
    <p><strong>시나리오</strong>: QA 팀이 Excel로 관리하던 TC를 T-CAFE로 옮기기</p>

    <p><strong>준비</strong>:</p>
    <ol>
      <li>Excel 파일을 정리:
        <ul>
          <li>첫 행: 컬럼명 (Name, Description, Priority, Steps...)</li>
          <li>한 행 = 한 TC</li>
        </ul>
      </li>
      <li>UTF-8 또는 UTF-8 BOM 인코딩으로 저장 (한글 깨짐 방지)</li>
      <li>빈 행 제거</li>
    </ol>

    <p><strong>Import</strong>:</p>
    <ol>
      <li>Configuration → Priorities, Case Types, Components가 미리 정의되어 있는지 확인</li>
      <li>Import 실행</li>
      <li>매핑 단계에서 컬럼 정확히 매핑</li>
      <li>Skip 옵션으로 중복 방지</li>
    </ol>

    <h3>5-2. Xray에서 마이그레이션</h3>
    <p><strong>Xray Export</strong>:</p>
    <ol>
      <li>Xray에서 Test Repository → Export → Excel</li>
      <li>다운로드된 파일을 T-CAFE의 Import 형식에 맞게 정리</li>
    </ol>

    <p><strong>T-CAFE Import</strong>:</p>
    <ol>
      <li>Test Steps 형식이 다를 수 있으므로 정리 필요</li>
      <li>Xray의 "Step / Data / Result" → T-CAFE의 "Step / Test Data / Expected Result"</li>
    </ol>

    <h3>5-3. Zephyr Scale에서 마이그레이션</h3>
    <p><strong>Zephyr Scale Export</strong>:</p>
    <ol>
      <li>Zephyr Scale REST API 또는 Excel Export</li>
      <li>컬럼 매핑 작업 필요</li>
    </ol>

    <h3>5-4. TestRail에서 마이그레이션</h3>
    <p><strong>TestRail Export</strong>:</p>
    <ol>
      <li>TestRail에서 CSV 또는 XML Export</li>
      <li>CSV를 T-CAFE 형식에 맞게 변환</li>
      <li>T-CAFE Import</li>
    </ol>

    <hr />

    <h2>6. Test Steps 형식 변환</h2>
    <p>가장 까다로운 부분은 Test Steps의 변환입니다.</p>

    <h3>일반적인 표현 방식</h3>

    <h4>형식 A: 한 컬럼에 모든 스텝</h4>
    <pre><code>{`Step 1: Open page | Step 2: Enter credentials | Step 3: Click login`}</code></pre>

    <h4>형식 B: 스텝마다 별도 행</h4>
    <pre><code>{`TC Key | Step # | Step | Test Data | Expected
PROJ-1 | 1 | Open | - | Page loads
PROJ-1 | 2 | Type | username | Field filled`}</code></pre>

    <h4>형식 C: JSON 배열 (T-CAFE 권장)</h4>
    <pre><code>{`[
 {"step": "Open page", "testData": "-", "expectedResult": "Page loads"},
 {"step": "Type username", "testData": "user1", "expectedResult": "Field filled"}
]`}</code></pre>

    <h3>변환 팁</h3>
    <ul>
      <li>도구마다 구분자가 다름 (<code>|</code>, <code>;</code>, <code>\n</code> 등) → 미리 통일</li>
      <li>줄바꿈은 <code>\n</code> 또는 <code>{'<br>'}</code>로 통일</li>
      <li>빈 값은 <code>-</code> 또는 빈 문자열로 통일</li>
    </ul>

    <hr />

    <h2>7. Import/Export 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>소량으로 먼저 테스트</strong>: 5~10개로 Import 테스트 후 전체 진행</li>
      <li><strong>백업 후 Import</strong>: 기존 데이터를 먼저 Export하여 보관</li>
      <li><strong>인코딩 확인</strong>: UTF-8 (한글 사용 시 BOM 권장)</li>
      <li><strong>컬럼명 확인</strong>: 인식되는 컬럼명(§4-4)에 맞춰 헤더 작성</li>
      <li><strong>5,000건 단위 분할</strong>: 한 번에 5,000건 초과 시 거부됨</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>5,000건 초과 단일 파일 (자동 거부됨)</li>
      <li>같은 <code>key</code>를 가진 행을 두 번 Import (merge 모드라 두 번째에 업데이트 발생)</li>
      <li>Configuration(Priority / Case Type / Component) 미설정 상태로 Import</li>
      <li>백업 없이 기존 키와 충돌 가능한 데이터 import (자동 업데이트됨)</li>
    </ul>

    <hr />

    <h2>8. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Import 버튼이 안 보임</td><td>권한 없음</td><td>Admin / Team Admin 권한 필요</td></tr>
        <tr><td>한글이 깨짐</td><td>인코딩 문제</td><td>UTF-8 또는 UTF-8 BOM으로 저장</td></tr>
        <tr><td>일부 행이 Skipped 처리됨</td><td>name 누락 또는 잘못된 형식 (validateAndNormalizeTC 실패)</td><td>warnings에 표시된 사유 확인 후 해당 행 보완</td></tr>
        <tr><td>Priority / Case Type / Component가 적용 안 됨</td><td>Configuration에 해당 항목이 없음</td><td>Configuration에서 먼저 항목 정의 후 재 Import</td></tr>
        <tr><td>"Import size exceeds maximum limit of 5000" 에러</td><td>한 파일에 5,000개 초과</td><td>여러 파일로 분할해 순차 Import</td></tr>
        <tr><td>Folder가 의도와 다르게 생성됨</td><td>Folder 컬럼이 비어 있어 파일명으로 자동 생성</td><td>의도한 폴더에 들어가도록 파일에 <code>folder</code> 컬럼 채우기</td></tr>
        <tr><td>같은 키의 TC가 의도치 않게 수정됨</td><td>merge 모드 — key 일치 시 업데이트</td><td>새 TC로 만들고 싶다면 파일에서 <code>key</code> 컬럼을 비워 두기</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>9. Export 활용 사례</h2>

    <h3>9-1. 주간 보고</h3>
    <ul>
      <li>매주 금요일 Test Cases → Export → 진행 상황 보고서</li>
    </ul>

    <h3>9-2. 외부 백업</h3>
    <ul>
      <li>매월 1회 전체 TC를 JSON으로 Export → 외부 저장소 보관</li>
    </ul>

    <h3>9-3. 다른 팀 공유</h3>
    <ul>
      <li>특정 폴더만 Export → 다른 팀에 Excel로 전달</li>
    </ul>

    <h3>9-4. 감사 자료</h3>
    <ul>
      <li>특정 시점의 TC 전체 Export → 감사 증빙</li>
    </ul>

    <h3>9-5. 분석</h3>
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
