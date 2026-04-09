import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const Folders = () => (
  <article className="guide-article">
    <h1>04. 폴더 관리</h1>
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
      <li>폴더 트리에서 부모 폴더 선택 (루트에 만들려면 빈 영역 클릭)</li>
      <li><strong>+ Add Folder</strong> 버튼 또는 우클릭 → <strong>Add Folder</strong></li>
      <li>폴더 이름 입력</li>
      <li><strong>Create</strong> 클릭</li>
    </ol>

    <h3>입력 항목</h3>
    <ul>
      <li><strong>이름</strong> (필수)</li>
      <li><strong>설명</strong> (선택)</li>
      <li><strong>부모 폴더</strong> (선택, 자동 설정됨)</li>
    </ul>

    <ScreenshotSlot label="폴더 생성 다이얼로그" />

    <h3>정렬 순서</h3>
    <ul>
      <li>새 폴더는 부모 폴더 안에서 가장 마지막에 추가됩니다</li>
      <li>정렬 순서는 자동으로 부여되며 드래그로 변경 가능합니다</li>
    </ul>

    <hr />

    <h2>4. 폴더 이름 변경</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>폴더를 더블클릭 또는 우클릭 → <strong>Rename</strong></li>
      <li>새 이름 입력</li>
      <li>Enter로 저장</li>
    </ol>

    <hr />

    <h2>5. 폴더 이동</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>드래그 앤 드롭</h3>
    <ol>
      <li>이동할 폴더를 마우스로 드래그</li>
      <li>새 부모 폴더 위에 드롭</li>
    </ol>

    <h3>우클릭 메뉴</h3>
    <ol>
      <li>폴더 우클릭 → <strong>Move to</strong></li>
      <li>대상 위치 선택</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>폴더를 이동하면 그 폴더 안의 모든 TC와 하위 폴더도 함께 이동합니다</li>
      <li>폴더를 자기 자신의 하위로 이동할 수 없습니다 (순환 참조 방지)</li>
    </ul>

    <hr />

    <h2>6. 폴더 복제 (Copy)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>비슷한 폴더 구조를 빠르게 만들 때</li>
      <li>템플릿 폴더를 기반으로 새 모듈 만들기</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 폴더 우클릭 → <strong>Copy</strong></li>
      <li>복사본의 이름 입력</li>
      <li>복사 위치 선택</li>
      <li><strong>Confirm</strong></li>
    </ol>

    <h3>복제 범위</h3>
    <ul>
      <li>폴더 자체 + 모든 하위 폴더 + 모든 TC가 함께 복사됩니다</li>
      <li>TC는 새 키를 자동으로 부여받습니다</li>
    </ul>

    <hr />

    <h2>7. 폴더 삭제</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>삭제할 폴더 선택</li>
      <li>우클릭 → <strong>Delete</strong> 또는 Delete 키</li>
      <li>확인 다이얼로그에서 <strong>Confirm</strong></li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>폴더 삭제 시 안에 있는 <strong>모든 TC와 하위 폴더가 함께 삭제됩니다</strong></li>
      <li>삭제된 데이터는 <strong>복구할 수 없습니다</strong></li>
      <li>빈 폴더만 삭제하려면 먼저 안의 TC를 다른 폴더로 이동하세요</li>
    </ul>

    <h3>안전한 삭제 절차</h3>
    <ol>
      <li>폴더 안의 TC 개수 확인</li>
      <li>중요한 TC가 있다면 먼저 다른 폴더로 이동</li>
      <li>그 후 빈 폴더 삭제</li>
    </ol>

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
      <li><strong>영문 또는 한글</strong>: 혼용은 피하기</li>
    </ul>

    <h3>안티 패턴 (피해야 할 구조)</h3>
    <ul>
      <li>한 폴더에 100개+ TC 몰아넣기</li>
      <li>너무 많은 빈 폴더</li>
      <li>의미 없는 이름 ("Folder 1", "New Folder")</li>
      <li>중복 폴더 ("Login"이 여러 곳에 존재)</li>
    </ul>

    <hr />

    <h2>9. TC를 폴더 간 이동</h2>

    <h3>단일 TC 이동</h3>
    <ul>
      <li>TC 목록에서 TC를 드래그하여 다른 폴더에 드롭</li>
    </ul>

    <h3>다중 TC 이동</h3>
    <ol>
      <li>체크박스로 여러 TC 선택</li>
      <li><strong>Move</strong> 버튼 클릭</li>
      <li>대상 폴더 선택</li>
      <li><strong>Confirm</strong></li>
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
      <li><Link to="/support/guide/test-cases">03. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/test-cases-steps">05. 테스트 스텝 작성</Link></li>
    </ul>
  </article>
);

export default Folders;
