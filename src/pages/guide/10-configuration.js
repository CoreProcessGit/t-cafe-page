import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const Configuration = () => (
  <article className="guide-article">
    <h1>10. Configuration (설정)</h1>
    <p className="guide-lead">
      Configuration은 T-CAFE의 마스터 데이터를 관리하는 페이지입니다. <strong>Admin / Team Admin</strong>이 접근할 수 있으며, 프로젝트 전체의 동작 방식을 결정합니다.
    </p>

    <hr />

    <h2>1. 진입 경로</h2>
    <p>상단 탭 → <strong>Configuration</strong></p>
    <aside className="guide-callout"><strong>Admin / Team Admin 권한이 없으면 이 탭이 보이지 않습니다</strong> (Tester / Developer는 접근 불가).</aside>

    <h3>Configuration 탭의 좌측 메뉴</h3>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>User Permissions</strong></td><td>사용자 역할 관리</td></tr>
        <tr><td><strong>Priorities</strong></td><td>우선순위 정의</td></tr>
        <tr><td><strong>Case Types</strong></td><td>케이스 타입 정의</td></tr>
        <tr><td><strong>Components</strong></td><td>컴포넌트 정의</td></tr>
        <tr><td><strong>Plan Status</strong></td><td>테스트 플랜 상태 정의</td></tr>
        <tr><td><strong>User Defined Fields (UDF)</strong></td><td>사용자 정의 필드</td></tr>
        <tr><td><strong>Issue Types</strong></td><td>Jira 이슈 타입 조회</td></tr>
        <tr><td><strong>General Settings</strong></td><td>일반 설정</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Configuration 메인 화면" />

    <hr />

    <h2>2. User Permissions (사용자 권한 관리)</h2>

    <h3>2-1. 화면 구성</h3>
    <ul>
      <li>프로젝트 사용자 목록</li>
      <li>각 사용자의 현재 역할</li>
      <li>역할 변경 드롭다운</li>
    </ul>

    <h3>2-2. 사용자 추가</h3>
    <ul>
      <li><strong>자동 추가</strong>: Jira 프로젝트의 모든 사용자가 자동으로 표시됨</li>
      <li><strong>수동 추가</strong>: 별도 추가 작업 불필요</li>
    </ul>

    <h3>2-3. 역할 변경</h3>
    <ol>
      <li>변경할 사용자 행에서 역할 드롭다운 클릭</li>
      <li>새 역할 선택 (Admin / Team Admin / Tester / Developer)</li>
      <li>자동 저장됨</li>
    </ol>

    <h3>2-4. 마지막 Admin 보호</h3>
    <ul>
      <li>프로젝트의 마지막 Admin은 <strong>삭제하거나 다른 역할로 변경할 수 없습니다</strong></li>
      <li>시스템이 자동으로 차단합니다</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/permissions">02. 사용자 권한</Link> 참고</p>

    <hr />

    <h2>3. Priorities (우선순위)</h2>
    <p>테스트 케이스의 우선순위를 정의합니다.</p>

    <h3>3-1. 기본 제공 우선순위</h3>
    <p>샘플 데이터 생성 시 다음이 자동 추가됩니다:</p>
    <ul>
      <li><strong>Critical</strong> (빨강)</li>
      <li><strong>High</strong> (주황)</li>
      <li><strong>Medium</strong> (노랑) — 기본값</li>
      <li><strong>Low</strong> (녹색)</li>
    </ul>

    <h3>3-2. 우선순위 추가</h3>
    <ol>
      <li>Configuration → <strong>Priorities</strong></li>
      <li><strong>+ Add Priority</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수): 예 "긴급", "차단", "Trivial"</li>
          <li><strong>Color</strong>: 색상 코드 (HEX)</li>
          <li><strong>Bar Level</strong>: 막대 레벨 (1-3)</li>
          <li><strong>Order</strong>: 정렬 순서</li>
          <li><strong>Is Default</strong>: 기본값 여부 (한 개만 가능)</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <ScreenshotSlot label="Priority 추가" />

    <h3>3-3. 우선순위 수정</h3>
    <ul>
      <li>행을 클릭하여 인라인 편집</li>
      <li>또는 Edit 버튼</li>
    </ul>

    <h3>3-4. 우선순위 삭제</h3>
    <ul>
      <li>Delete 버튼</li>
      <li>사용 중인 우선순위는 삭제 시 해당 TC가 영향받음</li>
    </ul>

    <hr />

    <h2>4. Case Types (케이스 타입)</h2>
    <p>테스트 케이스의 종류를 정의합니다.</p>

    <h3>4-1. 기본 제공 케이스 타입</h3>
    <ul>
      <li><strong>Function</strong> (기본값) — 기능 테스트</li>
      <li><strong>Performance</strong> — 성능 테스트</li>
      <li><strong>Security</strong> — 보안 테스트</li>
      <li><strong>UI/UX</strong> — UI/UX 테스트</li>
      <li><strong>API</strong> — API 테스트</li>
      <li><strong>Regression</strong> — 회귀 테스트</li>
    </ul>

    <h3>4-2. 케이스 타입 추가</h3>
    <ol>
      <li>Configuration → <strong>Case Types</strong></li>
      <li><strong>+ Add Case Type</strong> 클릭</li>
      <li><strong>Name</strong> 입력 (예: "Usability", "Compatibility")</li>
      <li><strong>Is Default</strong> 설정 (선택)</li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>4-3. 케이스 타입 활용</h3>
    <ul>
      <li>TC 생성 시 드롭다운으로 선택</li>
      <li>리포트에서 케이스 타입별 통계 확인 가능</li>
    </ul>

    <hr />

    <h2>5. Components (컴포넌트)</h2>
    <p>테스트 대상의 구성 요소를 정의합니다. 다중 선택 가능합니다.</p>

    <h3>5-1. 기본 제공 컴포넌트</h3>
    <ul>
      <li><strong>Frontend</strong> — UI/UX 컴포넌트</li>
      <li><strong>Backend API</strong> — 백엔드 API 서비스</li>
      <li><strong>Database</strong> — DB 관련</li>
      <li><strong>Authentication</strong> — 인증/인가</li>
      <li><strong>Payment</strong> — 결제 시스템</li>
    </ul>

    <h3>5-2. 컴포넌트 추가</h3>
    <ol>
      <li>Configuration → <strong>Components</strong></li>
      <li><strong>+ Add Component</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수)</li>
          <li><strong>Description</strong> (선택)</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>5-3. 컴포넌트 활용</h3>
    <ul>
      <li>TC에 다중 컴포넌트 부여 가능 (예: "User Login" → Frontend, Authentication, Backend API)</li>
      <li>리포트에서 컴포넌트별 결함률 확인</li>
    </ul>

    <hr />

    <h2>6. Plan Status (플랜 상태)</h2>
    <p>테스트 플랜의 상태를 정의합니다.</p>

    <h3>6-1. 기본 제공 상태</h3>
    <ul>
      <li><strong>Draft</strong> — 초안 (기본값)</li>
      <li><strong>Open</strong> — 실행 가능</li>
      <li><strong>Completed</strong> — 완료</li>
    </ul>
    <aside className="guide-callout">필요 시 "In Progress", "Closed" 등 사용자 정의 상태를 직접 추가할 수 있습니다 (아래 6-2 참고).</aside>

    <h3>6-2. 상태 추가</h3>
    <ol>
      <li>Configuration → <strong>Plan Status</strong></li>
      <li><strong>+ Add Status</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수)</li>
          <li><strong>Description</strong></li>
          <li><strong>Color</strong></li>
          <li><strong>Order</strong></li>
          <li><strong>Is Default</strong>: 새 TP의 기본 상태</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <ScreenshotSlot label="Plan Status 관리" />

    <h3>6-3. 사용자 정의 상태 예시</h3>
    <ul>
      <li><strong>Review</strong> — 리뷰 대기</li>
      <li><strong>Approved</strong> — 승인됨</li>
      <li><strong>On Hold</strong> — 보류</li>
      <li><strong>Cancelled</strong> — 취소</li>
    </ul>

    <hr />

    <h2>7. User Defined Fields (UDF)</h2>
    <p>표준 필드 외에 추가로 정의하는 사용자 지정 필드입니다.</p>

    <h3>7-1. UDF 타입</h3>
    <table>
      <thead>
        <tr><th>타입</th><th>영문</th><th>예시</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>텍스트</strong></td><td>Text</td><td>"특이사항"</td></tr>
        <tr><td><strong>숫자</strong></td><td>Number</td><td>"예상 소요 시간(분)"</td></tr>
        <tr><td><strong>드롭다운</strong></td><td>Dropdown</td><td>"테스트 환경" (Dev/Stage/Prod)</td></tr>
        <tr><td><strong>체크박스</strong></td><td>Checkbox</td><td>"자동화 가능"</td></tr>
        <tr><td><strong>날짜</strong></td><td>Date</td><td>"마지막 검토일"</td></tr>
        <tr><td><strong>시간</strong></td><td>Time</td><td>"실행 시작 시각"</td></tr>
        <tr><td><strong>년도</strong></td><td>Year</td><td>"발견 연도"</td></tr>
        <tr><td><strong>월</strong></td><td>Month</td><td>"릴리스 월"</td></tr>
      </tbody>
    </table>

    <h3>7-2. UDF 추가</h3>
    <ol>
      <li>Configuration → <strong>User Defined Fields</strong></li>
      <li><strong>+ Add Field</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수)</li>
          <li><strong>Type</strong> (필수)</li>
          <li><strong>Default Value</strong> (선택)</li>
          <li><strong>Required</strong> 여부</li>
          <li><strong>Apply to</strong>: TC / TP / 둘 다</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <ScreenshotSlot label="UDF 추가" />

    <h3>7-3. UDF 활용</h3>
    <ul>
      <li>TC 생성 화면에 UDF 항목 자동 표시</li>
      <li>검색/필터에서 UDF로 검색 가능</li>
      <li>Export 시 UDF도 포함됨</li>
    </ul>

    <hr />

    <h2>8. Issue Types (Jira 이슈 타입)</h2>
    <p>Jira의 이슈 타입을 조회만 합니다 (편집 불가).</p>

    <h3>사용 사례</h3>
    <ul>
      <li>TPTC Fail 시 어떤 이슈 타입으로 생성할지 미리 확인</li>
      <li>프로젝트의 이슈 타입 워크플로 점검</li>
    </ul>

    <h3>표시 정보</h3>
    <ul>
      <li>이슈 타입 이름 (Bug, Task, Story 등)</li>
      <li>설명</li>
      <li>아이콘</li>
      <li>워크플로 상태 목록</li>
    </ul>

    <ScreenshotSlot label="Issue Types 조회" />

    <hr />

    <h2>9. General Settings (일반 설정)</h2>

    <h3>9-1. 프로젝트 언어</h3>
    <ul>
      <li>프로젝트별 기본 언어 설정 (한국어 / English / 日本語)</li>
      <li>사용자별 언어 설정과 별개</li>
    </ul>

    <h3>9-2. 프로젝트 설명</h3>
    <ul>
      <li>Overview 페이지에 표시되는 프로젝트 설명</li>
      <li>Admin만 편집 가능 (Overview 페이지에서 직접 편집)</li>
    </ul>

    <h3>9-3. 첨부파일 한도</h3>
    <ul>
      <li>프로젝트별 첨부파일 저장 한도 (Forge Storage 기준)</li>
    </ul>

    <hr />

    <h2>10. Configuration 베스트 프랙티스</h2>

    <h3>프로젝트 시작 시 권장 순서</h3>
    <ol>
      <li><strong>샘플 데이터 생성</strong> (자동으로 기본 Configuration 채워짐)</li>
      <li><strong>사용자 권한 설정</strong> — 팀원에게 적절한 역할 부여</li>
      <li><strong>Priorities 검토</strong> — 회사 표준에 맞게 추가/수정</li>
      <li><strong>Case Types 검토</strong> — 필요한 타입 추가 (Usability, Accessibility 등)</li>
      <li><strong>Components 정의</strong> — 실제 시스템 구조에 맞게</li>
      <li><strong>Plan Status 검토</strong> — 회사 워크플로에 맞게</li>
      <li><strong>UDF 추가</strong> (선택) — 특수 요구사항이 있다면</li>
    </ol>

    <h3>DO</h3>
    <ul>
      <li><strong>표준화</strong>: 회사 전체에서 일관된 우선순위, 컴포넌트 사용</li>
      <li><strong>간결함</strong>: 너무 많은 옵션은 사용자 혼란 야기 (각 카테고리당 5~10개 권장)</li>
      <li><strong>명명 규칙</strong>: 모든 항목에 일관된 명명 규칙 적용</li>
      <li><strong>문서화</strong>: 팀에 Configuration 의미 공유</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>한 번 만들고 무한히 늘리기</li>
      <li>사용하지 않는 옵션 방치</li>
      <li>중복 항목 ("High"와 "긴급"이 같이 존재)</li>
      <li>모호한 이름 ("Type 1", "Component A")</li>
    </ul>

    <hr />

    <h2>11. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Configuration 탭이 안 보임</td><td>Admin / Team Admin 권한 없음</td><td>Admin에게 권한 변경 요청</td></tr>
        <tr><td>우선순위 삭제 안 됨</td><td>사용 중인 항목</td><td>해당 TC들의 우선순위 먼저 변경</td></tr>
        <tr><td>UDF가 TC에 표시 안 됨</td><td>"Apply to" 설정 확인</td><td>UDF 설정에서 TC 선택</td></tr>
        <tr><td>기본값 변경 후 새 TC에 반영 안 됨</td><td>이미 만든 TC는 영향 없음</td><td>새로 만드는 TC부터 적용</td></tr>
        <tr><td>Issue Types가 비어있음</td><td>Jira 프로젝트 권한 부족</td><td>Jira에서 프로젝트 권한 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/permissions">02. 사용자 권한</Link></li>
      <li><Link to="/support/guide/test-cases">03. 테스트 케이스</Link></li>
      <li><Link to="/support/guide/import-export">11. Import / Export</Link></li>
    </ul>
  </article>
);

export default Configuration;
