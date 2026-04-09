import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const TestCases = () => (
  <article className="guide-article">
    <h1>03. 테스트 케이스 기본 사용법</h1>
    <p className="guide-lead">
      테스트 케이스(Test Case, 이하 TC)는 T-CAFE의 가장 기본 단위입니다. 본 페이지에서는 TC의 생성, 조회, 수정, 삭제 방법을 안내합니다.
    </p>

    <hr />

    <h2>1. 테스트 케이스란?</h2>
    <p>테스트 케이스는 특정 기능이나 시나리오를 검증하기 위한 단위 테스트 명세입니다. 다음 정보를 포함합니다:</p>
    <ul>
      <li><strong>이름 (Name)</strong>: TC의 제목</li>
      <li><strong>설명 (Description)</strong>: TC가 무엇을 검증하는지</li>
      <li><strong>사전 조건 (Precondition)</strong>: 테스트 실행 전 갖춰져야 할 조건</li>
      <li><strong>테스트 스텝 (Test Steps)</strong>: 실제 수행할 단계와 기대 결과</li>
      <li><strong>우선순위 (Priority)</strong>: Configuration → Priorities에서 자유롭게 정의 (기본 샘플: Critical / High / Medium / Low)</li>
      <li><strong>케이스 타입 (Case Type)</strong>: Configuration → Case Types에서 자유롭게 정의 (기본 샘플: Function / Performance / Security / UI/UX / API / Regression)</li>
      <li><strong>컴포넌트 (Components)</strong>: Configuration → Components에서 자유롭게 정의 (기본 샘플: Frontend / Backend API / Database / Authentication / Payment), 다중 선택 가능</li>
      <li><strong>라벨 (Labels)</strong>: 자유 태그</li>
      <li><strong>소유자 (Owner)</strong>: TC 작성자</li>
    </ul>

    <hr />

    <h2>2. TC 종류</h2>
    <p>T-CAFE는 두 가지 TC 타입을 지원합니다:</p>

    <h3>Single Test Case (<code>type: 'S'</code>)</h3>
    <ul>
      <li>일반적인 단일 테스트 케이스</li>
      <li>하나의 시나리오를 검증</li>
      <li>가장 많이 사용되는 형식</li>
    </ul>

    <h3>Factor Combination Test Case (<code>type: 'F'</code>)</h3>
    <ul>
      <li>Factor Combination 기능으로 자동 생성된 TC</li>
      <li>여러 변수의 조합을 검증</li>
      <li>상세 내용은 <Link to="/support/guide/factor-combination">06. Factor Combination</Link> 참고</li>
    </ul>

    <hr />

    <h2>3. TC 조회</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → <strong>Test Cases</strong></p>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>좌측</strong>: 폴더 트리 (TC가 폴더별로 정리됨)</li>
      <li><strong>중앙</strong>: TC 목록 (테이블 형식)</li>
      <li><strong>우측 또는 하단</strong>: 선택한 TC 상세 정보</li>
    </ul>

    <ScreenshotSlot label="Test Cases 메인 화면" />

    <h3>표시 컬럼</h3>
    <p>기본적으로 다음 정보가 표시됩니다:</p>
    <ul>
      <li>TC Key (예: PROJ-1, PROJ-2)</li>
      <li>이름</li>
      <li>우선순위</li>
      <li>케이스 타입</li>
      <li>컴포넌트</li>
      <li>라벨</li>
      <li>소유자</li>
      <li>마지막 수정일</li>
    </ul>

    <h3>컬럼 표시/숨기기</h3>
    <ul>
      <li>우상단 컬럼 설정 버튼으로 표시할 컬럼을 선택할 수 있습니다</li>
      <li>설정은 사용자별로 저장됩니다</li>
    </ul>

    <h3>검색과 필터</h3>
    <ul>
      <li><strong>검색창</strong>: TC 이름, 키, 설명으로 검색</li>
      <li><strong>필터</strong>: 폴더, 우선순위, 케이스 타입, 컴포넌트, 라벨, 소유자별 필터링</li>
    </ul>

    <hr />

    <h2>4. TC 생성 (Single)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Cases 페이지에서 TC를 생성할 폴더 선택</li>
      <li><strong>+ Create Test Case</strong> 버튼 클릭</li>
      <li>또는 폴더 우클릭 → <strong>Add Test Case</strong></li>
      <li>TC 작성 화면이 열림</li>
    </ol>

    <ScreenshotSlot label="TC 생성 버튼" />

    <h3>입력 항목</h3>
    <ol>
      <li><strong>이름</strong> (필수)</li>
      <li><strong>설명</strong> — TC가 무엇을 검증하는지</li>
      <li><strong>우선순위</strong> — Configuration → Priorities에서 정의된 항목 중 선택</li>
      <li><strong>케이스 타입</strong> — Configuration → Case Types에서 정의된 항목 중 선택</li>
      <li><strong>컴포넌트</strong> — Configuration → Components에서 정의된 항목 중 다중 선택 가능</li>
      <li><strong>라벨</strong> — 자유 입력 (Jira 라벨과 별개)</li>
      <li><strong>사전 조건 (Precondition)</strong> — 리치 텍스트 에디터</li>
      <li><strong>테스트 스텝 (Test Steps)</strong> — 자세한 작성법은 <Link to="/support/guide/test-cases-steps">05. 테스트 스텝 작성</Link></li>
    </ol>

    <h3>저장</h3>
    <ul>
      <li><strong>Create</strong> 버튼: 새 TC가 자동으로 키(예: <code>PROJ-1</code>)를 부여받고 저장됨</li>
      <li><strong>Cancel</strong>: 작성 취소</li>
    </ul>

    <h3>TC 키 (Test Case Key)</h3>
    <ul>
      <li>형식: <code>{'<프로젝트키>-<순번>'}</code> (예: <code>TCAFE-1</code>, <code>TCAFE-2</code>)</li>
      <li>자동 부여, 변경 불가</li>
      <li>프로젝트 내에서 유일</li>
    </ul>

    <hr />

    <h2>5. TC 수정</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Cases 목록에서 수정할 TC 클릭</li>
      <li>우측 또는 하단의 <strong>Edit</strong> 버튼 클릭</li>
      <li>항목 수정 후 <strong>Update</strong></li>
    </ol>

    <h3>수정 가능한 항목</h3>
    <ul>
      <li>TC 키와 생성일 외 모든 항목</li>
    </ul>

    <h3>수정 이력</h3>
    <ul>
      <li>수정 시 마지막 수정자와 수정일이 자동 기록됨</li>
    </ul>

    <hr />

    <h2>6. TC 삭제</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>삭제할 TC 선택 (단일 또는 다중)</li>
      <li><strong>Delete</strong> 버튼 클릭</li>
      <li>확인 다이얼로그에서 <strong>Confirm</strong> 클릭</li>
    </ol>

    <h3>다중 삭제</h3>
    <ul>
      <li>체크박스로 여러 TC를 선택한 후 한 번에 삭제 가능</li>
    </ul>

    <h3>주의 사항</h3>
    <ul>
      <li>삭제된 TC는 <strong>복구할 수 없습니다</strong></li>
      <li>TP에 포함된 TC는 삭제 시 해당 TP에서도 자동 제거됩니다</li>
      <li>Factor Combination으로 생성된 TC를 삭제하면 해당 Factor 정의는 유지됩니다</li>
    </ul>

    <hr />

    <h2>7. TC 복제 (Clone)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>비슷한 TC를 빠르게 만들 때</li>
      <li>템플릿 TC를 기반으로 변형 만들기</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 TC 선택</li>
      <li><strong>Clone</strong> 또는 <strong>Copy</strong> 버튼 클릭</li>
      <li>복사본의 새 이름 입력</li>
      <li>복사 위치(폴더) 선택</li>
      <li>자동으로 새 키 부여됨</li>
    </ol>

    <h3>복제 시 복사되는 항목</h3>
    <ul>
      <li>이름, 설명, 우선순위, 케이스 타입, 컴포넌트, 라벨, 사전조건, 테스트 스텝</li>
    </ul>

    <h3>복제 시 복사되지 않는 항목</h3>
    <ul>
      <li>실행 결과 (TP에서의 실행 이력)</li>
      <li>코멘트</li>
    </ul>

    <aside className="guide-callout info">
      첨부파일은 TC 자체에 직접 첨부되는 형태가 아니라 <Link to="/support/guide/attachments">Attachments 페이지</Link>에 업로드된 파일을 본문/사전조건의 링크로 참조하는 방식이라서, TC를 복제하면 본문에 들어 있던 링크 텍스트가 그대로 복사됩니다. 별도의 파일 복제 동작은 없습니다.
    </aside>

    <hr />

    <h2>8. TC 이동 (Move)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>이동할 TC 선택 (드래그 앤 드롭 또는 우클릭)</li>
      <li>드래그 → 대상 폴더에 드롭</li>
      <li>또는 우클릭 → <strong>Move to</strong> → 대상 폴더 선택</li>
    </ol>

    <h3>다중 이동</h3>
    <ul>
      <li>여러 TC를 한 번에 다른 폴더로 이동 가능</li>
    </ul>

    <hr />

    <h2>9. TC 데이터 암호화</h2>
    <p>T-CAFE는 사용자의 민감한 테스트 데이터를 보호하기 위해 다음 정보를 <strong>암호화</strong>하여 저장합니다:</p>
    <ul>
      <li>테스트 스텝 (Step / Test Data / Expected Result)</li>
      <li>사전 조건 (Precondition)</li>
    </ul>
    <p>암호화는 자동으로 처리되며 사용자가 별도로 설정할 필요는 없습니다.</p>

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
      <li><Link to="/support/guide/test-cases-folders">04. 폴더 관리</Link> — TC를 폴더로 정리하는 방법</li>
      <li><Link to="/support/guide/test-cases-steps">05. 테스트 스텝 작성</Link> — 자세한 스텝 작성 가이드</li>
      <li><Link to="/support/guide/factor-combination">06. Factor Combination</Link> — 자동 조합 생성</li>
    </ul>
  </article>
);

export default TestCases;
