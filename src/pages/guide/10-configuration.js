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

    <h3>Configuration 좌측 메뉴 구성</h3>

    <h4>Test Case 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Case Field (UDF)</strong></td><td>사용자 정의 필드 관리</td></tr>
        <tr><td><strong>Case Type</strong></td><td>케이스 타입 정의</td></tr>
        <tr><td><strong>Component</strong></td><td>컴포넌트 정의</td></tr>
        <tr><td><strong>Priorities</strong></td><td>우선순위 정의</td></tr>
      </tbody>
    </table>

    <h4>Test Plan 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Plan Status</strong></td><td>테스트 플랜 상태 정의</td></tr>
      </tbody>
    </table>

    <h4>Retestable 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Issue Type</strong></td><td>Jira 이슈 타입 조회</td></tr>
      </tbody>
    </table>

    <h4>Administrator Settings 섹션</h4>
    <table>
      <thead>
        <tr><th>메뉴</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>User Permissions</strong></td><td>사용자 역할/권한 관리</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Configuration 메인 화면" />

    <hr />

    <h2>2. Case Field — User Defined Fields (UDF)</h2>
    <p>표준 필드 외에 추가로 정의하는 사용자 지정 필드입니다. Configuration의 <strong>첫 번째 메뉴</strong>이며 가장 자주 사용됩니다.</p>

    <h3>2-1. UDF 타입 (9종)</h3>
    <table>
      <thead>
        <tr><th>타입</th><th>영문</th><th>설명</th><th>예시</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>텍스트</strong></td><td>Text</td><td>한 줄 텍스트 입력</td><td>"특이사항", "테스트 환경 메모"</td></tr>
        <tr><td><strong>숫자</strong></td><td>Number</td><td>숫자 값 입력</td><td>"예상 소요 시간(분)", "중요도 점수"</td></tr>
        <tr><td><strong>날짜</strong></td><td>Date</td><td>날짜 선택 (달력)</td><td>"마지막 검토일", "예정일"</td></tr>
        <tr><td><strong>타임스탬프</strong></td><td>Time stamp</td><td>날짜 + 시간</td><td>"실행 시작 시각", "완료 시각"</td></tr>
        <tr><td><strong>드롭다운</strong></td><td>Dropdown</td><td>단일 선택 목록</td><td>"테스트 환경" (Dev/Stage/Prod)</td></tr>
        <tr><td><strong>체크박스</strong></td><td>Checkbox</td><td>다중 선택 목록</td><td>"자동화 가능", "리뷰 완료"</td></tr>
        <tr><td><strong>라벨</strong></td><td>Labels</td><td>태그 형태 다중 입력</td><td>"관련 모듈", "영향 범위"</td></tr>
        <tr><td><strong>담당자</strong></td><td>People</td><td>Jira 사용자 선택</td><td>"리뷰어", "담당 개발자"</td></tr>
        <tr><td><strong>URL</strong></td><td>URL</td><td>웹 주소 입력. Attachments의 Copy Link도 사용 가능</td><td>"관련 문서 링크", "Figma 디자인", "첨부파일 다운로드 링크"</td></tr>
      </tbody>
    </table>

    <h3>2-2. UDF 추가</h3>
    <ol>
      <li>Configuration → <strong>Case Field</strong></li>
      <li><strong>+ Add Field</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수)</li>
          <li><strong>Type</strong> (필수) — 위 9종 중 선택</li>
          <li><strong>Default Value</strong> (선택)</li>
          <li><strong>Required</strong> 여부</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <ScreenshotSlot label="UDF 추가" />

    <h3>2-3. Dropdown / Checkbox 타입</h3>
    <ul>
      <li>Dropdown 또는 Checkbox를 선택하면 <strong>옵션 목록</strong>을 추가로 설정합니다</li>
      <li>옵션을 추가/삭제하여 선택지를 정의합니다</li>
    </ul>

    <h3>2-4. UDF 활용</h3>
    <ul>
      <li>TC 생성/편집 화면에 UDF 항목이 자동 표시</li>
      <li>TC 목록에서 UDF 컬럼 표시 가능</li>
      <li>Export 시 UDF도 포함됨</li>
    </ul>

    <hr />

    <h2>3. Case Type (케이스 타입)</h2>
    <p>테스트 케이스의 종류를 정의합니다.</p>

    <h3>3-1. 기본 제공 케이스 타입</h3>
    <ul>
      <li><strong>Function</strong> (기본값) — 기능 테스트</li>
      <li><strong>Performance</strong> — 성능 테스트</li>
      <li><strong>Security</strong> — 보안 테스트</li>
      <li><strong>Regression</strong> — 회귀 테스트</li>
    </ul>

    <h3>3-2. 케이스 타입 추가</h3>
    <ol>
      <li>Configuration → <strong>Case Type</strong></li>
      <li><strong>+ Add Case Type</strong> 클릭</li>
      <li><strong>Name</strong> 입력 (예: "Usability", "Compatibility")</li>
      <li><strong>Is Default</strong> 설정 (선택)</li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>3-3. 케이스 타입 활용</h3>
    <ul>
      <li>TC 생성 시 드롭다운으로 선택</li>
      <li>리포트에서 케이스 타입별 통계 확인 가능</li>
    </ul>

    <hr />

    <h2>4. Component (컴포넌트)</h2>
    <p>테스트 대상의 구성 요소를 정의합니다. 다중 선택 가능합니다.</p>

    <h3>4-1. 기본 제공 컴포넌트</h3>
    <ul>
      <li><strong>Frontend</strong> — UI/UX 컴포넌트</li>
      <li><strong>Backend API</strong> — 백엔드 API 서비스</li>
      <li><strong>Database</strong> — DB 관련</li>
      <li><strong>Authentication</strong> — 인증/인가</li>
      <li><strong>Payment</strong> — 결제 시스템</li>
    </ul>

    <h3>4-2. 컴포넌트 추가</h3>
    <ol>
      <li>Configuration → <strong>Component</strong></li>
      <li><strong>+ Add Component</strong> 클릭</li>
      <li>입력 항목:
        <ul>
          <li><strong>Name</strong> (필수)</li>
          <li><strong>Description</strong> (선택)</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>4-3. 컴포넌트 활용</h3>
    <ul>
      <li>TC에 다중 컴포넌트 부여 가능 (예: "User Login" → Frontend, Authentication, Backend API)</li>
      <li>리포트에서 컴포넌트별 결함률 확인</li>
    </ul>

    <hr />

    <h2>5. Priorities (우선순위)</h2>
    <p>테스트 케이스의 우선순위를 정의합니다.</p>

    <h3>5-1. 기본 제공 우선순위</h3>
    <ul>
      <li><strong>Critical</strong> (빨강)</li>
      <li><strong>High</strong> (주황)</li>
      <li><strong>Medium</strong> (노랑) — 기본값</li>
      <li><strong>Low</strong> (녹색)</li>
    </ul>

    <h3>5-2. 우선순위 추가</h3>
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

    <h3>5-3. 우선순위 수정 / 삭제</h3>
    <ul>
      <li>행을 클릭하여 인라인 편집, 또는 Edit 버튼</li>
      <li>Delete 버튼으로 삭제 (사용 중인 우선순위는 해당 TC에 영향)</li>
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
    <aside className="guide-callout">필요 시 "In Progress", "Closed" 등 사용자 정의 상태를 직접 추가할 수 있습니다.</aside>

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

    <hr />

    <h2>7. Retestable Configuration (이슈 타입별 완료 상태 설정)</h2>
    <p>각 Jira 이슈 타입별로 어떤 워크플로 상태를 <strong>'완료(Complete)'로 간주</strong>할지 설정합니다. 이 설정에 따라 연결된 이슈가 완료 상태에 도달했을 때 해당 테스트 케이스가 <strong>Retestable(재테스트 필요)</strong>로 전환됩니다.</p>

    <h3>7-1. 개념</h3>
    <ul>
      <li>테스트 실행 중 Fail이 발생하면 Jira Issue를 생성/연결합니다</li>
      <li>해당 Issue가 개발자에 의해 수정되어 <strong>완료 상태</strong>에 도달하면</li>
      <li>T-CAFE가 자동으로 해당 실행 항목을 <strong>Retestable</strong>로 표시합니다</li>
      <li>이 페이지에서 "어떤 상태가 완료인지"를 이슈 타입별로 정의합니다</li>
    </ul>

    <h3>7-2. 설정 방법</h3>
    <ol>
      <li>Configuration → <strong>Issue Type</strong> (Retestable 섹션)</li>
      <li>프로젝트의 Jira 이슈 타입 목록이 표시됩니다 (Bug, Task, Story 등)</li>
      <li>각 이슈 타입의 <strong>토글</strong>을 켜서 Retestable 추적을 활성화합니다</li>
      <li>활성화된 이슈 타입의 <strong>워크플로 상태 목록</strong>에서 "완료"로 간주할 상태를 선택합니다 (다중 선택 가능)</li>
      <li><strong>Save</strong> 클릭</li>
    </ol>

    <h3>7-3. 화면 구성</h3>
    <ul>
      <li><strong>통계</strong>: 전체 이슈 타입 수 / 설정 완료 / 미설정 개수 표시</li>
      <li><strong>이슈 타입별 카드</strong>: 토글 (활성/비활성) + 워크플로 상태 체크박스</li>
      <li>활성화된 이슈 타입에 완료 상태를 하나도 선택하지 않으면 저장 시 경고가 표시됩니다</li>
    </ul>

    <h3>7-4. 예시</h3>
    <ul>
      <li><strong>Bug</strong> 이슈 타입: "Done", "Closed" 상태를 완료로 설정 → Bug가 Done 또는 Closed로 변경되면 연결된 실행 항목이 Retestable로 전환</li>
      <li><strong>Task</strong> 이슈 타입: 비활성화 → Task 이슈의 상태 변경은 Retestable에 영향 없음</li>
    </ul>

    <ScreenshotSlot label="Retestable Configuration" />

    <hr />

    <h2>8. User Permissions (사용자 권한 관리)</h2>
    <p>User Permissions는 <strong>Users 탭</strong>과 <strong>Roles 탭</strong> 두 개의 탭으로 구성됩니다.</p>

    <h3>8-1. Users 탭</h3>
    <ul>
      <li>프로젝트 사용자 목록</li>
      <li>각 사용자의 역할 드롭다운 (시스템 역할 + 커스텀 역할 모두 선택 가능)</li>
      <li><strong>Activate 토글</strong>: 사용자를 활성/비활성화하여 권한을 즉시 부여하거나 차단</li>
      <li><strong>Status 필터</strong>: Active / Inactive / All 필터로 사용자 목록을 필터링</li>
    </ul>

    <h3>8-2. Roles 탭</h3>
    <ul>
      <li>역할 목록: 각 역할에 시스템 뱃지(시스템 역할 여부)와 배정된 사용자 수 표시</li>
      <li><strong>Permission Matrix</strong>: 토글 테이블 형태로 각 역할의 기능별 권한을 확인/변경</li>
      <li><strong>Add Role</strong>: 커스텀 역할을 새로 생성하고 권한을 세밀하게 설정</li>
      <li><strong>Edit / Delete</strong>: 기존 역할 수정 또는 삭제 (시스템 역할은 삭제 불가, 권한 변경은 가능)</li>
    </ul>

    <h3>8-3. 사용자 자동 추가</h3>
    <ul>
      <li>Jira 프로젝트의 모든 사용자가 자동으로 표시됨</li>
      <li>별도 수동 추가 작업 불필요</li>
    </ul>

    <h3>8-4. 역할 변경</h3>
    <ol>
      <li>Users 탭에서 변경할 사용자 행의 역할 드롭다운 클릭</li>
      <li>새 역할 선택 (시스템 역할: Admin / Team Admin / Tester / Developer, 또는 커스텀 역할)</li>
      <li>자동 저장됨</li>
    </ol>

    <h3>8-5. 마지막 Admin 보호</h3>
    <ul>
      <li>프로젝트의 마지막 Admin은 <strong>삭제하거나 다른 역할로 변경할 수 없습니다</strong></li>
      <li>시스템이 자동으로 차단합니다</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/permissions">02. 사용자 권한</Link> 참고</p>

    <hr />

    <h2>9. Configuration 베스트 프랙티스</h2>

    <h3>프로젝트 시작 시 권장 순서</h3>
    <ol>
      <li><strong>샘플 데이터 생성</strong> (자동으로 기본 Configuration 채워짐)</li>
      <li><strong>Case Field (UDF) 정의</strong> — 프로젝트에 맞는 사용자 정의 필드 추가</li>
      <li><strong>Case Types 검토</strong> — 필요한 타입 추가 (Usability, Accessibility 등)</li>
      <li><strong>Components 정의</strong> — 실제 시스템 구조에 맞게</li>
      <li><strong>Priorities 검토</strong> — 회사 표준에 맞게 추가/수정</li>
      <li><strong>Plan Status 검토</strong> — 회사 워크플로에 맞게</li>
      <li><strong>사용자 권한 설정</strong> — 팀원에게 적절한 역할 부여</li>
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

    <h2>10. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Configuration 탭이 안 보임</td><td>Admin / Team Admin 권한 없음</td><td>Admin에게 권한 변경 요청</td></tr>
        <tr><td>우선순위 삭제 안 됨</td><td>사용 중인 항목</td><td>해당 TC들의 우선순위 먼저 변경</td></tr>
        <tr><td>UDF가 TC에 표시 안 됨</td><td>필드 설정 확인</td><td>Case Field에서 해당 필드 확인</td></tr>
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
