import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

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
    <p>상단 탭 → <strong>Test Cases</strong> → 좌측 패널</p>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>루트 폴더</strong>: 프로젝트 최상위</li>
      <li><strong>하위 폴더</strong>: 트리 구조로 표시</li>
      <li><strong>TC 개수</strong>: 각 폴더 우측에 해당 폴더의 TC 개수 표시</li>
      <li><strong>확장/축소 화살표</strong>: 클릭으로 펼치기/접기</li>
    </ul>

    <ScreenshotSlot label="폴더 트리" />

    <hr />

    <h2>3. 폴더 생성</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>좌측 상단의 <strong>New Folder</strong> 버튼 클릭 (또는 폴더 트리 빈 영역 우클릭 → <strong>New Folder</strong>)</li>
      <li>클릭 즉시 <code>New Folder 1</code>, <code>New Folder 2</code> ... 형식으로 자동 이름이 부여된 폴더가 생성됩니다</li>
      <li>이름을 바꾸려면 아래 "4. 폴더 이름 변경" 참고</li>
    </ol>

    <h3>특징</h3>
    <ul>
      <li>폴더는 루트 레벨에만 생성됩니다</li>
    </ul>

    <ScreenshotSlot label="폴더 생성" />

    <hr />

    <h2>4. 폴더 이름 변경</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>폴더 우클릭 → <strong>Rename Folder</strong></li>
      <li>새 이름 입력</li>
      <li>Enter로 저장</li>
    </ol>

    <hr />

    <h2>5. 폴더 이동</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>이동할 폴더 우클릭 → <strong>Move Folder</strong></li>
      <li>열린 Move 창에서 폴더를 <strong>드래그 앤 드롭</strong>하여 원하는 위치로 이동</li>
      <li>변경 내용을 <strong>Save Changes</strong>로 저장</li>
    </ol>

    <hr />

    <h2>6. 폴더 복제 (Copy)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>비슷한 폴더 구조를 빠르게 만들 때</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 폴더 우클릭 → <strong>Copy Folder</strong></li>
      <li>클릭 즉시 복제가 완료됩니다 (이름 입력이나 위치 선택 단계 없음)</li>
    </ol>

    <h3>복제 범위</h3>
    <ul>
      <li>폴더 자체와 <strong>하위 폴더 구조까지만</strong> 복사됩니다</li>
      <li>폴더 안의 <strong>Test Case는 복사되지 않습니다</strong></li>
    </ul>

    <hr />

    <h2>7. 폴더 삭제</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>삭제할 폴더 우클릭</li>
      <li><strong>Delete Folder</strong> 선택</li>
      <li>확인 모달에서 삭제될 항목 내역을 확인 후 <strong>Confirm</strong> 클릭</li>
    </ol>

    <h3>확인 모달 안내</h3>
    <p>삭제 전 폴더에 포함된 항목을 집계하여 영향 범위를 안내합니다. 실제로 삭제될 내역이 다음과 같이 줄별로 표시됩니다:</p>
    <ul>
      <li><strong>하위 폴더</strong>가 있으면 "N sub-folder(s) will also be permanently deleted."</li>
      <li><strong>테스트 케이스</strong>가 있으면 "N test case(s) in this folder will be permanently deleted."</li>
      <li><strong>Factor Combination 설정 또는 Factor TC</strong>가 있으면 "Factor Combination configuration and assignments in this folder will also be permanently deleted." 경고 표시</li>
      <li>비어 있는 폴더는 추가 안내 없이 확인 메시지만 표시</li>
      <li><strong>Cancel</strong> 버튼으로 언제든지 취소 가능</li>
    </ul>

    <h3>삭제 시 실제 동작</h3>
    <ul>
      <li>해당 폴더와 그에 속한 <strong>모든 하위 폴더가 영구 삭제</strong>됩니다</li>
      <li>해당 폴더 및 하위 폴더에 속한 <strong>모든 테스트 케이스(TC)가 영구 삭제</strong>됩니다</li>
      <li>해당 폴더 및 하위 폴더에 연결된 <strong>Factor Combination 설정과 Factor TC 배정 정보도 영구 삭제</strong>됩니다</li>
      <li>모든 삭제 작업은 단일 트랜잭션으로 처리되어 <strong>일부만 삭제되는 일은 없습니다</strong> (전부 삭제되거나 전부 취소)</li>
      <li>삭제된 데이터는 <strong>복구할 수 없습니다</strong></li>
    </ul>

    <aside className="guide-callout info">
      <strong>참고</strong>: 이미 Test Plan에 추가되어 있던 TC는 TP에 스냅샷으로 복사되어 있으므로 폴더 삭제로 인해 TP 내 실행 기록이나 데이터가 영향을 받지 않습니다.
    </aside>

    <hr />

    <h2>8. 폴더 구조 베스트 프랙티스</h2>

    <h3>권장 사항</h3>
    <ul>
      <li><strong>기능별 폴더</strong>: Login, Dashboard, Payment 등 (가장 일반적)</li>
      <li><strong>모듈별 폴더</strong>: Frontend, Backend, Mobile 등</li>
      <li><strong>테스트 유형별 폴더</strong>: Smoke, Regression, Performance 등</li>
      <li><strong>혼합형</strong>: 1단계는 기능, 2단계는 테스트 유형</li>
    </ul>

    <h3>권장 깊이</h3>
    <ul>
      <li><strong>2-3단계</strong>가 가장 사용하기 편함</li>
      <li>4단계 이상은 네비게이션이 어려움</li>
    </ul>

    <h3>폴더 이름 규칙</h3>
    <ul>
      <li><strong>간결하게</strong>: 25자 이내 권장</li>
      <li><strong>일관성 있게</strong>: 모든 폴더가 같은 명명 규칙 사용</li>
    </ul>

    <h3>안티 패턴 (피해야 할 구조)</h3>
    <ul>
      <li>너무 많은 빈 폴더</li>
      <li>의미 없는 이름 ("Folder 1", "New Folder")</li>
      <li>중복 폴더 ("Login"이 여러 곳에 존재)</li>
    </ul>

    <hr />

    <h2>9. TC를 폴더 간 이동</h2>

    <h3>절차 (단일 · 다중 공통)</h3>
    <ol>
      <li>TC 목록에서 이동할 TC 선택 (단일 또는 체크박스로 다중 선택)</li>
      <li>상단의 <strong>Move</strong> 버튼 클릭</li>
      <li>열린 폴더 선택 창에서 대상 폴더 선택</li>
      <li><strong>Move</strong> 클릭</li>
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

export default Folders;
