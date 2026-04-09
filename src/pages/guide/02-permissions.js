import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const Permissions = () => (
  <article className="guide-article">
    <h1>02. 사용자 권한</h1>
    <p className="guide-lead">
      T-CAFE는 4가지 역할(Role) 기반의 권한 시스템을 제공합니다. 각 역할마다 수행할 수 있는 작업이 다릅니다.
    </p>

    <hr />

    <h2>1. 4가지 역할</h2>
    <table>
      <thead>
        <tr>
          <th>역할</th>
          <th>영문</th>
          <th>권한 수준</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>관리자</strong></td>
          <td>Admin</td>
          <td>최상위</td>
          <td>모든 기능 사용 가능. Configuration, 사용자 권한 관리 포함</td>
        </tr>
        <tr>
          <td><strong>팀 관리자</strong></td>
          <td>Team Admin</td>
          <td>두 번째</td>
          <td>TC/TP 생성·편집·삭제, Import, 실행, <strong>Configuration 전체 접근</strong></td>
        </tr>
        <tr>
          <td><strong>테스터</strong></td>
          <td>Tester</td>
          <td>세 번째</td>
          <td>테스트 실행, 코멘트, Issue 생성/연결, 조회, Export. TC/TP 생성/편집/삭제 불가</td>
        </tr>
        <tr>
          <td><strong>개발자</strong></td>
          <td>Developer</td>
          <td>최하위</td>
          <td>조회, Export, <strong>테스트 실행(상태 변경)·코멘트 입력</strong>. TC/TP 생성/편집/삭제 불가, Issue 생성 불가</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>2. 기본 할당 규칙</h2>
    <p>T-CAFE는 자동으로 사용자에게 역할을 할당합니다:</p>
    <ul>
      <li><strong>프로젝트 첫 사용자</strong>: <strong>Admin</strong> 자동 할당</li>
      <li><strong>이후 신규 사용자</strong>: <strong>Tester</strong> 자동 할당</li>
      <li><strong>역할 변경</strong>: <strong>Admin / Team Admin</strong>이 Configuration → User Permissions에서 변경 가능</li>
    </ul>

    <hr />

    <h2>3. 역할별 권한 매트릭스</h2>

    <h3>3-1. 테스트 케이스 (Test Cases)</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>TC 생성 (Single)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC 생성 (Factor Combination)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC 편집</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC 삭제</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC 복제 (Clone)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC 이동 (Move)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC Import (CSV/JSON/Excel)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TC Export (CSV/JSON/Excel)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>TC 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>TC 검색/필터</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>3-2. 폴더 (Folders)</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>폴더 생성</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>폴더 이름변경</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>폴더 삭제</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>폴더 복제 (Copy)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>폴더 이동 (Move)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>폴더 구조 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>3-3. 테스트 플랜 (Test Plans)</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>TP 생성</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TP 편집</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TP 삭제</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TP 복제 (Clone)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TP에 TC 추가</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>TP에서 TC 제거</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>테스트 실행 (상태 변경)</strong></td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>코멘트 입력</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>Issue 생성/연결</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>TP 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>3-4. Configuration (설정)</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Configuration 페이지 접근</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>사용자 권한 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>우선순위 (Priorities) 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>케이스타입 (Case Types) 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>컴포넌트 (Components) 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>플랜 상태 (Plan Status) 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>UDF (User Defined Fields) 관리</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>이슈 타입 조회</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>

    <h3>3-5. Overview (대시보드)</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Overview 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>통계/차트 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>프로젝트 설명 편집</td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>샘플 데이터 생성</td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>게시판 글 작성</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>게시판 글 삭제</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>마일스톤 타임라인 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>3-6. 첨부파일 / 리포트</h3>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>첨부파일 업로드</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>첨부파일 다운로드</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>첨부파일 삭제</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>리포트 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>리포트 Export</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>4. 사용자 권한 변경 (Admin / Team Admin)</h2>

    <h3>변경 절차</h3>
    <ol>
      <li>상단 탭에서 <strong>Configuration</strong> 클릭 (Admin / Team Admin만 보임)</li>
      <li>좌측 메뉴에서 <strong>User Permissions</strong> 선택</li>
      <li>변경할 사용자를 찾기</li>
      <li>역할 드롭다운에서 새 역할 선택</li>
      <li>자동 저장됨</li>
    </ol>

    <ScreenshotSlot label="User Permissions 화면" />

    <h3>주의 사항</h3>
    <ul>
      <li>자기 자신의 역할은 변경할 수 없습니다 (다른 Admin이 변경해야 함)</li>
      <li><strong>마지막 Admin 보호</strong>: 프로젝트의 마지막 Admin은 삭제하거나 다른 역할로 변경할 수 없습니다</li>
      <li>역할 변경은 즉시 적용됩니다 (사용자가 페이지를 새로고침하면 반영)</li>
    </ul>

    <hr />

    <h2>5. 권한 흐름 (시스템 동작)</h2>
    <pre><code>{`1. 사용자가 Jira에서 T-CAFE 접근
 ↓
2. T-CAFE: 현재 Jira 사용자 정보 조회
 ↓
3. T-CAFE: DB에서 역할/권한 조회
 ↓
4. 역할이 없으면 (신규 사용자):
 - 프로젝트 첫 사용자 → Admin 자동 할당
 - 이후 사용자 → Tester 자동 할당
 ↓
5. 역할 정보를 브라우저에 캐시 (주기적으로 자동 갱신)
 ↓
6. 각 페이지에서 권한 확인 후 버튼 표시/숨기기, 비활성화`}</code></pre>

    <hr />

    <h2>6. 일반적인 사용 시나리오</h2>

    <h3>시나리오 A: QA 팀</h3>
    <ul>
      <li><strong>QA 매니저</strong>: Admin</li>
      <li><strong>QA 엔지니어</strong>: Team Admin (TC 작성/관리)</li>
      <li><strong>테스터</strong>: Tester (실행 전담)</li>
      <li><strong>개발자</strong>: Developer (조회만)</li>
    </ul>

    <h3>시나리오 B: 작은 팀</h3>
    <ul>
      <li><strong>개발 리드</strong>: Admin</li>
      <li><strong>모든 팀원</strong>: Team Admin (자유롭게 작성/수정)</li>
      <li>별도 분리 없음</li>
    </ul>

    <h3>시나리오 C: 개발자 직접 작성</h3>
    <ul>
      <li><strong>개발 리드</strong>: Admin</li>
      <li><strong>개발자</strong>: Team Admin (자기 코드의 TC 직접 작성)</li>
      <li><strong>별도 QA 인력 없음</strong></li>
    </ul>

    <hr />

    <h2>7. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr>
          <th>문제</th>
          <th>원인</th>
          <th>해결</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Configuration 탭이 보이지 않음</td>
          <td>Admin / Team Admin 권한 없음</td>
          <td>Admin에게 역할 변경 요청</td>
        </tr>
        <tr>
          <td>TC 생성 버튼이 비활성</td>
          <td>Tester/Developer 권한</td>
          <td>Team Admin 이상 필요</td>
        </tr>
        <tr>
          <td>게시판 글 작성 불가</td>
          <td>Admin 권한 없음</td>
          <td>Admin에게 요청</td>
        </tr>
        <tr>
          <td>Issue 생성 버튼이 비활성</td>
          <td>Developer 권한</td>
          <td>Tester 이상 필요</td>
        </tr>
        <tr>
          <td>자기 역할 변경 불가</td>
          <td>자기 자신은 변경 불가</td>
          <td>다른 Admin에게 요청</td>
        </tr>
        <tr>
          <td>사용자 목록에 보이지 않음</td>
          <td>Jira 프로젝트 접근 권한 없음</td>
          <td>Jira에서 프로젝트 멤버로 추가 후 새로고침</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">03. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/configuration">10. Configuration (설정)</Link></li>
    </ul>
  </article>
);

export default Permissions;
