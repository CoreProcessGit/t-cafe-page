import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import shotPermissionChange from '../../assets/user_guide/02-permissions/1. 사용자 권한 변경.png';

const Permissions = () => (
  <article className="guide-article">
    <h1>02. 사용자 권한</h1>
    <p className="guide-lead">
      T-CAFE는 역할(Role) 기반의 권한 시스템을 제공합니다. 기본 4가지 시스템 역할(Admin, Team Admin, Tester, Developer)이 제공되며, 프로젝트 필요에 따라 커스텀 역할을 추가로 생성할 수 있습니다.
    </p>

    <hr />

    <h2>1. 시스템 역할 (기본 4가지)</h2>
    <p>시스템 역할은 삭제할 수 없지만, 각 역할의 세부 권한은 Admin이 변경할 수 있습니다.</p>
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
          <td>관리자</td>
          <td>Admin</td>
          <td>최상위</td>
          <td>모든 기능 사용 가능. Configuration, 사용자 권한 관리 포함</td>
        </tr>
        <tr>
          <td>팀 관리자</td>
          <td>Team Admin</td>
          <td>두 번째</td>
          <td>TC/TP 생성·편집·삭제, Import, 실행, Configuration 접근/편집 (사용자·역할 관리 제외)</td>
        </tr>
        <tr>
          <td>테스터</td>
          <td>Tester</td>
          <td>세 번째</td>
          <td>테스트 실행, 코멘트, Issue 생성/연결, 조회, Export. TC/TP 생성/편집/삭제 불가</td>
        </tr>
        <tr>
          <td>개발자</td>
          <td>Developer</td>
          <td>최하위</td>
          <td>조회, TC Export, 코멘트 입력만 가능. 테스트 실행(상태 변경)/리포트 Export/Issue 생성·연결 불가. TC/TP 생성/편집/삭제도 불가</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>2. 커스텀 역할</h2>
    <p>기본 4가지 역할 외에 프로젝트에 맞는 커스텀 역할을 생성할 수 있습니다.</p>
    <ul>
      <li>Configuration → User Permissions → Roles 탭에서 생성/수정/삭제</li>
      <li>8개 기능 영역(Overview, Test Cases, Factor Combination, Test Plans, Reports, Configuration, User Management, Attachments)별로 세부 액션 권한을 토글로 설정</li>
      <li>시스템 역할은 이름 변경 불가, 권한 변경 가능, 삭제 불가</li>
      <li>커스텀 역할은 이름과 권한 모두 변경 가능. 배정된 사용자가 없을 때만 삭제 가능</li>
    </ul>

    <hr />

    <h2>3. 기본 할당 규칙</h2>
    <p>T-CAFE는 자동으로 사용자에게 역할을 할당합니다:</p>
    <ul>
      <li>프로젝트 첫 사용자: Admin 자동 할당</li>
      <li>이후 신규 사용자: Tester 자동 할당</li>
      <li>역할 변경: Configuration → User Permissions → Users 탭에서 역할 드롭다운으로 변경 (시스템 역할 + 커스텀 역할 모두 표시)</li>
    </ul>

    <h3>사용자 활성/비활성</h3>
    <ul>
      <li>Users 탭에서 Activate 토글로 사용자를 활성/비활성화</li>
      <li>비활성화된 사용자는 모든 권한이 차단되어 프로젝트에 접근할 수 없습니다</li>
      <li>Admin이 토글을 다시 ON하면 즉시 복원됩니다</li>
      <li>Status 필터(Active / Inactive / All)로 비활성 사용자를 확인할 수 있습니다</li>
    </ul>

    <hr />

    <h2>4. 시스템 역할별 기본 권한 매트릭스</h2>
    <p>아래는 시스템 역할의 기본 권한입니다. Admin이 Roles 탭에서 각 역할의 권한을 변경할 수 있으며, 커스텀 역할은 자유롭게 설정할 수 있습니다.</p>

    <h3>4-1. Overview (대시보드)</h3>
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
        <tr><td>프로젝트 설명 편집</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>샘플 데이터 생성</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>게시판 글 작성</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>게시판 글 삭제</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>마일스톤 타임라인 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-2. 테스트 케이스 (Test Cases)</h3>
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

    <h3>4-3. 폴더 (Folders)</h3>
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

    <h3>4-4. 테스트 플랜 (Test Plans)</h3>
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
        <tr><td>테스트 실행 (상태 변경)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>코멘트 입력</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Issue 생성/연결</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>TP 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-5. Test Reports (리포트)</h3>
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
        <tr><td>리포트 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>리포트 Export</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
      </tbody>
    </table>

    <h3>4-6. Configuration (설정)</h3>
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
        <tr><td>Configuration 편집 (Priorities, Case Types 등)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>사용자 관리 (Users 탭)</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>역할 관리 (Roles 탭)</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>이슈 타입 조회</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>

    <h3>4-7. Attachments (첨부파일)</h3>
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
      </tbody>
    </table>

    <hr />

    <h2>5. 사용자 권한 변경</h2>

    <h3>역할 변경 절차</h3>
    <ol>
      <li>상단 탭에서 Configuration 클릭 (Configuration 접근 권한이 있는 역할만 보임)</li>
      <li>좌측 메뉴에서 User Permissions 선택</li>
      <li>Users 탭에서 변경할 사용자를 찾기</li>
      <li>역할 드롭다운에서 새 역할 선택 (시스템 역할 + 커스텀 역할 모두 표시)</li>
      <li>자동 저장됨</li>
    </ol>

    <h3>커스텀 역할 생성 절차</h3>
    <ol>
      <li>Roles 탭 클릭</li>
      <li>Add Role 버튼 클릭</li>
      <li>역할 이름 입력</li>
      <li>각 기능 영역별 권한 토글 설정</li>
      <li>Create 클릭</li>
    </ol>

    <ScreenshotSlot src={shotPermissionChange} label="사용자 권한 변경" />

    <h3>주의 사항</h3>
    <ul>
      <li>자기 자신의 역할은 변경할 수 없습니다 (다른 Admin이 변경해야 함)</li>
      <li>마지막 Admin 보호: 프로젝트의 마지막 Admin은 삭제하거나 다른 역할로 변경할 수 없습니다</li>
      <li>역할 변경은 즉시 적용됩니다 (사용자가 페이지를 새로고침하면 반영)</li>
    </ul>

    <hr />

    <h2>6. 권한 흐름 (시스템 동작)</h2>
    <ul>
      <li>사용자가 Jira에서 T-CAFE에 접근하면 자동으로 역할이 확인됩니다</li>
      <li>신규 사용자는 자동으로 역할이 할당됩니다 (첫 사용자 → Admin, 이후 → Tester)</li>
      <li>권한 변경은 실시간으로 반영됩니다</li>
      <li>각 페이지에서 역할에 따라 버튼이 표시되거나 숨겨집니다</li>
    </ul>

    <hr />

    <h2>7. 일반적인 사용 시나리오</h2>

    <h3>시나리오 A: QA 팀</h3>
    <ul>
      <li>QA 매니저: Admin</li>
      <li>QA 엔지니어: Team Admin (TC 작성/관리)</li>
      <li>테스터: Tester (실행 전담)</li>
      <li>개발자: Developer (조회 + 코멘트만 가능)</li>
    </ul>

    <h3>시나리오 B: 작은 팀</h3>
    <ul>
      <li>개발 리드: Admin</li>
      <li>모든 팀원: Team Admin (자유롭게 작성/수정)</li>
      <li>별도 분리 없음</li>
    </ul>

    <h3>시나리오 C: 개발자 직접 작성</h3>
    <ul>
      <li>개발 리드: Admin</li>
      <li>개발자: Team Admin (자기 코드의 TC 직접 작성)</li>
      <li>별도 QA 인력 없음</li>
    </ul>

    <hr />

    <h2>8. 자주 발생하는 문제</h2>
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
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/configuration">13. Configuration (설정)</Link></li>
    </ul>
  </article>
);

