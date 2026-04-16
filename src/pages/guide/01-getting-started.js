import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import shotWelcome from '../../assets/user_guide/01-getting-started/1. welcome banner.png';
import shotMainMenu from '../../assets/user_guide/01-getting-started/2. T-CAFE 메인 메뉴 구조.png';
import shotProjectLang from '../../assets/user_guide/01-getting-started/3. 프로젝트 선택과 언어 변경.png';

const GettingStarted = () => (
  <article className="guide-article">
    <h1>01. 시작하기</h1>
    <p className="guide-lead">
      T-CAFE를 처음 사용하시는 분들을 위한 안내입니다. 첫 진입부터 첫 테스트 케이스 생성까지 단계별로 따라할 수 있습니다.
    </p>

    <hr />

    <h2>1. 첫 화면 — Welcome Banner</h2>
    <p>T-CAFE에 처음 접속하면 Overview 페이지에 환영 배너(Welcome Banner)가 표시됩니다.</p>

    <h3>Welcome Banner 구성 요소</h3>
    <ul>
      <li><strong>환영 메시지</strong>: T-CAFE 소개</li>
      <li><strong>샘플 데이터 생성 버튼</strong>: Admin 권한이 있는 경우에만 표시</li>
      <li><strong>닫기 버튼</strong> (×): 배너 숨기기</li>
    </ul>

    <ScreenshotSlot src={shotWelcome} label="Welcome Banner 화면" />

    <hr />

    <h2>2. 샘플 데이터 생성 (관리자용, 권장)</h2>
    <p>처음 사용하시는 경우 <strong>샘플 데이터를 생성</strong>하여 T-CAFE의 기능을 빠르게 파악할 수 있습니다.</p>

    <h3>권한</h3>
    <ul>
      <li><strong>Admin 전용</strong> (Team Admin / Tester / Developer는 사용 불가)</li>
    </ul>

    <h3>생성되는 샘플 데이터</h3>
    <p>샘플 데이터를 생성하면 다음이 자동으로 만들어집니다:</p>
    <ul>
      <li><strong>6개 폴더</strong>: Login, Dashboard, User Management, Payment, API Tests, Cross Browser</li>
      <li><strong>약 10개의 Test Case</strong> (Single 형식)</li>
      <li><strong>6개의 Factor Combination Test Case</strong> (Cross Browser 폴더)</li>
      <li><strong>2개의 Test Plan</strong> (Sprint 1 통합 테스트, Sprint 2 회귀 테스트)</li>
      <li><strong>2개의 게시판 게시글</strong> (공지 + 일반)</li>
      <li>
        <strong>기본 샘플 Configuration</strong> (Configuration에서 자유롭게 추가/수정/삭제 가능):
        Priority (Critical/High/Medium/Low), Case Type (Function/Performance/Regression/Security),
        Component (Frontend/Backend API/Database/Authentication/Payment), Plan Status (Draft/Open/Completed)
      </li>
    </ul>

    <h3>생성 절차</h3>
    <ol>
      <li>Overview 페이지의 Welcome Banner에서 "<strong>샘플 데이터 생성</strong>" 버튼 클릭</li>
      <li>생성 진행 (약 30초)</li>
      <li>완료 메시지 확인 후 Test Cases 탭에서 결과 확인</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>샘플 데이터는 <strong>프로젝트당 1회</strong>만 생성 가능합니다</li>
      <li>이미 생성된 적이 있다면 중복 생성되지 않습니다</li>
      <li>샘플 데이터 이름 앞에는 모두 <code>[Sample]</code> 접두사가 붙습니다 (식별 용이)</li>
      <li>필요 없으면 개별적으로 삭제하시면 됩니다</li>
    </ul>

    <hr />

    <h2>3. T-CAFE 메인 메뉴 구조</h2>
    <p>T-CAFE는 상단 탭으로 다음 페이지를 제공합니다:</p>

    <table>
      <thead>
        <tr>
          <th>탭</th>
          <th>설명</th>
          <th>권한</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Overview</strong></td>
          <td>대시보드, 통계, 게시판, Milestone</td>
          <td>모든 사용자</td>
        </tr>
        <tr>
          <td><strong>Test Cases</strong></td>
          <td>테스트 케이스 관리</td>
          <td>모든 사용자 (역할별 권한 차이)</td>
        </tr>
        <tr>
          <td><strong>Test Plans</strong></td>
          <td>테스트 계획 관리 및 실행</td>
          <td>모든 사용자 (역할별 권한 차이)</td>
        </tr>
        <tr>
          <td><strong>Test Reports</strong></td>
          <td>테스트 리포트</td>
          <td>모든 사용자</td>
        </tr>
        <tr>
          <td><strong>Configuration</strong></td>
          <td>설정 (Priorities, Case Types 등)</td>
          <td><strong>Admin / Team Admin</strong></td>
        </tr>
        <tr>
          <td><strong>Attachments</strong></td>
          <td>첨부파일 관리</td>
          <td>모든 사용자</td>
        </tr>
      </tbody>
    </table>

    <ScreenshotSlot src={shotMainMenu} label="상단 탭 메뉴" />

    <hr />

    <h2>4. 프로젝트 선택과 언어 변경</h2>

    <h3>프로젝트 선택</h3>
    <ul>
      <li>T-CAFE는 <strong>프로젝트별로 데이터가 격리</strong>됩니다</li>
      <li>우상단의 프로젝트 선택 드롭다운에서 작업할 프로젝트를 선택하세요</li>
      <li>프로젝트를 변경하면 모든 데이터가 해당 프로젝트로 전환됩니다</li>
    </ul>

    <h3>언어 변경</h3>
    <ul>
      <li>우상단의 언어 선택 메뉴에서 한국어 / English / 日本語 중 선택</li>
      <li>언어 설정은 <strong>사용자별 + 프로젝트별</strong>로 저장됩니다</li>
    </ul>

    <ScreenshotSlot src={shotProjectLang} label="프로젝트/언어 선택 메뉴" />

    <hr />

    <h2>5. 다음 단계</h2>
    <p>T-CAFE를 처음 사용하신다면 다음 순서로 진행하시는 것을 권장합니다:</p>
    <ol>
      <li><strong>샘플 데이터 생성</strong> (위 2번)</li>
      <li><strong>사용자 권한 설정</strong> (<Link to="/support/guide/permissions">02. 사용자 권한</Link>)</li>
      <li><strong>테스트 케이스 살펴보기</strong> (<Link to="/support/guide/test-cases">05. 테스트 케이스 기본 사용법</Link>)</li>
      <li><strong>테스트 플랜 살펴보기</strong> (<Link to="/support/guide/test-plans">10. 테스트 플랜 관리</Link>)</li>
      <li><strong>실제 테스트 케이스 작성하기</strong></li>
    </ol>

    <hr />

    <h2>자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr>
          <th>문제</th>
          <th>해결</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Welcome Banner가 보이지 않음</td>
          <td>이미 닫은 적이 있거나, 다른 페이지에 있는지 확인</td>
        </tr>
        <tr>
          <td>샘플 데이터 생성 버튼이 비활성</td>
          <td>Admin 권한이 없는 경우 표시 안 됨</td>
        </tr>
        <tr>
          <td>샘플 데이터 생성 실패</td>
          <td>이미 생성된 적이 있는지 확인 ([Sample] 접두사 데이터 검색)</td>
        </tr>
        <tr>
          <td>프로젝트가 보이지 않음</td>
          <td>Jira에서 해당 프로젝트 접근 권한 확인</td>
        </tr>
      </tbody>
    </table>
    <p>자세한 내용은 <Link to="/support/guide/faq">15. FAQ</Link>를 참고하세요.</p>
  </article>
);

