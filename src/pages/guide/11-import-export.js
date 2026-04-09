import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const ImportExport = () => (
  <article className="guide-article">
    <h1>11. Import / Export</h1>
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
    <p>Test Cases 페이지 → 상단 또는 우측 <strong>Export</strong> 버튼</p>

    <h3>3-2. 절차</h3>
    <ol>
      <li><strong>Export</strong> 버튼 클릭</li>
      <li>형식 선택 (CSV / JSON / Excel)</li>
      <li>범위 선택:
        <ul>
          <li><strong>현재 폴더</strong>: 선택한 폴더의 TC만</li>
          <li><strong>전체 프로젝트</strong>: 모든 폴더의 TC</li>
          <li><strong>선택한 TC</strong>: 체크박스로 선택한 TC만</li>
          <li><strong>필터 결과</strong>: 현재 적용된 필터의 결과만</li>
        </ul>
      </li>
      <li><strong>Download</strong> 클릭</li>
    </ol>

    <ScreenshotSlot label="Export 다이얼로그" />

    <h3>3-3. Export 항목 (기본)</h3>
    <ul>
      <li>TC Key (예: PROJ-1)</li>
      <li>Name</li>
      <li>Description</li>
      <li>Priority</li>
      <li>Case Type</li>
      <li>Folder</li>
      <li>Components</li>
      <li>Labels</li>
      <li>Owner</li>
      <li>Precondition</li>
      <li>Test Steps (각 스텝의 Step / Test Data / Expected Result)</li>
      <li>User Defined Fields (UDF 정의가 있다면)</li>
      <li>Linked Issues</li>
      <li>Created Date / Updated Date</li>
    </ul>

    <h3>3-4. CSV 형식 예시</h3>
    <pre><code>{`TC Key,Name,Priority,Case Type,Folder,Components,Labels,Steps
PROJ-1,Login with valid credentials,High,Function,Login,"Frontend,Authentication","smoke,critical","Step 1: Open page | Expected: Page loads"
PROJ-2,Login with invalid password,Medium,Function,Login,"Frontend,Authentication",negative,"Step 1: Open page | Step 2: Enter wrong password"`}</code></pre>

    <h3>3-5. JSON 형식 예시</h3>
    <pre><code>{`{
 "exportDate": "2026-04-08T10:00:00Z",
 "project": "PROJ",
 "testCases": [
 {
 "key": "PROJ-1",
 "name": "Login with valid credentials",
 "description": "Verify user can login",
 "priority": "High",
 "caseType": "Function",
 "folder": "Login",
 "components": ["Frontend", "Authentication"],
 "labels": ["smoke", "critical"],
 "owner": "John Doe",
 "precondition": "User account exists",
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
      <li>첫 시트: Test Cases</li>
      <li>컬럼: 기본 Export 항목 모두</li>
      <li>Test Steps는 별도 시트 또는 인라인 표시</li>
      <li>필터/정렬 적용된 상태로 저장 가능</li>
    </ul>

    <hr />

    <h2>4. Import (가져오기)</h2>

    <h3>4-1. 진입 경로</h3>
    <p>Test Cases 페이지 → 상단 또는 우측 <strong>Import</strong> 버튼</p>
    <aside className="guide-callout">Admin / Team Admin만 표시됩니다</aside>

    <h3>4-2. 절차</h3>
    <ol>
      <li><strong>Import</strong> 버튼 클릭</li>
      <li>형식 선택 (CSV / JSON / Excel)</li>
      <li>파일 업로드 (드래그 앤 드롭 또는 파일 선택)</li>
      <li><strong>매핑 화면</strong>: T-CAFE 필드와 파일의 컬럼을 매핑</li>
      <li><strong>미리보기</strong>: Import될 데이터 확인</li>
      <li>충돌 처리 옵션 선택 (아래 4-5 참고)</li>
      <li><strong>Import</strong> 클릭</li>
    </ol>

    <ScreenshotSlot label="Import 다이얼로그" />

    <h3>4-3. 필수 컬럼</h3>
    <ul>
      <li><strong>Name</strong> (TC 이름)</li>
      <li><strong>Folder</strong> (대상 폴더 — 없으면 자동 생성)</li>
    </ul>

    <h3>4-4. 권장 컬럼</h3>
    <ul>
      <li>Description</li>
      <li>Priority</li>
      <li>Case Type</li>
      <li>Components</li>
      <li>Labels</li>
      <li>Precondition</li>
      <li>Test Steps</li>
    </ul>

    <h3>4-5. 충돌 처리 옵션</h3>
    <p>같은 이름의 TC가 이미 존재하는 경우:</p>
    <table>
      <thead>
        <tr><th>옵션</th><th>동작</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Skip</strong></td><td>기존 TC 유지, 새 TC 무시</td></tr>
        <tr><td><strong>Overwrite</strong></td><td>기존 TC를 새 데이터로 덮어쓰기</td></tr>
        <tr><td><strong>Create Duplicate</strong></td><td>둘 다 유지 (이름에 (1), (2) 등 추가)</td></tr>
      </tbody>
    </table>
    <p>→ 일반적으로 <strong>Skip</strong>이 가장 안전합니다.</p>

    <h3>4-6. Import 결과</h3>
    <p>Import 완료 후 결과 요약 표시:</p>
    <ul>
      <li><strong>Created</strong>: 새로 생성된 TC 개수</li>
      <li><strong>Updated</strong>: 업데이트된 TC 개수</li>
      <li><strong>Skipped</strong>: 건너뛴 TC 개수</li>
      <li><strong>Failed</strong>: 실패한 TC 개수 (사유와 함께)</li>
    </ul>

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
      <li><strong>소량으로 먼저 테스트</strong>: 5~10개 TC로 Import 테스트 후 전체 진행</li>
      <li><strong>백업 후 Import</strong>: 기존 데이터를 먼저 Export로 백업</li>
      <li><strong>인코딩 확인</strong>: UTF-8 (한글 사용 시 BOM 권장)</li>
      <li><strong>컬럼 매핑 확인</strong>: 한 번 잘못 매핑하면 데이터 손상</li>
      <li><strong>충돌 옵션 신중 선택</strong>: Overwrite는 신중하게</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>1000개 이상을 한 번에 Import (실패 시 복구 어려움)</li>
      <li>같은 파일을 두 번 Import (중복 발생)</li>
      <li>Configuration 미설정 상태로 Import (Priority 매핑 실패)</li>
      <li>백업 없이 Overwrite</li>
    </ul>

    <hr />

    <h2>8. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Import 버튼이 안 보임</td><td>권한 없음</td><td>Admin/Team Admin 필요</td></tr>
        <tr><td>한글이 깨짐</td><td>인코딩 문제</td><td>UTF-8 BOM으로 저장</td></tr>
        <tr><td>일부 TC만 Import됨</td><td>필수 항목 누락</td><td>Failed 항목 확인, 누락 컬럼 보완</td></tr>
        <tr><td>Priority가 매핑 안 됨</td><td>Configuration에 해당 Priority 없음</td><td>Configuration → Priorities 추가</td></tr>
        <tr><td>Test Steps가 합쳐짐</td><td>구분자 문제</td><td>구분자 통일 후 재시도</td></tr>
        <tr><td>Folder가 자동 생성 안 됨</td><td>Folder 컬럼 비어 있음</td><td>Folder 컬럼 필수</td></tr>
        <tr><td>Excel 파일이 너무 큼</td><td>데이터 많음</td><td>여러 파일로 분할</td></tr>
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
      <li><Link to="/support/guide/test-cases">03. 테스트 케이스</Link></li>
      <li><Link to="/support/guide/test-reports">09. 테스트 리포트</Link></li>
      <li><Link to="/support/guide/configuration">10. Configuration</Link></li>
    </ul>
  </article>
);

export default ImportExport;