const PermissionsEn = () => (
  <article className="guide-article">
    <h1>02. User Permissions</h1>
    <p className="guide-lead">
      T-CAFE provides a role-based permission system. Four system roles are provided by default (Admin, Team Admin, Tester, Developer), and custom roles can be created as the project needs them.
    </p>

    <hr />

    <h2>1. System Roles (4 defaults)</h2>
    <p>System roles cannot be deleted, but the detailed permissions of each role can be changed by an Admin.</p>
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Key</th>
          <th>Level</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Administrator</td>
          <td>Admin</td>
          <td>Top</td>
          <td>Can use every feature, including Configuration and user-permission management</td>
        </tr>
        <tr>
          <td>Team Administrator</td>
          <td>Team Admin</td>
          <td>Second</td>
          <td>Create / edit / delete TCs and TPs, Import, execute tests, access / edit Configuration (except user and role management)</td>
        </tr>
        <tr>
          <td>Tester</td>
          <td>Tester</td>
          <td>Third</td>
          <td>Execute tests, comment, create / link issues, view, and export. Cannot create / edit / delete TCs or TPs</td>
        </tr>
        <tr>
          <td>Developer</td>
          <td>Developer</td>
          <td>Lowest</td>
          <td>View, export TCs, and add comments only. Cannot execute tests (change status), export reports, create/link issues, or create/edit/delete TCs/TPs</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>2. Custom Roles</h2>
    <p>In addition to the 4 default roles, you can create custom roles tailored to the project.</p>
    <ul>
      <li>Create / modify / delete from Configuration → User Permissions → Roles tab</li>
      <li>Toggle granular action permissions by the 8 feature areas (Overview, Test Cases, Factor Combination, Test Plans, Reports, Configuration, User Management, Attachments)</li>
      <li>System roles cannot be renamed or deleted, but their permissions can be changed</li>
      <li>Custom roles can have both their name and permissions changed. They can only be deleted when no users are assigned to them</li>
    </ul>

    <hr />

    <h2>3. Default Assignment Rules</h2>
    <p>T-CAFE automatically assigns roles to users:</p>
    <ul>
      <li>The first user in a project: assigned Admin automatically</li>
      <li>Subsequent new users: assigned Tester automatically</li>
      <li>Changing a role: change in Configuration → User Permissions → Users tab via the role dropdown (both system and custom roles appear)</li>
    </ul>

    <h3>Activating / Deactivating Users</h3>
    <ul>
      <li>Activate or deactivate a user with the Activate toggle on the Users tab</li>
      <li>A deactivated user is fully blocked and cannot access the project</li>
      <li>When an Admin turns the toggle back ON, access is restored immediately</li>
      <li>Use the Status filter (Active / Inactive / All) to review deactivated users</li>
    </ul>

    <hr />

    <h2>4. Default Permission Matrix by System Role</h2>
    <p>Below are the defaults for system roles. Admins can change each role's permissions on the Roles tab, and custom roles can be configured freely.</p>

    <h3>4-1. Overview</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>View Overview</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>View statistics / charts</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Edit project description</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Create sample data</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Create Board post</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Delete Board post</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>View Milestone timeline</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-2. Test Cases</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Create TC (Single)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Create TC (Factor Combination)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Edit TC</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Delete TC</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Clone TC</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Move TC</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Import TCs (CSV / JSON / Excel)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Export TCs (CSV / JSON / Excel)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>View TC</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Search / filter TCs</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-3. Folders</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Create folder</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Rename folder</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Delete folder</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Copy folder</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Move folder</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>View folder structure</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-4. Test Plans</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Create TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Edit TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Delete TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Clone TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Add TC to TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Remove TC from TP</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Execute test (change status)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Add comment</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Create / link issue</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>View TP</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <h3>4-5. Test Reports</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>View reports</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Export reports</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
      </tbody>
    </table>

    <h3>4-6. Configuration</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Access Configuration page</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Edit Configuration (Priorities, Case Types, etc.)</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Manage users (Users tab)</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Manage roles (Roles tab)</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>View issue types</td><td className="center">O</td><td className="center">O</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>

    <h3>4-7. Attachments</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Upload attachment</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Download attachment</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Delete attachment</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>5. Changing User Permissions</h2>

    <h3>Steps to Change a Role</h3>
    <ol>
      <li>Click Configuration in the top tab (only roles with Configuration access see it)</li>
      <li>Select User Permissions in the left menu</li>
      <li>Find the user to change on the Users tab</li>
      <li>Choose a new role from the role dropdown (both system and custom roles are listed)</li>
      <li>Saves automatically</li>
    </ol>

    <h3>Steps to Create a Custom Role</h3>
    <ol>
      <li>Click the Roles tab</li>
      <li>Click the Add Role button</li>
      <li>Enter the role name</li>
      <li>Toggle the permissions for each feature area</li>
      <li>Click Create</li>
    </ol>

    <ScreenshotSlot src={shotPermissionChange} label="Change user permission" />

    <h3>Notes</h3>
    <ul>
      <li>You cannot change your own role (another Admin must change it)</li>
      <li>Last-admin protection: the last Admin of a project cannot be deleted or reassigned to another role</li>
      <li>Role changes apply immediately (take effect when the user refreshes the page)</li>
    </ul>

    <hr />

    <h2>6. Permission Flow (system behavior)</h2>
    <ul>
      <li>When a user accesses T-CAFE from Jira, the role is automatically verified</li>
      <li>New users are assigned a role automatically (first user → Admin, subsequent users → Tester)</li>
      <li>Permission changes are reflected in real time</li>
      <li>On each page, buttons are shown or hidden based on the role</li>
    </ul>

    <hr />

    <h2>7. Common Usage Scenarios</h2>

    <h3>Scenario A: QA Team</h3>
    <ul>
      <li>QA manager: Admin</li>
      <li>QA engineer: Team Admin (TC authoring / management)</li>
      <li>Tester: Tester (execution focused)</li>
      <li>Developer: Developer (view + comments only)</li>
    </ul>

    <h3>Scenario B: Small Team</h3>
    <ul>
      <li>Dev lead: Admin</li>
      <li>Every team member: Team Admin (free to create / edit)</li>
      <li>No separation</li>
    </ul>

    <h3>Scenario C: Developer-authored TCs</h3>
    <ul>
      <li>Dev lead: Admin</li>
      <li>Developer: Team Admin (authors TCs for their own code)</li>
      <li>No dedicated QA headcount</li>
    </ul>

    <hr />

    <h2>8. Common Issues</h2>
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Cause</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Configuration tab is not visible</td>
          <td>No Admin / Team Admin permission</td>
          <td>Ask an Admin to change your role</td>
        </tr>
        <tr>
          <td>Create TC button is disabled</td>
          <td>Tester / Developer role</td>
          <td>Team Admin or higher is required</td>
        </tr>
        <tr>
          <td>Cannot create Board posts</td>
          <td>No Admin permission</td>
          <td>Ask an Admin</td>
        </tr>
        <tr>
          <td>Create Issue button is disabled</td>
          <td>Developer role</td>
          <td>Tester or higher is required</td>
        </tr>
        <tr>
          <td>Cannot change your own role</td>
          <td>Self-role changes are not allowed</td>
          <td>Ask another Admin</td>
        </tr>
        <tr>
          <td>User is not in the user list</td>
          <td>No Jira project access</td>
          <td>Add them to the Jira project, then refresh</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. Test Case Basics</Link></li>
      <li><Link to="/support/guide/configuration">13. Configuration</Link></li>
    </ul>
  </article>
);

export default { ko: <Permissions />, en: <PermissionsEn /> };