const GettingStartedEn = () => (
  <article className="guide-article">
    <h1>01. Getting Started</h1>
    <p className="guide-lead">
      This guide is for users starting T-CAFE for the first time. Follow the steps below from initial access to creating your first test case.
    </p>

    <hr />

    <h2>1. First Screen — Welcome Banner</h2>
    <p>When you first access T-CAFE, the Welcome Banner is shown on the Overview page.</p>

    <h3>Welcome Banner Components</h3>
    <ul>
      <li><strong>Welcome message</strong>: T-CAFE introduction</li>
      <li><strong>Create Sample Data button</strong>: shown only to users with the Admin role</li>
      <li><strong>Close button</strong> (×): hides the banner</li>
    </ul>

    <ScreenshotSlot src={shotWelcome} label="Welcome Banner" />

    <hr />

    <h2>2. Create Sample Data (Admin only, recommended)</h2>
    <p>If you are a first-time user, generate <strong>sample data</strong> to quickly explore T-CAFE's features.</p>

    <h3>Permission</h3>
    <ul>
      <li><strong>Admin only</strong> (not available for Team Admin / Tester / Developer)</li>
    </ul>

    <h3>Sample Data Created</h3>
    <p>When you generate sample data, the following are created automatically:</p>
    <ul>
      <li><strong>6 folders</strong>: Login, Dashboard, User Management, Payment, API Tests, Cross Browser</li>
      <li><strong>About 10 Test Cases</strong> (Single type)</li>
      <li><strong>6 Factor Combination Test Cases</strong> (in the Cross Browser folder)</li>
      <li><strong>2 Test Plans</strong> (Sprint 1 Integration Test, Sprint 2 Regression Test)</li>
      <li><strong>2 board posts</strong> (Notice + General)</li>
      <li>
        <strong>Default sample Configuration</strong> (freely add/edit/delete in Configuration):
        Priority (Critical/High/Medium/Low), Case Type (Function/Performance/Regression/Security),
        Component (Frontend/Backend API/Database/Authentication/Payment), Plan Status (Draft/Open/Completed)
      </li>
    </ul>

    <h3>Steps to Create</h3>
    <ol>
      <li>On the Overview page Welcome Banner, click the "<strong>Create Sample Data</strong>" button</li>
      <li>Wait for creation to finish (about 30 seconds)</li>
      <li>After the completion message, check the result on the Test Cases tab</li>
    </ol>

    <h3>Notes</h3>
    <ul>
      <li>Sample data can be generated <strong>only once per project</strong></li>
      <li>If it has already been generated, it will not be regenerated</li>
      <li>All sample data names are prefixed with <code>[Sample]</code> (for easy identification)</li>
      <li>Delete individually if no longer needed</li>
    </ul>

    <hr />

    <h2>3. T-CAFE Main Menu Structure</h2>
    <p>T-CAFE provides the following pages via top tabs:</p>

    <table>
      <thead>
        <tr>
          <th>Tab</th>
          <th>Description</th>
          <th>Permission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Overview</strong></td>
          <td>Dashboard, statistics, board, Milestone</td>
          <td>All users</td>
        </tr>
        <tr>
          <td><strong>Test Cases</strong></td>
          <td>Test case management</td>
          <td>All users (varies by role)</td>
        </tr>
        <tr>
          <td><strong>Test Plans</strong></td>
          <td>Test plan management and execution</td>
          <td>All users (varies by role)</td>
        </tr>
        <tr>
          <td><strong>Test Reports</strong></td>
          <td>Test reports</td>
          <td>All users</td>
        </tr>
        <tr>
          <td><strong>Configuration</strong></td>
          <td>Settings (Priorities, Case Types, etc.)</td>
          <td><strong>Admin / Team Admin</strong></td>
        </tr>
        <tr>
          <td><strong>Attachments</strong></td>
          <td>Attachment management</td>
          <td>All users</td>
        </tr>
      </tbody>
    </table>

    <ScreenshotSlot src={shotMainMenu} label="Top Tab Menu" />

    <hr />

    <h2>4. Project Selection and Language Change</h2>

    <h3>Project Selection</h3>
    <ul>
      <li>T-CAFE <strong>isolates data per project</strong></li>
      <li>Choose the project you want to work on from the project selector dropdown in the top-right</li>
      <li>Changing the project switches all data to that project</li>
    </ul>

    <h3>Language Change</h3>
    <ul>
      <li>Choose English / 한국어 / 日本語 from the language selector menu in the top-right</li>
      <li>Language settings are saved <strong>per user + per project</strong></li>
    </ul>

    <ScreenshotSlot src={shotProjectLang} label="Project / Language Selector" />

    <hr />

    <h2>5. Next Steps</h2>
    <p>For first-time T-CAFE users, we recommend proceeding in this order:</p>
    <ol>
      <li><strong>Create sample data</strong> (section 2 above)</li>
      <li><strong>Configure user permissions</strong> (<Link to="/support/guide/permissions">02. User Permissions</Link>)</li>
      <li><strong>Explore Test Cases</strong> (<Link to="/support/guide/test-cases">05. Test Case Basics</Link>)</li>
      <li><strong>Explore Test Plans</strong> (<Link to="/support/guide/test-plans">10. Test Plan Management</Link>)</li>
      <li><strong>Write your own test cases</strong></li>
    </ol>

    <hr />

    <h2>Common Issues</h2>
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Welcome Banner is not visible</td>
          <td>Check whether it was previously closed, or whether you are on a different page</td>
        </tr>
        <tr>
          <td>Create Sample Data button is disabled</td>
          <td>Not shown to users without the Admin role</td>
        </tr>
        <tr>
          <td>Sample data creation failed</td>
          <td>Check whether it was already created (search for data with the [Sample] prefix)</td>
        </tr>
        <tr>
          <td>Project is not visible</td>
          <td>Verify your access permission for the project in Jira</td>
        </tr>
      </tbody>
    </table>
    <p>For more details, see <Link to="/support/guide/faq">15. FAQ</Link>.</p>
  </article>
);

export default { ko: <GettingStarted />, en: <GettingStartedEn /> };
